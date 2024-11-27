"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createClientAction } from "./actions";
import { useFormState } from "@/hooks/user-form-state";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export const CreateClientForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    createClientAction,
    () => {
      toast({
        variant: "default",
        title: "Redirecionando para criar device",
        description: "Cliente cadastrado com sucesso vamos redirecionar você",
        action: <Loader2 className="size-6 animate-spin" />,
      });
      setTimeout(() => {
        router.push("/register/device");
      }, 4000);
    },
    () => {
      if (!isPending && errors) {
        toast({
          variant: "destructive",
          title: "Redirecionando para criar device",
          description: "Cliente já existe vamos redirecionar você",
          action: <Loader2 className="size-6 animate-spin" />,
        }) &&
          setTimeout(() => {
            router.push("/register/device");
          }, 4000);
      }
    }
  );

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Toaster />
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Falha ao salvar cliente!</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}

      {success === true && (
        <Alert variant="success">
          <AlertTriangle className="size-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            <p>Cliente criado com sucesso</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
        {/* Campo Nome */}
        <div>
          <Label
            htmlFor="nome"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors?.name && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.name[0]}
            </p>
          )}
        </div>

        {/* Campo Email */}
        <div>
          <Label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email@exemplo.com"
            className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors?.email && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email[0]}
            </p>
          )}
        </div>

        {/* Campo phone */}
        <div>
          <Label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            phone
          </Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            placeholder="(XX) XXXX-XXXX"
            className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors?.phone && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.phone[0]}
            </p>
          )}
        </div>

        {/* Campo CPF */}
        <div>
          <Label
            htmlFor="cpf"
            className="block text-sm font-medium text-gray-700"
          >
            CPF
          </Label>
          <Input
            type="text"
            id="cpf"
            name="cpf"
            placeholder="123.123.123-12"
            className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors?.cpf && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.cpf[0]}
            </p>
          )}
        </div>
      </div>

      {/* Botão de Cadastro */}
      <div className="flex justify-end">
        <Button
          type="submit"
          className="bg-teal-500 text-white text-sm py-2 px-6 rounded-md hover:bg-teal-600"
          disabled={isPending}
        >
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </div>
    </form>
  );
};
