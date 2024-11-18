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
import { Textarea } from "@/components/ui/textarea";

export function TicketForm() {
  return (
    <form className="space-y-6 mt-6">
      <div className="flex-1 min-w-[230px]">
        <Label
          htmlFor="sintoma"
          className="block text-sm font-medium text-gray-700"
        >
          Sintoma
        </Label>
        <Select>
          <SelectTrigger className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500">
            <SelectValue placeholder="Selecione o Sintoma" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sintomas</SelectLabel>
              <SelectItem value="1">Algo 1</SelectItem>
              <SelectItem value="2">Algo 2</SelectItem>
              <SelectItem value="3">Algo 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
          placeholder="Descreva o caso"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>
      {/* Campo Observações */}
      <div className="flex-1 min-w-[230px]">
        <Label
          htmlFor="observacoes"
          className="block text-sm font-medium text-gray-700"
        >
          Comentários
        </Label>
        <Textarea
          id="observacoes"
          placeholder="Observações adicionais"
          className="mt-1 p-5 h-[100px] border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      {/* Botão de Cadastro */}
      <div className="flex justify-end mt-8">
        <Button className="bg-teal-500 text-white text-sm py-2 px-6 rounded-md hover:bg-teal-600">
          Continuar
        </Button>
      </div>
    </form>
  );
}
