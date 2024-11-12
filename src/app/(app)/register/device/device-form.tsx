"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useFormState } from "@/hooks/user-form-state";
import { createDeviceAction } from "./actions";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useQuery } from "@tanstack/react-query";
import { getClients } from "@/http/get-clients";
import { useEffect, useState } from "react";
import { getClientByCPF } from "@/http/get-client-by-cpf";

export const DeviceForm = () => {
  const [cpf, setCpf] = useState("");

  const {
    isPending,
    error,
    data: clients,
    refetch,
  } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
    // enabled: cpf.length > 11,
    // retry: false,
  });

  console.log(clients);

  const [{ success, message, errors }, handleSubmit, isLoadind] =
    useFormState(createDeviceAction);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            <p>Aparelho criado com sucesso</p>
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
            onChange={(e) => setCpf(e.target.value)}
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
            type="text"
            id="name"
            name="name"
            placeholder="Cristiano Oliveira"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors?.name && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.name[0]}
            </p>
          )}
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
            name="serie"
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

      {/* Botão de Cadastro */}
      <div className="flex justify-end mt-8">
        <Button
          type="submit"
          className="bg-teal-500 text-white text-sm py-2 px-6 rounded-md hover:bg-teal-600"
        >
          {isLoadind ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Continuar"
          )}
        </Button>
      </div>
    </form>
  );
};
