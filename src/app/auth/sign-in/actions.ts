"use server";

import { HTTPError } from "ky";
import { cookies } from "next/headers";
import { z } from "zod";

import { signInWithPassword } from "@/http/sign-in-with-password";

const signInSchema = z.object({
  email: z.string().email({ message: "Por favor, forneça um email válido." }),
  password: z
    .string()
    .min(1, { message: "Por favor, foneça uma senha válida" }),
});

export async function signInWithEmailAndPassword(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const { email, password } = result.data;

  try {
    const { token } = await signInWithPassword({
      email,
      password,
    });

    cookies().set("token", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 2, // 2 days
    });
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();

      return { success: false, message, errors: null };
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
