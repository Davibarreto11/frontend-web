"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Select from "react-select";
import {
  Select as Select01,
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
import { useCallback, useState } from "react";
import { useRouter as params } from "next/router";
import { useFormState } from "@/hooks/user-form-state";
import { updateTicketAction, type TicketShema } from "./actions";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { useParams } from "next/navigation";

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

const pecasOptions = [
  "Bateria",
  "Tela",
  "Placa Sub",
  "Placa mãe",
  "Camera",
  "Botão power",
  "Botão volume",
  "Microfone",
  "Alto-falante",
  "Tampa traseira",
].map((peca, index) => ({ value: peca, label: peca }));

const sintoma = ["Energia", "Software", "Hardware"];

export function TicketForm() {
  const { toast } = useToast();

  const { id } = useParams();
  const router = useRouter();

  const [{ success, message, errors }, handleSubmit, isPending] = useFormState(
    updateTicketAction,
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
          title: "Error ao atualizar device",
          description: "Ticket com esse IMEI já existe.",
        });
      }
    }
  );

  const [selectedPecas, setSelectedPecas] = useState<any[]>([]);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handlePecasChange = (selectedOptions: any) => {
    setSelectedPecas(selectedOptions);
  };

  const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    console.log()
    if (selectedFile && selectedPecas.length > 0) {
      data.set("pecas", selectedPecas[0]);
      data.set("id", String(id));
    }

    await handleSubmit(e)
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 mt-1">
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
          htmlFor="descricao"
          className="block text-sm font-medium text-gray-700"
        >
          Descrição
        </Label>
        <Input
          type="text"
          id="descricao"
          name="descricao"
          placeholder="Informe o descrição"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        {errors?.descricao && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.descricao[0]}
          </p>
        )}
      </div>



        <Input
          type="hidden"
          id="id"
          name="id"
          value={id}
        />

      {/* <div className="block text-sm font-medium text-gray-700">
        <Label htmlFor="anexo">Anexo</Label>
        <Input
          className="relative mt-1 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
          id="anexo"
          name="anexo"
          type="file"
          onChange={handleFileChange}
          accept="image/*,application/pdf" // Tipos de arquivos aceitos
        />
        {selectedFile && (
          <span className="absolute text-center py-4">
            Arquivo selecionado: {selectedFile.name}
          </span>
        )}
      </div> */}

      <div className="flex-1 min-w-[230px]">
        <Label
          htmlFor="status"
          className="block text-sm font-medium text-gray-700"
        >
          Status
        </Label>
        <Select01 name="status">
          <SelectTrigger className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500">
            <SelectValue placeholder="Selecione o Status de Inicio " />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              {status.map((status, index) => (
                <SelectItem key={index} value={String(status)}>
                  {status}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select01>
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
        <Select01 name="sintoma">
          <SelectTrigger className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500">
            <SelectValue placeholder="Selecione o Sintoma" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sintomas</SelectLabel>
              {sintoma.map((sintoma, index) => (
                <SelectItem key={index} value={String(sintoma)}>
                  {sintoma}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select01>
        {errors?.status && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.status[0]}
          </p>
        )}
      </div>

      {/* Campo Observações */}
      <div className="flex-1 min-w-[230px]">
        <Label
          htmlFor="pecas"
          className="block text-sm font-medium text-gray-700"
        >
          Peças Necessárias
        </Label>
        <Select
          id="pecas"
          name="pecas"
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              display: "flex",
              marginTop: "0.25rem", // mt-1
              border: "2px solid #d1d5db", // border-2 e border-gray-300
              borderRadius: "0.5rem", // rounded-md
              boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)", // shadow-sm
              padding: "2px", // p-5
              "&:hover": { borderColor: "#14b8a6" }, // hover:border-teal-500
              "&:focus-within": { borderColor: "#14b8a6", outline: "none" }, // focus:border-teal-500})
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              position: "relative", // relative
              zIndex: 50, // z-50
              maxHeight: "24rem", // max-h-96
              minWidth: "8rem", // min-w-[8rem]
              overflow: "hidden", // overflow-hidden
              borderRadius: "0.375rem", // rounded-md
              border: "1px solid var(--border-color)", // border
              backgroundColor: "var(--popover-bg)", // bg-popover
              color: "var(--popover-foreground)", // text-popover-foreground
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
              animation: "fade-in 0.3s, zoom-in 0.3s", // animações de entrada
              "&[data-state='open']": {
                animation: "fade-in 0.3s, zoom-in 0.3s", // Animar entrada
              },
              "&[data-state='closed']": {
                animation: "fade-out 0.3s, zoom-out 0.3s", // Animar saída
              },
              "&[data-side='bottom']": {
                animation: "slide-in-from-top 0.3s", // Animação para lado inferior
              },
              "&[data-side='left']": {
                animation: "slide-in-from-right 0.3s", // Animação para lado esquerdo
              },
              "&[data-side='right']": {
                animation: "slide-in-from-left 0.3s", // Animação para lado direito
              },
              "&[data-side='top']": {
                animation: "slide-in-from-bottom 0.3s", // Animação para lado superior
              },
            }),
          }}
          isMulti
          options={pecasOptions}
          placeholder="Selecione as peças necessárias"
          onChange={handlePecasChange}
        />
        {errors?.pecas && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.pecas[0]}
          </p>
        )}
      </div>

      <div>
        <Label
          htmlFor="repair_price"
          className="block text-sm font-medium text-gray-700"
        >
          Preço
        </Label>
        <Input
          type="text"
          id="repair_price"
          name="repair_price"
          placeholder="Informe o orçamento"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
        {errors?.repair_price && (
          <p className="text-xs font-medium text-red-500 dark:text-red-400">
            {errors.repair_price[0]}
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

      {/* Botão de Cadastro */}
      <div className="flex justify-end space-x-3 mt-8">
        <Button variant="outline">Gerar orçamento</Button>
        <Button className="bg-teal-500 text-white text-sm py-2 px-6 rounded-md hover:bg-teal-600">
          {isPending ? <Loader2 className="size-4" /> : "Continuar"}
        </Button>
      </div>
    </form>
  );
}
