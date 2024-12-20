"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createDeviceAction } from "./actions";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getClientByCPF } from "@/http/get-client-by-cpf";
import { useFormState } from "@/hooks/user-form-state";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

export const DeviceForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const [cpf, setcpf] = useState<string>("");

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    createDeviceAction,
    () => {
      toast({
        variant: "default",
        title: "Redirecionando para criar ticket",
        description: "Aparelho cadastrado com sucesso vamos redirecionar para criar ticket",
        action: <Loader2 className="size-6 animate-spin" />,
      });
      setTimeout(() => {
        router.push("/register/ticket");
      }, 4000);
    },
    () => {
      if (!isPending && errors) {
        toast({
          variant: "destructive",
          title: "Redirecionando para criar ticket",
          description: "Aparelho já existe vamos redirecionar para criação de ticket",
          action: <Loader2 className="size-6 animate-spin" />,
        }) &&
          setTimeout(() => {
            router.push("/register/ticket");
          }, 4000);
      }
    }
  );

  const {
    error,
    data: client,
    refetch,
  } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClientByCPF(cpf),
    enabled: cpf?.length > 10,
    retry: false,
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Toaster />

      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Falha ao salvar aparelho!</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}

      {success === true && (
        <Alert variant="success">
          <AlertTriangle className="size-4" />
          <AlertTitle>Sucesso!</AlertTitle>
          <AlertDescription>
            <p>Sucesso ao cadastrar aparelho</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
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
            onChange={(e) => setcpf(e.target.value)}
            placeholder="123.123.123-12"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />

          {errors?.cpf && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.cpf[0]}
            </p>
          )}
        </div>

        {/* Campo Nome */}
        <div>
          <Label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Nome
          </Label>
          <Input
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            value={client ? client[0].nome : "Pesquise cliente"}
            defaultValue="Pesquise cliente"
          />
        </div>

        {/* Barra de separação */}
        <div className="border-b-[3px] border-grey-600 "></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16 mt-8">
        {/* Campo Marca */}
        <div>
          <Label
            htmlFor="marca"
            className="block text-sm font-medium text-gray-700"
          >
            Marca
          </Label>
          <Input
            type="text"
            id="marca"
            name="marca"
            placeholder="Samsung"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors?.marca && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.marca[0]}
            </p>
          )}
        </div>

        {/* Campo IMEI */}
        <div>
          <Label
            htmlFor="imei"
            className="block text-sm font-medium text-gray-700"
          >
            IMEI
          </Label>
          <Input
            type="text"
            id="imei"
            name="imei"
            placeholder="1231204872104-1232"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors?.imei && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.imei[0]}
            </p>
          )}
        </div>

        {/* Campo Modelo */}
        <div>
          <Label
            htmlFor="model"
            className="block text-sm font-medium text-gray-700"
          >
            Modelo
          </Label>
          <Input
            type="text"
            id="model"
            name="model"
            placeholder="SM-G990EEWJZTO"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors?.model && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.model[0]}
            </p>
          )}
        </div>

        {/* Campo Nº de Série */}

        <div>
          <Label
            htmlFor="serie"
            className="block text-sm font-medium text-gray-700"
          >
            Nº de Série
          </Label>
          <Input
            type="text"
            id="serie"
            name="serial"
            placeholder="RQCW3094DAY"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors?.serie && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.serie[0]}
            </p>
          )}
        </div>
      </div>
      <div>
        <Input
          type="hidden"
          id="clientId"
          name="clientId"
          value={client && client[0]?.id}
          className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        {errors?.serie && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.serie[0]}
          </p>
        )}
      </div>
      {/* Botão de Cadastro */}
      <div className="flex justify-end mt-8">
        <Button
          type="submit"
          className="bg-teal-500 text-white text-sm py-2 px-6 rounded-md hover:bg-teal-600"
        >
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Continuar"
          )}
        </Button>
      </div>
    </form>
  );
};
