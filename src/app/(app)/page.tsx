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
import {CircleArrowOutUpRight, ChartColumn } from 'lucide-react';
import card1 from "@/assets/card1.svg";
import card2 from "@/assets/card2.svg";
import card3 from "@/assets/card3.svg";
import card4 from "@/assets/card4.svg";
import cardmad from "@/assets/cardmad.png";
import Sales from "@/components/ui/recent-sales";


export default function Home() {
  return (
   

  <main className="">
    {/* <a href="api/auth/sign-out">Sign Out</a> */}

    {/* Titulo */}
    <div className="mb-[2.8rem]">
      <h1 className="text-[42px] font-bold">Bem Vindo, User</h1>
      <p className="text-sm ml-2 font-semibold text-gray-600">Acompanhe suas estatísticas diárias</p>
    </div>

    <section className="grid  w-full grid-cols-2 lg:grid-cols-4 gap-4 mb-[1rem]">

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
          <div className="flex items-center gap-1">
            <span className="text-base sm:text-[1.6rem] font-bold text-teal-500">8 </span>
            <span className="text-base sm:text-xl font-bold">- Pedidos</span>
          </div>
          <Image src={card1} alt="Ilustração" className="w-[30%]"/>
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
          <div className="flex items-center gap-1">
            <span className="text-base sm:text-[1.6rem] font-bold text-teal-500">8 </span>
            <span className="text-base sm:text-xl font-bold">- Pedidos</span>
          </div>
          <Image src={card2} alt="Ilustração" className="w-[40%]"/>
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
          <div className="flex items-center gap-1">
            <span className="text-base sm:text-[1.6rem] font-bold text-teal-500">8 </span>
            <span className="text-base sm:text-xl font-bold">- Pedidos</span>
          </div>
          <Image src={card3} alt="Ilustração" className="w-[25%]"/>
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
          <div className="flex items-center gap-1">
            <span className="text-base sm:text-[1.6rem] font-bold text-teal-500">8 </span>
            <span className="text-base sm:text-xl font-bold">- Pedidos</span>
          </div>
          <Image src={card4} alt="Ilustração" className="w-[30%]"/>
        </CardContent>
      </Card>

    </section>

    <section className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 mb-4">

      {/* CARD 1 */}
      <Card className=" border-none shadow-[0px_0px_19px_-5px_rgba(0,0,0,0.25)]">
        <CardHeader>
          <div className="flex  items-center justify-between">
            <CardTitle className="text-lg sm:text-xl text-[#2F3640] ">
              Renda Mensal
            </CardTitle>
            <a href="#"><ChartColumn  className="ml-auto w-5 h-5"/></a>
          </div>
          <CardDescription>
            Veja sua renda entre os meses passados.
          </CardDescription>
        </CardHeader>

        <CardContent className="flex items-center justify-between">
        </CardContent>
      </Card>
      <Sales/>
    </section>
  </main>
    
  );
}
