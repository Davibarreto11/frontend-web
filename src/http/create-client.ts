import api from "./api-client";

interface CreateClientRequest {
  client: {
    nome: string;
    email: string;
    cpf: string;
    telefone: string;
  };
}

export async function createClient({ client }: CreateClientRequest) {
  const result = await api.post("clients", {
    json: {
      client,
    },
  });
  return result;
}
