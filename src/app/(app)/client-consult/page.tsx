import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logo.png";
import Ilust from "@/assets/client.svg";

export default function RegisterClient() {
  return (
    // Cointainer Pai

    <div className="flex flex-col gap-9 items-center justify-center">
      <div className="w-full items-center justify-center lg:w-3/5">
        <div className="flex flex-col justify-center items-center gap-20">
          <Image className="max-w-[300px]" src={Logo} alt="Logo" />
          <p className="text-light text-center text-[22px]">
            Acompanhe o estado do seu aparelho de qualquer lugar!!
          </p>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu Email"
            className="mt-1 p-6 border-none shadow-[0px_0px_19px_-2px_rgba(0,0,0,0.25)] w-full border-gray-300 rounded-lg focus:border-teal-500 focus:ring-teal-500"
          />
        </div>
        {/* Botão de Cadastro */}
        <div className="flex justify-end mt-8">
          <Button className="bg-teal-500 text-white text-sm py-2 px-6 rounded-md hover:bg-teal-600">
            Pesquisar
          </Button>
        </div>
      </div>
      <Image src={Ilust} alt="Ilustração" />
    </div>
  );
}
