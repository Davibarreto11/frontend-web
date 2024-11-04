import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Ilustration from "@/assets/ilust-client.svg"; 


export default function RegisterClient() {
  return (

    // Cointainer Pai

    <div className="flex flex-wrap gap-[5rem] lg:flex-nowrap items-end p-6 sm:p-8">
      
      {/* Formulário */}
      <div className="w-full lg:w-3/5 space-y-6">
        <div className='mb-[6rem]'>
          <h1 className="text-[42px] font-bold">Cadastro de Cliente</h1>
          <p className="text-sm ml-2  text-gray-600">Informe os dados do cliente</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-16">
          {/* Campo Nome */}
          <div>
            <Label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </Label>
            <Input
              type="text"
              id="nome"
              placeholder="Seu nome"
              className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          {/* Campo Email */}
          <div>
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="email@exemplo.com"
              className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          {/* Campo Telefone */}
          <div>
            <Label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
              Telefone
            </Label>
            <Input
              type="tel"
              id="telefone"
              placeholder="(XX) XXXX-XXXX"
              className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          {/* Campo CPF */}
          <div>
            <Label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
              CPF
            </Label>
            <Input
              type="text"
              id="cpf"
              placeholder="123.123.123-12"
              className="mt-1 p-5 block w-full border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Botão de Cadastro */}
        <div className="flex justify-end">
          <Button className="bg-teal-500 text-white text-sm py-2 px-6 rounded-md hover:bg-teal-600">
            Cadastrar
          </Button>
        </div>
      </div>

      {/* Barra de separação */}
      <div className='hidden lg:flex border-r-[3px] border-grey-600 h-[300px]'></div>

      {/* Ilustração do lado */}
      <div className="hidden lg:flex lg:w-3/5 justify-between items-center relative">
        <Image
          src={Ilustration}
          alt="Ilustração"
          className="w-[90%] h-auto"
        />
      </div>
       
    </div>
  );
}
