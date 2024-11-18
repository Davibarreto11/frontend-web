"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "@/http/get-clients";
import { Loader2 } from "lucide-react";

export default function DemoPage() {
  const {
    error,
    data: client,
    refetch,
  } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  });

  return (
    <div>
      <div className="">
        <div className="container mb-[6rem] mt-[2rem] ml-[12rem]">
          <h1 className="text-[42px] font-bold">Clientes Cadastrados</h1>
          <p className="text-sm ml-2 text-gray-600">
            Lista de clientes com dados de contato e data de cadastro.
          </p>
        </div>
        <div className="flex flex-col items-center">
          {client ? (
            <DataTable columns={columns} data={client} />
          ) : (
            <Loader2 className="size-8 animate-spin" />
          )}
        </div>
      </div>
    </div>
  );
}
