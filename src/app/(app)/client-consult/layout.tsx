import { isAuthenticated } from "@/auth/auth";
import { Navbar } from "@/components/ui/navigationM";
import { redirect } from "next/navigation";
export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!isAuthenticated()) {
    redirect("/auth/sign-in");
  }

  return (

      <div className=" flex items-center justify-center">
        {children}
      </div>
  );
}
