import { Button } from "@/components/ui/button"
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {CircleArrowOutUpRight} from 'lucide-react';
import card1 from "@/assets/card1.svg";


export default function Home() {
  return (
   

  <main className="">
    {/* <a href="api/auth/sign-out">Sign Out</a> */}

    {/* Titulo */}
    <div className="mb-[4rem]">
      <h1 className="text-[42px] font-bold">Registrar Aparelho</h1>
      <p className="text-sm ml-2 text-gray-600">Informe os dados do aparelho</p>
    </div>

    <section className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 mb-[1.5rem]">

      {/* CARD 1 */}
      <Card className=" border-none shadow-[0px_0px_19px_-5px_rgba(0,0,0,0.25)]">
        <CardHeader>
          <div className="flex  items-center justify-between">
            <CardTitle className="text-lg sm:text-xl text-[#2F3640] ">
              Pedidos Pendentes
            </CardTitle>
            <a href="#"><CircleArrowOutUpRight className="ml-auto w-5 h-5"/></a>
          </div>
          <CardDescription>
            Total pedidos em que ainda não começaram.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
          <p className="text-base sm:text-lg font-bold">8 Pedidos</p>
          {/* <Image src={card1} alt="Ilustração" className="sm:w-[35%]"/> */}
        </CardContent>
      </Card>

      {/* CARD 2 */}
      <Card className=" border-none shadow-[0px_0px_19px_-5px_rgba(0,0,0,0.25)]">
        <CardHeader>
          <div className="flex  items-center justify-between">
            <CardTitle className="text-lg sm:text-xl text-[#2F3640] ">
              Pedidos em Andamento
            </CardTitle>
            <a href="#"><CircleArrowOutUpRight className="ml-auto w-5 h-5"/></a>
          </div>
          <CardDescription>
            Total pedidos em andamentos.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
          <p className="text-base sm:text-lg font-bold">8 Pedidos</p>
          {/* <Image src={card1} alt="Ilustração" className="sm:w-[35%]"/> */}
        </CardContent>
      </Card>

      {/* CARD 3 */}
      <Card className=" border-none shadow-[0px_0px_19px_-5px_rgba(0,0,0,0.25)]">
        <CardHeader>
          <div className="flex  items-center justify-between">
            <CardTitle className="text-lg sm:text-xl text-[#2F3640] ">
              Pedidos Concluídos
            </CardTitle>
            <a href="#"><CircleArrowOutUpRight className="ml-auto w-5 h-5"/></a>
          </div>
          <CardDescription>
            Total pedidos com manutenção concluída.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
          <p className="text-base sm:text-lg font-bold">8 Pedidos</p>
          {/* <Image src={card1} alt="Ilustração" className="sm:w-[35%]"/> */}
        </CardContent>
      </Card>

      {/* CARD 4 */}
      <Card className=" border-none shadow-[0px_0px_19px_-5px_rgba(0,0,0,0.25)]">
        <CardHeader>
          <div className="flex  items-center justify-between">
            <CardTitle className="text-lg sm:text-xl text-[#2F3640] ">
              Pedidos Entregues
            </CardTitle>
            <a href="#"><CircleArrowOutUpRight className="ml-auto w-5 h-5"/></a>
          </div>
          <CardDescription>
            Total pedidos entregues para o cliente.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
          <p className="text-base sm:text-lg font-bold">8 Pedidos</p>
          {/* <Image src={card1} alt="Ilustração" className="sm:w-[35%]"/> */}
        </CardContent>
      </Card>

    </section>

    <section className="grid w-full grid-cols-1 lg:grid-cols-2 gap-4 mb-4">

      {/* CARD 1 */}
      <Card className=" border-none shadow-[0px_0px_19px_-5px_rgba(0,0,0,0.25)]">
        <CardHeader>
          <div className="flex  items-center justify-between">
            <CardTitle className="text-lg sm:text-xl text-[#2F3640] ">
              Renda Mensal
            </CardTitle>
            <a href="#"><CircleArrowOutUpRight className="ml-auto w-5 h-5"/></a>
          </div>
          <CardDescription>
            Veja sua renda entre os meses passados.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
          {/* <Image src={card1} alt="Ilustração" className="sm:w-[35%]"/> */}
        </CardContent>
      </Card>

      {/* CARD 2 */}
      <Card className=" border-none shadow-[0px_0px_19px_-5px_rgba(0,0,0,0.25)]">
        <CardHeader>
          <div className="flex  items-center justify-between">
            <CardTitle className="text-lg sm:text-xl text-[#2F3640] ">
              Pedidos Recém Concluídos
            </CardTitle>
            <a href="#"><CircleArrowOutUpRight className="ml-auto w-5 h-5"/></a>
          </div>
          <CardDescription>
            Total pedidos em andamentos.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
          {/* <Image src={card1} alt="Ilustração" className="sm:w-[35%]"/> */}
        </CardContent>
      </Card>
    </section>
  </main>
    
  );
}
