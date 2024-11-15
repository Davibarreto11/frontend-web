// components/Navbar.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { cn } from "@/lib/utils"; // Certifique-se de que `cn` esteja configurado corretamente para unir classes.
import { useRouter } from "next/navigation";
import { Avatar,AvatarFallback, AvatarImage  } from "@/components/ui/avatar";


export function Navbar() {
  const router = useRouter();

  return (
    <nav className=" flex items-center rounded-b-2xl justify-between bg-background border-b border-border pl-12 pr-[12rem] py-7 shadow-lg">
      {/* Logo ou Nome do Site */}
      <Link href="/" className="">
        <Image src={Logo} alt="marca" width={100} height={100} />
      </Link>

      {/* Links de Navegação */}
      <div className=" flex space-x-20 items-center">
        <div className="flex space-x-8 text-[18px]    items-center">
          <Link href="/" className=" transition ease-in-out delay-100 duration-450 hover:text-teal-700 text-[#3ca399] font-semibold">
            Início
          </Link>
          <Link href="/register/client" className=" transition ease-in-out delay-100 duration-450  hover:text-teal-700  text-[#3ca399] font-semibold">
            Clientes
          </Link>
          <Link href="/register/device" className="transition ease-in-out delay-100 duration-450  hover:text-teal-700  text-[#3ca399] font-semibold">
            Aparelhos
          </Link>
          <Link href="#" className="transition ease-in-out delay-100 duration-450  hover:text-teal-700  text-[#3ca399] font-semibold">
            Tickets
          </Link>
        </div>

        <Avatar className="w-12 h-12" >
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className=" hover:brightness-[.85] transition ease-in-out delay-75 duration-450 cursor-pointer "/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>


    </nav>
  );
}
