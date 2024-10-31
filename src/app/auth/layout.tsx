// import { isAuthenticated } from '@/auth/auth'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //   if (isAuthenticated()) {
  //     redirect("/");
  //   }

  return (
    <div className="flex min-h-screen items-center justify-around px-4">
      {children}
    </div>
  );
}
