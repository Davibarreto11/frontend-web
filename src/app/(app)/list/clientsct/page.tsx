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
      email: "m@example.com",
      fone: "(88) 9 9906-4345",
      avatar: "c",
      cpf:"123.123.123-11" // Adicione um link de avatar aqui se necessário
    },
    {
      id: "2",
      client: "Ana Silva",
      date: "15/03/2005",
      email: "ana@example.com",
      fone: "(11) 9 1234-5678",
      avatar: "c",
      cpf:"122.122.122-21"  // Adicione um link de avatar aqui se necessário
    },
    {
      id: "3",
      client: "Carlos Souza",
      date: "20/04/2006",
      email: "carlos@example.com",
      fone: "(21) 9 8765-4321",
      avatar: "c",
      cpf:"143.143.143-41"  // Adicione um link de avatar aqui se necessário
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

      <div className="">
        <div className="container mb-[6rem] mt-[2rem] ml-[12rem]">
          <h1 className="text-[42px] font-bold">Clientes Cadastrados</h1>
          <p className="text-sm ml-2 text-gray-600">Lista de clientes com dados de contato e data de cadastro.</p>
        </div>
        <div className="flex flex-col items-center">       
           {data ? <DataTable columns={columns} data={data} /> : <p>Carregando...</p>}
        </div>

      </div>
    </div>
  );
} 
