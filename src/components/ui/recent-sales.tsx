import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Clock3, CalendarDays, DollarSign } from "lucide-react";
import { Avatar, AvatarFallback } from "./avatar";
import Link from "next/link";
import { ScrollArea } from "./scroll-area";
import type { GetTicketResponse } from "@/http/get-device-ticket";
import { format } from "date-fns";
import { useMemo } from "react";

interface SalesProps {
  tickets: GetTicketResponse[] | undefined;
}

export default function Sales({ tickets }: SalesProps) {
  const getTodayTickets = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayTickets = tickets?.filter((ticket) => {
      const ticketDate = new Date(ticket.created_at);
      return (
        ticketDate >= today &&
        ticketDate < new Date(today.getTime() + 86400000) &&
        ticket.status === "Pedido entregue"
      );
    });

    return todayTickets?.sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }, [tickets]);

  return (
    <Card className=" border-none shadow-[0px_0px_19px_-5px_rgba(0,0,0,0.25)]">
      <CardHeader>
        <div className="flex  items-center justify-between">
          <CardTitle className="text-lg sm:text-xl text-[#2F3640] ">
            Pedidos Recém Concluídos
          </CardTitle>
          <a href="#">
            <Clock3 className="ml-auto w-5 h-5" />
          </a>
        </div>
        <CardDescription>
          Ultimos pedidos concluidos nas ultimas 24 horas
        </CardDescription>
      </CardHeader>

      <ScrollArea className="rounded-md">
        <CardContent className=" max-h-[300px] rounded-lg py-4">
          {getTodayTickets?.map((ticket) => (
            <Link key={ticket.id} href="/list/clientsct ">
              <article className="flex transition-all duration-300 hover:bg-slate-50 rounded-xl items-center gap-6 shadow-[0px_0px_20px_-1px_rgba(0,0,0,0.2)] mb-4 px-4 py-3">
                <Avatar className=" w-10 h-10">
                  <AvatarFallback className="bg-[#23577A] text-white font-semibold">
                    {ticket.mobile_device?.client?.nome.substr(0, 1)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm sm:text-base text-[#2F2E41] font-semibold">
                    {ticket.mobile_device?.client?.nome}
                  </p>
                  <span className="text-[12px] text-[#38A3A5] sm:text-sm ">
                    {ticket.mobile_device?.modelo}
                  </span>
                </div>

                {/* Separador */}
                <div className="h-8 border-r-[2px] border-zinc-300"></div>
                <div className="flex items-center flex-wrap gap-2 sm:gap-4">
                  <div className="text-[13px] text-[#38A3A5]  items-center sm:text-base sm:font-semibold flex gap-2">
                    <DollarSign />
                    <span className="text-[#2F2E41]">R$:</span>
                    <p>{`${ticket.repair_price || 0},00`}</p>
                  </div>

                  {/* Separador */}
                  <div className="hidden xl:flex  h-8 border-r-[2px] border-zinc-300"></div>

                  <div className="text-[13px] text-[#38A3A5]  items-center sm:text-base sm:font-semibold flex gap-2">
                    <CalendarDays />
                    <p>{format(new Date(ticket.created_at), "dd/MM/yyyy")}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </CardContent>
      </ScrollArea>
      <div className="pt-8"></div>
    </Card>
  );
}
