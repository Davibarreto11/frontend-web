"use client";

import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "@/http/get-clients";
import { Loader2 } from "lucide-react";
import { Navbar } from "../../../../components/ui/navigationM"; // Importe o Navbar

async function getData(): Promise<any[]> {
  return [
    {
      id: "1",
      client: "Dave Sousa",
      date: "10/02/2004",
      email: "m@example.com",
      fone: "(88) 9 9906-4345",
      avatar: "c", // Adicione um link de avatar aqui se necessário
      cpf:"123.123.123-11" // Adicione um link de avatar aqui se necessário
    },
    {
      id: "2",
      client: "Ana Silva",
      date: "15/03/2005",
      email: "ana@example.com",
      fone: "(11) 9 1234-5678",
      avatar: "c", // Adicione um link de avatar aqui se necessário
      cpf:"122.122.122-21"  // Adicione um link de avatar aqui se necessário
    },
    {
      id: "3",
      client: "Carlos Souza",
      date: "20/04/2006",
      email: "carlos@example.com",
      fone: "(21) 9 8765-4321",
      avatar: "c", // Adicione um link de avatar aqui se necessário
      cpf:"143.143.143-41"  // Adicione um link de avatar aqui se necessário
    },
    // Outros dados
  ];
}

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
      {/* Barra de Navegação */}
      <Navbar />

      <div className="container mx-auto py-10">
        <h1 className="text-3xl">Clientes Cadastrados</h1>
        <p>Lista de clientes com dados de contato e data de cadastro.</p>
        {getData ? <DataTable columns={columns} data={getData()} /> : <p>Carregando...</p>}


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
    </div>
  )
}
