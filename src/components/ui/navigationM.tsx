// components/Navbar.tsx

"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { cn } from "@/lib/utils"; // Certifique-se de que `cn` esteja configurado corretamente para unir classes.
import { useRouter } from "next/navigation";
import { Avatar } from "@radix-ui/react-avatar";

export function Navbar() {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between bg-background border-b border-border px-6 py-4">
      {/* Logo ou Nome do Site */}
      <Link href="/" className="">
        <Image src={Logo} alt="marca" width={100} height={100} />
      </Link>

      {/* Links de Navegação */}
      <div className=" flex space-x-8 ">
        <Link href="" className=" hover:text-foreground text-[#3ca399] font-bold">
          Início
        </Link>
        <Link href="/clientes" className=" hover:text-foreground text-[#3ca399] font-bold">
          Clientes
        </Link>
        <Link href="/sobre" className=" hover:text-foreground text-[#3ca399] font-bold">
          Aparelhos
        </Link>
        <Link href="/contato" className=" hover:text-foreground text-[#3ca399] font-bold">
          Tickets
        </Link>
      </div>

      {/* Botão de Ação */}
      <Button className="bg-[#3ca399]" variant="default" onClick={() => router.push("/login")}>
        Entrar
      </Button>
    </nav>
  );
}
