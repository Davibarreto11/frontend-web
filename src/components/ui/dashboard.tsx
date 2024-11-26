"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartColumn } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Line, XAxis } from "recharts";

export default function Dashboard(){

    const chartData = [
        { month: "Janeiro", renda: 186, device: 80 },
        { month: "Fevereiro", renda: 305, device: 200 },
        { month: "Março", renda: 237, device: 120 },
        { month: "Abril", renda: 73, device: 190 },
        { month: "Maio", renda: 209, device: 130 },
        { month: "Junho", renda: 214, device: 140 },
      ];
      const chartConfig = {
        renda: {
          label: "Valor Renda",
          color: "#38A3A5",
        },
        device: {
          label: "Quantidade",
          color: "#22577A",
        },
      } satisfies ChartConfig


    return(
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
            <ChartContainer config={chartConfig} className="max-h-[300px] w-full">
                <BarChart data={chartData}>
                    <CartesianGrid vertical={false}/>
                    
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0,3)}                  
                    />
                    <ChartLegend content={<ChartLegendContent />} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar  dataKey="renda" fill="var(--color-renda)" radius={4} />
                    <Bar  dataKey="device" fill="var(--color-device)" radius={4} />
                </BarChart>
            </ChartContainer>
        </CardContent>
      </Card>
    );

};