"use client";

import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Definindo o tipo de dados
export type clientsct = {
  id: string;
  nome: string;
  created_at: string;
  email: string;
  telefone: string;
  avatar: string;
  cpf: string;
};

// Definindo as colunas
export const columns: ColumnDef<clientsct>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => (
      <span className="text-[#32a8a2] font-medium text-2xl">
        {String(info.getValue())}
      </span>
    ),
  },
  {
    accessorKey: "avatar",
    header: "Perfil",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2 font-bold ">
        <Avatar>
          <AvatarImage
            src={row.original.avatar}
            alt={`${row.original.nome}'s avatar`}
          />
          <AvatarFallback className="bg-[#32a8a2]">
            {row.original.nome.substr(0, 1)}
          </AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    accessorKey: "nome",
    header: "Cliente",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "created_at",
    header: "Data do Cadastro",
    cell: (info) => {
      const formattedDate = format(
        new Date(info.getValue() as string),
        "dd/MM/yyyy"
      );
      return formattedDate;
    },
  },
  {
    accessorKey: "email",
    header: "E-mail",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "telefone",
    header: "Telefone",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "cpf",
    header: "CPF",
    cell: (info) => info.getValue(),
  },
];
