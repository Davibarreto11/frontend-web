"use server";

import { createClient } from "@/http/create-client";
import { createDevice } from "@/http/create-device";
import { HTTPError } from "ky";
import { z } from "zod";

const createClientSchema = z.object({
  imei: z.string().min(5, { message: "Por favor, forneça um imei válido." }),
  serie: z.string().min(7, { message: "Por favor, forneça um serie válida." }),
  name: z.string().min(6, { message: "Por favor, forneça um nome válido." }),
  cpf: z.string().min(13, { message: "Por favor, forneça um CPF válido." }),
  device: z
    .string()
    .min(3, { message: "Por favor, forneça um aparelho válido." }),
  marca: z.string().min(5, { message: "Por favor, forneça um marca válido." }),
  model: z
    .string()
    .min(11, { message: "Por favor, forneça um modelo válido." }),
});

export async function createDeviceAction(data: FormData) {
  const result = createClientSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const { device, cpf, name, imei, marca, model, serie } = result.data;
  try {
    await createDevice({
      mobile_device: {
        nome: name,
        cpf,
        aparelho: device,
        imei,
        marca,
        modelo: model,
        serie,
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
