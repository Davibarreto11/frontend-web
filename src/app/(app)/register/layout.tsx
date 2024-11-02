// import { isAuthenticated } from '@/auth/auth'
import BackgroundRegist from '@/assets/background-client.svg';
export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   if (isAuthenticated()) {
  //     redirect("/");
  //   }

  // style={{
  //   backgroundImage: `url(${BackgroundRegist.src})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat'
  // }}

  return (
    
    <div  className="flex w-ful h-screen justify-center items-center">
      {children}
    </div>
  );
}
