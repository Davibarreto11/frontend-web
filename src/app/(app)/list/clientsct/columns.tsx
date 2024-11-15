"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


// Definindo o tipo de dados
export type clientsct = {
  id: string;
  client: string;
  date: string;
  email: string;
  fone: string;
  avatar: string;
};

// Definindo as colunas
export const columns: ColumnDef<clientsct>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
      <div className="flex items-center space-x-2 ">
        <Avatar>
          <AvatarImage src={row.original.avatar} alt={`${row.original.client}'s avatar`} />
          <AvatarFallback className= "bg-[#32a8a2]">{row.original.client.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    accessorKey: "client",
    header: "Client",
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
];
