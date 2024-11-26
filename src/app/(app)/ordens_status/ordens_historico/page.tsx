"use client";
import { columns } from "./columns"; // Colunas definidas
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

  const filterTicket = tickets?.filter(
    (ticket) =>
      ticket.status === "Pedido entregue" ||
      ticket.status === "Pedido reprovado entregue"
  );

  // Verifica se os dados estão carregando ou se ocorreu um erro
  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro ao carregar os dados.</p>;

  // Se o ticket foi carregado, mapeia os dados para o formato necessário

  return (
    <div>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl">Histórico de ordens</h1>
        <p>Lista de clientes com dados de contato e data de cadastro.</p>
        {tickets ? (
          <DataTable columns={columns} data={filterTicket!} />
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}