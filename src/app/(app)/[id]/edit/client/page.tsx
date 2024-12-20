import Image from "next/image";

import Ilustration from "@/assets/ilust-client.svg";
import { CreateClientForm } from "./create-client-form";

export default function RegisterClient() {
  return (
    // Cointainer Pai

    <div className="flex flex-wrap gap-[5rem] lg:flex-nowrap items-end p-6 sm:p-8">
      {/* Formulário */}
      <div className="w-full lg:w-3/5 space-y-6">
        <div className="mb-[6rem]">
          <h1 className="text-[42px] font-bold">Editar Cliente</h1>
          <p className="text-sm ml-2  text-gray-600">
            Altere os dados do cliente como desejar
          </p>
        </div>

        <CreateClientForm />
      </div>

      {/* Barra de separação */}
      <div className="hidden lg:flex border-r-[3px] border-grey-600 h-[300px]"></div>

      {/* Ilustração do lado */}
      <div className="hidden lg:flex lg:w-3/5 justify-between items-center relative">
        <Image src={Ilustration} alt="Ilustração" className="w-[90%] h-auto" />
      </div>
    </div>
  );
}
