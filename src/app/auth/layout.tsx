import { isAuthenticated } from "@/auth/auth";
import { redirect } from "next/navigation";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (isAuthenticated()) {
    redirect("/");
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      {children}
    </div>
  );
}
