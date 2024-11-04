import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getProfile } from "@/http/get-profile";

export function isAuthenticated() {
  return !!cookies().get("token")?.value;
}

// export function getCurrentOrg() {
//   return cookies().get("org")?.value ?? null;
// }

export async function auth() {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/auth/sign-in");
  }

  try {
    const { id, email } = await getProfile();

    return { id, email };
  } catch {}

  redirect("/api/auth/sign-out");
}
