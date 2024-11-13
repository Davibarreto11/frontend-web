import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select,  
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue, } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Ilustration from "@/assets/ilust-device.svg";




export default function RegisterClient() {
  return (

    // Cointainer Pai

    <div className="flex flex-wrap gap-[5rem] lg:flex-nowrap items-center">

      {/* Formulario Ticket */}
      <div className="w-full lg:w-3/5 ">
        {/* Título */}
        <div>
          <h1 className="text-[42px] font-bold">Criação do Ticket</h1>
          <p className="text-sm ml-2 text-gray-600">Informe o defeito do aparelho</p>
        </div>

        {/* Formulário */}
        <div className="flex flex-wrap mt-[5rem] gap-x-8 gap-y-8">
          {/* Campo Sintoma */}
          <div className="flex-1 min-w-[230px]">
            <Label htmlFor="sintoma" className="block text-sm font-medium text-gray-700">
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
            <Label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
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
            <Label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">
              Comentários
            </Label>
            <Textarea
              id="observacoes"
              placeholder="Observações adicionais"
              className="mt-1 p-5 h-[100px] border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Botão de Cadastro */}
        <div className="flex justify-end mt-8">
          <Button className="bg-teal-500 text-white text-sm py-2 px-6 rounded-md hover:bg-teal-600">
            Continuar
          </Button>
        </div>
      </div>

      {/* Barra de separação */}
      <div className='hidden lg:flex border-r-[2px] mt-[8%] border-grey-600 h-[300px]'></div>

      <div className="hidden lg:flex lg:w-3/5 justify-between items-center relative">
            <Image src={Ilustration} alt="Ilustração" className="w-[90%] h-auto" />
      </div>
    </div>

  );
}
