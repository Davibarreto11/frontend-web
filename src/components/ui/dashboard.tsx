"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { GetTicketResponse } from "@/http/get-device-ticket";
import { format } from "date-fns";
import { ChartColumn } from "lucide-react";
import { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

interface DashboardProps {
  tickets: GetTicketResponse[] | undefined;
}

export default function Dashboard({ tickets }: DashboardProps) {
  const countTicketsByMonth = useMemo(() => {
    if (!tickets) return [];

    const counts: { [key: string]: { count: number; total: number } } = {};

    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const getTicketMonthYear = (created_at: string) => {
      const ticketDate = new Date(created_at);
      return `${ticketDate.getFullYear()}-${ticketDate.getMonth()}`;
    };

    for (let i = 0; i <= 3; i++) {
      const targetMonth = new Date(currentYear, currentMonth - i);
      const targetMonthKey = `${targetMonth.getFullYear()}-${targetMonth.getMonth()}`;
      counts[targetMonthKey] = { count: 0, total: 0 };
    }

    tickets.forEach((ticket) => {
      const ticketMonthYear = getTicketMonthYear(ticket.created_at);
      if (counts.hasOwnProperty(ticketMonthYear)) {
        counts[ticketMonthYear].count += 1;
        counts[ticketMonthYear].total += ticket?.repair_price || 0;
      }
    });

    const sortedCounts = Object.entries(counts)
      .sort(([a], [b]) => (b > a ? 1 : -1))
      .map(([monthKey, { count, total }]) => ({
        month: format(
          new Date(
            parseInt(monthKey.split("-")[0]),
            parseInt(monthKey.split("-")[1])
          ),
          "MMMM yyyy"
        ),
        count: Number(count),
        total: Number(total).toFixed(2),
      }));

    return sortedCounts;
  }, [tickets]);

  console.log(countTicketsByMonth);

  const chartConfig = {
    renda: {
      label: "Valor Renda",
      color: "#38A3A5",
    },
    device: {
      label: "Quantidade",
      color: "#22577A",
    },
  };

  return (
    <Card className="border-none shadow-[0px_0px_19px_-5px_rgba(0,0,0,0.25)]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg sm:text-xl text-[#2F3640] ">
            Renda Mensal
          </CardTitle>
          <a href="#">
            <ChartColumn className="ml-auto w-5 h-5" />
          </a>
        </div>
        <CardDescription>
          Veja sua renda entre os meses passados.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
          <BarChart data={countTicketsByMonth}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="total" fill="var(--color-renda)" radius={4} />
            <Bar dataKey="count" fill="var(--color-device)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
