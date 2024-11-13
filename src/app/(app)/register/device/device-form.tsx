"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { createDeviceAction, type ClientShema } from "./actions";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useQuery } from "@tanstack/react-query";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getClientByCPF } from "@/http/get-client-by-cpf";
import { useForm } from "react-hook-form";
import { boolean } from "zod";

export const DeviceForm = () => {
  const [isLoading, serIsLoading] = useState<boolean>(false);
  const [cpf, setcpf] = useState<string>("");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors },
  } = useForm<ClientShema>({
    mode: "onChange",
  });

  const {
    isPending,
    error,
    data: client,
    refetch,
  } = useQuery({
    queryKey: ["clients"],
    queryFn: () => getClientByCPF(cpf),
    enabled: cpf?.length > 10,
    retry: false,
  });

  useEffect(() => {
    if (client && !isPending) {
      console.log(client);
      setValue("name", client.nome);
      trigger("name");
    }
  }, [client, isPending, setValue, trigger]);

  const onSubmit = useCallback((data: ClientShema) => {
    serIsLoading(true);
    createDeviceAction(data);
    serIsLoading(false);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* {success === false && message && (
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
      )} */}

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
            {...(register("cpf"),
            {
              onChange: (e) => setcpf(e.target.value),
            })}
            placeholder="123.123.123-12"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />

          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors?.cpf?.message}
          </p>
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
            {...register("name")}
            value={getValues("name") || ""}
            placeholder="Cristiano Oliveira"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.name?.message}
          </p>
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
            {...register("marca")}
            placeholder="Samsung"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.marca?.message}
          </p>
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
            {...register("imei")}
            placeholder="1231204872104-1232"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.imei?.message}
          </p>
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
            {...register("model")}
            placeholder="SM-G990EEWJZTO"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          {errors?.model && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.model?.message}
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
            {...register("serie")}
            placeholder="RQCW3094DAY"
            className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          />
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.serie?.message}
          </p>
        </div>
      </div>

      {/* Botão de Cadastro */}
      <div className="flex justify-end mt-8">
        <Button
          type="submit"
          className="bg-teal-500 text-white text-sm py-2 px-6 rounded-md hover:bg-teal-600"
        >
          {isLoading ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Continuar"
          )}
        </Button>
      </div>
    </form>
  );
};
