import { DeviceForm } from "./device-form";

export default function RegisterClient() {
  return (
    <>
      {/* Formulario Aparelho */}
      <div className="w-full items-center lg:w-3/5">
        {/* Título */}
        <div>
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
    </>
  );
}
