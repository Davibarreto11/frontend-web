"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlertTriangle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";
import { useQuery } from "@tanstack/react-query";
import { getDeviceByIMEI } from "@/http/get-device-by-imei";
import { useState } from "react";
import { useFormState } from "@/hooks/user-form-state";
import { createTicketAction } from "./actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

const status = [
  "Pendente",
  "Em andamento",
  "Orçamento aprovado",
  "Orçamento reprovado",
  "Pedido reprovado entregue",
  "Peça em transito",
  "Reparo concluído",
  "Pedido entregue",
];

const sintoma = ["Energia", "Software", "Hardware"];

export function TicketForm() {
  const { toast } = useToast();

  const router = useRouter();

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    createTicketAction,
    () => {
      toast({
        variant: "default",
        title: "Redirecionando para criar ticket",
        description:
          "Aparelho cadastrado com sucesso vamos redirecionar você para dashboard",
        action: <Loader2 className="size-6 animate-spin" />,
      });
      setTimeout(() => {
        router.push("/");
      }, 4000);
    },
    () => {
      if (!isPending && errors) {
        toast({
          variant: "destructive",
          title: "Redirecionando para criar device",
          description: "Ticket com esse IMEI já existe.",
          action: <Loader2 className="size-6 animate-spin" />,
        }) &&
          setTimeout(() => {
            router.push("/register/ticket");
          }, 4000);
      }
    }
  );

  const [imei, setIMEI] = useState<string>("");

  const {
    error,
    data: device,
    refetch,
  } = useQuery({
    queryKey: ["devices"],
    queryFn: () => getDeviceByIMEI(imei),
    enabled: imei?.length > 14,
    retry: false,
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-6">
      <Toaster />
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Falha ao salvar ticket!</AlertTitle>
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
            <p>Sucesso ao cadastrar ticker</p>
          </AlertDescription>
        </Alert>
      )}

      <div className="flex-1 min-w-[230px]">
        <Label
          htmlFor="sintoma"
          className="block text-sm font-medium text-gray-700"
        >
          IMEI
        </Label>
        <Input
          type="text"
          id="imei"
          name="imei"
          onChange={(e) => setIMEI(e.target.value)}
          placeholder="Informe o IMEI do celular"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        {errors?.imei && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.imei[0]}
          </p>
        )}
      </div>

      <div className="flex-1 min-w-[230px]">
        <Label
          htmlFor="sintoma"
          className="block text-sm font-medium text-gray-700"
        >
          Aparelho do cliente
        </Label>
        <Input
          value={device && device[0]?.modelo}
          defaultValue="Pesquise o modelo"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      <div className="flex-1 min-w-[230px]">
        <Label
          htmlFor="sintoma"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </Label>
        <Select name="status">
          <SelectTrigger className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500">
            <SelectValue placeholder="Selecione o Status de Inicio " />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              {status.map((status, index) => (
                <SelectItem key={index} value={String(index)}>
                  {status}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors?.status && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.status[0]}
          </p>
        )}
      </div>

      <div className="flex-1 min-w-[230px]">
        <Label
          htmlFor="sintoma"
          className="block text-sm font-medium text-gray-700"
        >
          Sintomas
        </Label>
        <Select name="status">
          <SelectTrigger className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500">
            <SelectValue placeholder="Selecione o Sintoma" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sintomas</SelectLabel>
              {sintoma.map((sintoma, index) => (
                <SelectItem key={index} value={String(index)}>
                  {sintoma}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors?.status && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.status[0]}
          </p>
        )}
      </div>

      {/* Campo Observações */}
      <div className="flex-1 min-w-[230px]">
        <Label
          htmlFor="descricao"
          className="block text-sm font-medium text-gray-700"
        >
          Descrição
        </Label>
        <Input
          type="text"
          id="descricao"
          name="descricao"
          placeholder="Descreva o caso"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        {errors?.descricao && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.descricao[0]}
          </p>
        )}
      </div>
      {/* Campo Observações */}
      <div className="flex-1 min-w-[230px]">
        <Label
          htmlFor="comentario"
          className="block text-sm font-medium text-gray-700"
        >
          Comentários
        </Label>
        <Textarea
          id="comentario"
          name="comentario"
          placeholder="Observações adicionais"
          className="mt-1 p-5 h-[100px] border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        {errors?.comentario && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.comentario[0]}
          </p>
        )}
      </div>

      <Input
        type="hidden"
        name="mobile_device_id"
        value={device && device[0]?.id}
        className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
      />

      {/* Botão de Cadastro */}
      <div className="flex justify-end mt-8">
        <Button className="bg-teal-500 text-white text-sm py-2 px-6 rounded-md hover:bg-teal-600">
          {isPending ? <Loader2 className="size-4" /> : "Continuar"}
        </Button>
      </div>
    </form>
  );
}
