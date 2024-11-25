"use server";

import { createDevice } from "@/http/create-device";
import { HTTPError } from "ky";
import { z } from "zod";

const createTicketSchema = z.object({
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

type TicketShema = z.infer<typeof createTicketSchema>;

export async function createTicketAction(data: FormData) {
  const result = createTicketSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    return { success: false, message: null, errors };
  }

  const { comentario, descricao, status } = result.data;
  console.log({ comentario, descricao, status });
  try {
    // await createTicket({
    //   mobile_device: {
    //     modelo
    //     serial,
    //     client_id:
    //   },
    // });
  } catch (err) {
    if (err instanceof HTTPError) {
      const { error } = await err.response.json();
      return { success: false, message: error, errors: null };
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
