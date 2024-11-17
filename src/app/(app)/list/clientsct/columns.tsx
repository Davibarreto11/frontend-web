"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Definindo o tipo de dados
export type clientsct = {
  id: string;
  client: string;
  date: string;
  email: string;
  fone: string;
  avatar: string;
  cpf:string;
};

// Definindo as colunas
export const columns: ColumnDef<clientsct>[] = [

  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => (
      <span className="text-[#32a8a2] font-medium text-2xl">{String(info.getValue())}</span>
    ),
  },
  {
    accessorKey: "avatar",
    header: "Perfil",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2 font-bold ">
        <Avatar>
          <AvatarImage src={row.original.avatar} alt={`${row.original.client}'s avatar`} />
          <AvatarFallback className= "bg-[#32a8a2]">{row.original.client.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    accessorKey: "client",
    header: "Cliente",
    cell: (info) => (info.getValue()),
  },
  {
    accessorKey: "date",
    header: "Data do Cadastro",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "email",
    header: "E-mail",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "fone",
    header: "Telefone",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "cpf",
    header: "CPF",
    cell: (info) => info.getValue(),
  },
];
