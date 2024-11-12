import Image from "next/image";

import Ilustration from "@/assets/ilust-device.svg";
import { DeviceForm } from "./device-form";

export default function RegisterClient() {
  return (
    // Cointainer Pai

    <div className="flex flex-wrap gap-[5rem] lg:flex-nowrap items-center">
      {/* Formulário */}
      <div className="w-full lg:w-3/5 space-y-6">
        <div>
          <h1 className="text-[42px] font-bold">Cadastro do Aparelho</h1>
          <p className="text-sm ml-2 text-gray-600">
            Informe os dados do aparelho
          </p>
        </div>

        <DeviceForm />
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
