"use client";

import { useEffect, useState } from "react";
import { clientsct, columns } from "./columns";
import { DataTable } from "./data-table";
import { Navbar } from "../../../../components/ui/navigationM"; // Importe o Navbar

async function getData(): Promise<clientsct[]> {
  return [
    {
      id: "1",
      client: "Dave Sousa",
      date: "10/02/2004",
      mark: "Galaxy S21 Fe",
      status: "Orçamento aprovado",
      avatar: "c", // Adicione um link de avatar aqui se necessário
    },
    {
        id: "2",
        client: "Tave Sousa",
        date: "10/02/2004",
        mark: "Galaxy S21 Fe",
        status: "Orçamento aprovado",
        avatar: "c", // Adicione um link de avatar aqui se necessário
    },
    {
        id: "3",
        client: "Lave Sousa",
        date: "10/02/2004",
        mark: "Galaxy S21 Fe",
        status: "Orçamento aprovado",
        avatar: "c", // Adicione um link de avatar aqui se necessário
    },
    // Outros dados
  ];
}

export default function DemoPage() {
  const [data, setData] = useState<clientsct[] | null>(null);

  useEffect(() => {
    getData().then((fetchedData) => setData(fetchedData));
  }, []);

  return (
    <div>
      {/* Barra de Navegação */}
      <Navbar />

      <div className="container mx-auto py-10">
        <h1 className="text-3xl">Ordens em Andamento</h1>
        <p>Lista de clientes com dados de contato e data de cadastro.</p>
        {data ? <DataTable columns={columns} data={data} /> : <p>Carregando...</p>}
      </div>
    </div>
  );
} 
