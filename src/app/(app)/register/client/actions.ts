"use server";

import { createClient } from "@/http/create-client";
import { HTTPError } from "ky";
import { z } from "zod";

const createClientSchema = z.object({
  name: z.string().min(5, { message: "Por favor, forneça um nome válido." }),
  email: z.string().email({ message: "Por favor, forneça um email válido." }),
  cpf: z.string().min(10, { message: "Por favor, forneça um CPF válido." }),
  phone: z
    .string()
    .min(11, { message: "Por favor, forneça um telefone válido." }),
});

export async function createClientAction(data: FormData) {
  const result = createClientSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const { email, cpf, name, phone } = result.data;
  try {
    await createClient({
      client: {
        nome: name,
        email,
        cpf,
        telefone: phone,
      },
    });

    // redirect("/register/device");
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
