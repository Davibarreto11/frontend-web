"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useQuery } from "@tanstack/react-query";
import { getTickets } from "@/http/get-device-ticket";

export default function DemoPage() {
  const {
    error,
    data: tickets,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: getTickets,
  });

  const filterTickets = tickets?.filter(
    (ticket) => ticket.status === "Pendente"
  );

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Ocorreu um erro ao carregar os dados.</p>;

  return (
    <div>
      {/* Barra de Navegação */}

      <div className="container mx-auto py-10">
        <h1 className="text-[42px] font-bold">Ordens em Andamento</h1>
        <p className="text-sm ml-2 text-gray-600">
          Lista de clientes com status em andamento.
        </p>
        {/* Passando o array completo ticket */}
        {tickets && tickets.length > 0 ? (
          <DataTable columns={columns} data={filterTickets} />
        ) : (
          <p>Sem dados disponíveis.</p>
        )}
      </div>
    </div>
  );
}
