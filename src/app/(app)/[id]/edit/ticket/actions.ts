"use server";

import { updateIcket } from "@/http/update-ticket";
import { HTTPError } from "ky";
import { z } from "zod";

const TicketSchema = z.object({
  id: z.string(),
  repair_price: z.string().min(1, { message: "Por favor, forneça o preco" }),
  pecas:z.any(),
  sintoma: z.string(),
  status: z
    .string()
    .min(1, { message: "Por favor, forneça um status válido." }),
  descricao: z
    .string()
    .min(1, { message: "Por favor, forneça uma descricao válida." }),
  comentario: z
    .string()
    .min(1, { message: "Por favor, forneça um comentario válido." }),
});

export type TicketShema = z.infer<typeof TicketSchema>;

export async function updateTicketAction(data: FormData) {
  const result = TicketSchema.safeParse(Object.fromEntries(data));
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    console.log(errors)
    return { success: false, message: null, errors };
  }
  const {
    repair_price,
    comentario,
    descricao,
    status,
    id,
    sintoma,
    pecas,
  } = result.data;

  try {
    await updateIcket({
      ticket: {
        sintoma,
        id: Number(id),
        repair_price,
        comentario,
        descricao,
        status,
        pecas: Array(pecas),
      },
    });
  } catch (err) {
    if (err instanceof HTTPError) {
      const { error } = await err.response.json();
      return { success: false, message: error.message, errors: null };
    }

    console.log(err);
    return {
      success: false,
      message: "Error inesperado, tente novamente em alguns minutos.",
      errors: null,
    };
  }
  return { success: true, message: null, errors: null };
}
