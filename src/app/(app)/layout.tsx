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

  // style={{
  //   backgroundImage: `url(${BackgroundRegist.src})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat'
  // }}

  return (

    <div>
      <Navbar />
      <div className=" pt-[3rem] px-[3rem] ">
        {children}
      </div>
    </div>
  );
}
