"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
export type clientsct = {
  id: number;
  data_abertura: string;
  data_fechamento: null;
  descricao: string;
  status: string;
  comentario: string;
  sintoma: string;
  created_at: string;
  updated_at: string;
  user_id: number;
  mobile_device_id: number;
  repair_price?: any;
  pecas: [];
  mobile_device?: {
    id: number;
    imei: string;
    serial: string;
    modelo: string;
    marca: string;
    created_at: string;
    updated_at: string;
    client_id: number;
    client?: {
      id: number;
      cpf: string;
      nome: string;
      telefone: string;
      email: string;
      created_at: string;
      updated_at: string;
    };
  };
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
      <span className="text-[#32a8a2] font-medium text-2xl">
        {String(info.getValue())}
      </span>
    ),
  },
  {
    accessorKey: "avatar",
    header: "Perfil",
    cell: ({ row }) => (
      <div className="flex items-center space-x-2 ">
        <Avatar>
          <AvatarImage
            src={row.original.mobile_device?.client?.nome}
            alt={`${row.original.mobile_device?.client?.nome}'s avatar`}
          />
          <AvatarFallback className="bg-[#32a8a2]">
            {row.original.mobile_device?.client?.nome.substr(0, 1)}
          </AvatarFallback>
        </Avatar>
      </div>
    ),
  },
  {
    accessorFn: (row) => row.mobile_device?.imei,
    id: "mobile_device_imei",
    header: "Dispositivo IMEI",
    cell: (info) => info.getValue() || "Não informado",
  },
  {
    accessorFn: (row) => row.mobile_device?.client?.nome,
    header: "Client",
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
    accessorKey: "status",
    header: "Status",
    cell: (info) => info.getValue(),
  },
  {
    id: "actions",
    header: "Ações",
    cell: ({ row }) => (
      <button
        onClick={() => {
          // Redireciona para a página de edição com o ID do ticket
          window.location.href = `/${row.original.id}/edit/ticket`;
        }}
        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
      >
        Editar
      </button>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  
];
