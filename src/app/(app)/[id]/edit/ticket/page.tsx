import Image from "next/image";

import Ilustration from "@/assets/ilust-device.svg";
import { TicketForm } from "./ticket-form";

export default function RegisterClient() {
  return (
    // Cointainer Pai

    <div className="flex flex-wrap gap-[5rem] lg:flex-nowrap items-center">
      {/* Formulario Ticket */}
      <div className="w-full lg:w-3/5 ">
        {/* Título */}
        <div>
          <h1 className="text-[42px] font-bold">Editar Ticket</h1>
          <p className="text-sm ml-2 text-gray-600">
            Informe o defeito do aparelho
          </p>
        </div>
        <TicketForm />
      </div>

      {/* Barra de separação */}
      <div className="hidden lg:flex border-r-[2px] mt-[8%] border-grey-600 h-[300px]"></div>

      <div className="hidden lg:flex lg:w-3/5 justify-between items-center relative">
        <Image src={Ilustration} alt="Ilustração" className="w-[90%] h-auto" />
      </div>
    </div>
  );
}
