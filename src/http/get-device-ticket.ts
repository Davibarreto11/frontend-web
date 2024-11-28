import api from "./api-client";

export interface GetTicketResponse {
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
  repair_price?: string;
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
}

export async function getTickets() {
  const result = await api.get(`tickets`).json<GetTicketResponse[]>();

  return result;
}
