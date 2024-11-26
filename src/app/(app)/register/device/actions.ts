"use server";

import { createDevice } from "@/http/create-device";
import { HTTPError } from "ky";
import { z } from "zod";

const createClientSchema = z.object({
  clientId: z.string().optional(),
  imei: z.string().min(15, { message: "Por favor, forneça um imei válido." }),
  serial: z.string().min(7, { message: "Por favor, forneça um serie válida." }),
  name: z.string().min(6, { message: "Por favor, forneça um nome válido." }),
  cpf: z.string().min(8, { message: "Por favor, forneça um CPF válido." }),
  marca: z.string().min(5, { message: "Por favor, forneça um marca válido." }),
  model: z.string().min(1, { message: "Por favor, forneça um modelo válido." }),
});

type ClientShema = z.infer<typeof createClientSchema>;

export async function createDeviceAction(data: FormData) {
  const result = createClientSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const { clientId, name, cpf, imei, marca, model, serial } = result.data;
  try {
    await createDevice({
      mobile_device: {
        imei,
        marca,
        modelo: model,
        serial,
        client_id: clientId!,
      },
    });
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
