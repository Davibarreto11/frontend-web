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



export default function RegisterClient() {
  return (

    // Cointainer Pai

<div className="flex flex-wrap gap-[5rem] lg:flex-nowrap items-start">

  {/* Formulario Aparelho */}
  <div className="w-full space-y-6 lg:w-3/5">
  
    {/* Título */}
    <div>
      <h1 className="text-[42px] font-bold">Registrar Aparelho</h1>
      <p className="text-sm ml-2 text-gray-600">Informe os dados do aparelho</p>
    </div>

    <div className="flex flex-wrap gap-x-8">
      {/* Campo CPF */}
      <div className="flex-1 min-w-[230px]">
        <Label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
          CPF
        </Label>
        <Input
          type="text"
          id="cpf"
          placeholder="123.123.123-12"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      {/* Campo Nome */}
      <div className="flex-1 min-w-[230px]">
        <Label htmlFor="nome" className="block text-sm font-medium text-gray-700">
          Nome
        </Label>
        <Input
          type="text"
          id="nome"
          placeholder="Cristiano Oliveira"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>
    </div>

    {/* Barra de separação */}
    <div className='border-b-[3px] w-[260px] border-grey-600 mt-8'></div>

    <div className="flex flex-wrap gap-x-8 gap-y-8 mt-8">

      {/* Campo Marca */}
      <div className="flex-1 min-w-[230px]">
        <Label htmlFor="marca" className="block text-sm font-medium text-gray-700">
          Marca
        </Label>
        <Input
          type="text"
          id="marca"
          placeholder="Samsung"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      {/* Campo IMEI */}
      <div className="flex-1 min-w-[230px]">
        <Label htmlFor="imei" className="block text-sm font-medium text-gray-700">
          IMEI
        </Label>
        <Input
          type="text"
          id="imei"
          placeholder="1231204872104-1232"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      {/* Campo Modelo */}
      <div className="flex-1 min-w-[230px]">
        <Label htmlFor="modelo" className="block text-sm font-medium text-gray-700">
          Modelo
        </Label>
        <Input
          type="text"
          id="modelo"
          placeholder="SM-G990EEWJZTO"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>

      {/* Campo Nº de Série */}
      <div className="flex-1 min-w-[230px]">
        <Label htmlFor="serie" className="block text-sm font-medium text-gray-700">
          Nº de Série
        </Label>
        <Input
          type="text"
          id="serie"
          placeholder="RQCW3094DAY"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>
    </div>
  </div>

  {/* Barra de separação */}
  <div className='hidden lg:flex border-r-[3px] border-grey-600 h-[300px]'></div>

  <div className="w-full lg:w-3/5 space-y-6">
    {/* Título */}
    <div>
      <h1 className="text-[42px] font-bold">Criação do Ticket</h1>
      <p className="text-sm ml-2 text-gray-600">Informe o defeito do aparelho</p>
    </div>

    {/* Formulário */}
    <div className="flex flex-wrap gap-x-16 gap-y-8">
      {/* Campo Sintoma */}
      <div className="flex-1 min-w-[200px]">
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
      <div className="flex-1 min-w-[200px]">
        <Label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">
          Descrição
        </Label>
        <Input
          type="text"
          id="observacoes"
          placeholder="Observações adicionais"
          className="mt-1 p-5 border-2 w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        />
      </div>
            {/* Campo Observações */}
      <div className="flex-1 min-w-[200px]">
        <Label htmlFor="observacoes" className="block text-sm font-medium text-gray-700">
          Comentários
        </Label>
        <Input
          type="text"
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
</div>

  );
}
