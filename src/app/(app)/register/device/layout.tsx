import { isAuthenticated } from "@/auth/auth";
import { redirect } from "next/navigation";
export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!isAuthenticated()) {
    redirect("/auth/sign-in");
  }

  // style={{
  //   backgroundImage: `url(${BackgroundRegist.src})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat'
  // }}

  return (
    <div className="flex w-full px-[8rem] pb-[4rem] justify-center items-center">
      {children}
    </div>
  );
}
