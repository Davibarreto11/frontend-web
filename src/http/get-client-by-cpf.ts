import api from "./api-client";

interface GetClientByCPFResponse {
  id: string;
  cpf: string;
  email: string;
  telefone: string;
  nome: string;
}

export async function getClientByCPF(cpf: string) {
  const result = await api
    .get(`search_clients`, {
      searchParams: { q_cpf_cont: cpf },
    })
    .json<GetClientByCPFResponse>();

  return result;
}
