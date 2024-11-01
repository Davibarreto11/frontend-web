import Image from 'next/image';
import { AArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Logo from "../../../assets/logo.png";
import Background from "../../../assets/background-login.png";
import Ilustration from "../../../assets/ilust.svg";

export default function Login() {
  return (
    <div className="flex w-4/5 h-[80vh] items-center p-6 sm:p-8">
      <div className=" max-w-md w-full rounded-lg  p-6 sm:px-12 sm:py-9">
        <div className="mb-10 w-20 text-center">
          <Image
            src={Logo}
            alt="jom"
            className="h-8 mx-auto"
          />
        </div>
        <h1 className=" text-2xl font-bold mb-2">Olá,<br></br> Seja Bem Vindo</h1>
        <p className="text-xs text-gray-500 mb-10">
          Seja bem vindo ao melhor app de gestão
        </p>

        <form action="">
          <div className="mb-4">
            <Label htmlFor="email" className=" block text-sm font-medium text-gray-700">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="email@exemplo.com"
              className="mt-1 block w-80 border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </Label>
            <Input
              type="password"
              id="password"
              placeholder="******"
              className="text-[#38A3A5]mt-1 block w-80 border-gray-300 rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
              <Checkbox id="keep-connected" className="text-teal-500 border-[#38A3A5] appearance-none checked:bg-[#38A3A5]" />
              <Label htmlFor="keep-connected" className="ml-1 text-xs text-gray-700">
                Manter conectado
              </Label>
            </div>
            <p className="text-xs ml-2"> Esqueceu sua 
               <a href="#" className="text-xs text-teal-600 hover:underline">
                senha
              </a>
              ?
            </p>
          </div>

          <Button className=" bg-[#38A3A5] text-white text-[13px] py-2 px-9 rounded-md">
            Entrar
          </Button>
        </form>

      </div>

      <div className="flex items-center justify-center relative w-full" > 
        <Image
          alt='Background'
          src={Background}
          className='w-full h-full object-cover'
        />
          <Image
          alt='Ilustration'
          src={Ilustration}
          className='absolute w-[60%] h-auto left-1/2 transform -translate-x-1/2'
        />
      </div>
    </div>
  );
}
