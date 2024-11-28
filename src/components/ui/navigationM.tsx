// components/Navbar.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import { cn } from "@/lib/utils"; // Certifique-se de que `cn` esteja configurado corretamente para unir classes.
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { UserPlus, Smartphone, UserSearch, Ticket } from "lucide-react";

export function Navbar() {
  const router = useRouter();

  return (
    <nav className=" flex items-center rounded-b-3xl justify-between bg-background border-b border-border pl-12 pr-[12rem] py-7 shadow-lg">
      {/* Logo ou Nome do Site */}
      <Link href="/" className="">
        <Image src={Logo} alt="marca" width={100} height={100} />
      </Link>

      {/* Links de Navegação */}
      <div className=" flex space-x-32 items-center">
        <Menubar className="border-none shadow-none ">
          <MenubarMenu>
            <Link href="/">
              <MenubarTrigger className=" text-[18px] hover:text-[#2F8385] transition ease-in-out delay-100 duration-450 text-[#3ca399] font-semibold cursor-pointer">
                Home
              </MenubarTrigger>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className=" text-[18px] hover:text-[#2F8385] transition ease-in-out delay-100 duration-450 text-[#3ca399] font-semibold cursor-pointer">
              Registrar
            </MenubarTrigger>
            <MenubarContent>
              <Link href="/register/client">
                <MenubarItem>
                  Cliente{" "}
                  <MenubarShortcut>
                    <UserPlus />
                  </MenubarShortcut>
                </MenubarItem>
              </Link>
              <MenubarSeparator />
              <Link href="/register/device">
                <MenubarItem>
                  Aparelho{" "}
                  <MenubarShortcut>
                    <Smartphone />
                  </MenubarShortcut>
                </MenubarItem>
              </Link>
              <MenubarSeparator />
              <Link href="/register/ticket">
                <MenubarItem>
                  Ticket{" "}
                  <MenubarShortcut>
                    <Ticket />
                  </MenubarShortcut>
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className=" text-[18px] hover:text-[#2F8385] transition ease-in-out delay-100 duration-450 text-[#3ca399] font-semibold cursor-pointer">
              Listar
            </MenubarTrigger>
            <MenubarContent>
              <Link href="/list/clientsct">
                <MenubarItem>
                  Cliente{" "}
                  <MenubarShortcut>
                    <UserSearch />
                  </MenubarShortcut>
                </MenubarItem>
              </Link>

              <Link href="/ordens_status/ordens_geral">
                <MenubarItem>
                  Ordens
                  <MenubarShortcut>
                    <Smartphone />
                  </MenubarShortcut>
                </MenubarItem>
              </Link>
              <MenubarSeparator />
              <Link href="/ordens_status/ordens_historico">
                <MenubarItem>
                  Histórico
                  <MenubarShortcut>
                    <Smartphone />
                  </MenubarShortcut>
                </MenubarItem>
              </Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <Avatar className="w-12 h-12">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            className=" hover:brightness-[.85] transition ease-in-out delay-75 duration-450 cursor-pointer "
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <Link href="/api/auth/sign-out">Sair</Link>
      </div>
    </nav>
  );
}
