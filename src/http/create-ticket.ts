import api from "./api-client";

interface CreateTicketRequest {
  ticket: {
    data_abertura?: string;
    data_fechamento?: string;
    descricao: string;
    status: string;
    comentario: string;
    sintoma?: string;
    anexo?: string;
    pecas?: string;
    mobile_device_id?: string;
  };
}

export async function createTicket({ ticket }: CreateTicketRequest) {
  const result = await api.post("tickets", {
    json: {
      ticket,
    },
  });
  return result;
}
