import { DeviceForm } from "./device-form";
import Image from "next/image";
import Ilustration from "@/assets/ilust-device.svg";
export default function RegisterClient() {
  return (
    <>
    <div className="flex flex-wrap gap-[5rem] lg:flex-nowrap items-end p-6 sm:p-8">
      <div className="w-full items-center space-y-6 lg:w-3/5">
        <div className="mb-[4rem]">
          <h1 className="text-[42px] font-bold">Registrar Aparelho</h1>
          <p className="text-sm ml-2 text-gray-600">
            Informe os dados do aparelho
          </p>
        </div>
        <h1 className="text-[18px] mt-10 font-bold">Cliente:</h1>

        <div className="w-full lex flex-wrap mt-4 gap-y-8 gap-x-8">
          <DeviceForm />
        </div>
      </div>
        {/* Barra de separação */}
        <div className="hidden lg:flex border-r-[3px] border-grey-600 h-[300px]"></div>

        {/* Ilustração do lado */}
        <div className="hidden lg:flex lg:w-3/5 justify-between items-center relative">
          <Image src={Ilustration} alt="Ilustração" className="w-[90%] h-auto" />
        </div>

    </div>
    </>
  );
}
