import api from "./api-client";

interface UpdateTicketRequest {
  ticket: {
    id?: number;
    descricao: string;
    status: string;
    comentario: string;
    sintoma?: string;
    pecas?: any[];
    repair_price: string
  };
}

export async function updateIcket({ ticket }: UpdateTicketRequest) {
  console.log(ticket)
  const result = await api.put(`tickets/${ticket.id}`, {
    json: {
      ticket: {
        ticket
      },
    },
  });
  return result;
}
