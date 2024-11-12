import api from "./api-client";

interface GetClientsResponse {
  id: string;
  cpf: string;
  email: string;
  telefone: string;
  nome: string;
  mobile_devices?: [];
}

export async function getClients() {
  const result = await api.get("clients").json<GetClientsResponse>();

  return result;
}
