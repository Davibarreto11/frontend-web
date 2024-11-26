import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";
import { Clock3, CalendarDays, DollarSign   } from 'lucide-react';
import Image  from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "./scroll-area";
export default function Sales(){
    return(
<Card className=" border-none shadow-[0px_0px_19px_-5px_rgba(0,0,0,0.25)]">
        <CardHeader>
          <div className="flex  items-center justify-between">
            <CardTitle className="text-lg sm:text-xl text-[#2F3640] ">
              Pedidos Recém Concluídos
            </CardTitle>
            <a href="#"><Clock3  className="ml-auto w-5 h-5"/></a>
          </div>
          <CardDescription>
            
            Ultimos pedidos concluidos nas ultimas 24 horas
          </CardDescription>
        </CardHeader>

        <ScrollArea className="rounded-md">
            <CardContent className=" max-h-[300px] rounded-lg py-4">

                <Link href='/list/clientsct '>                                
                    <article className="flex transition-all duration-300 hover:bg-slate-50 rounded-xl items-center gap-6 shadow-[0px_0px_20px_-1px_rgba(0,0,0,0.2)] mb-4 px-4 py-3">
                        <Avatar className=' w-10 h-10'>
                            <AvatarFallback className="bg-[#23577A] text-white font-semibold">RR</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm sm:text-base text-[#2F2E41] font-semibold">Rick Rubiin</p>
                            <span className="text-[12px] text-[#38A3A5] sm:text-sm ">Galaxy S21 FE</span>
                        </div>

                        {/* Separador */}
                        <div className="h-8 border-r-[2px] border-zinc-300"></div>
                        <div className="flex items-center flex-wrap gap-2 sm:gap-4">

                            <div className="text-[13px] text-[#38A3A5]  items-center sm:text-base sm:font-semibold flex gap-2">
                                <DollarSign/>
                                <span className="text-[#2F2E41]">R$:</span>
                                <p>200,00</p>
                            </div>

                            {/* Separador */}
                            <div className="hidden xl:flex  h-8 border-r-[2px] border-zinc-300"></div>

                            <div className="text-[13px] text-[#38A3A5]  items-center sm:text-base sm:font-semibold flex gap-2">
                                <CalendarDays/>
                                <p>25/07/2024</p>
                            </div>
                        </div>    
                    </article>
                </Link>

                <Link href='/list/clientsct '>                                
                    <article className="flex transition-all duration-300 hover:bg-slate-50 rounded-xl items-center gap-6 shadow-[0px_0px_20px_-1px_rgba(0,0,0,0.2)] mb-4 px-4 py-3">
                        <Avatar className=' w-10 h-10'>
                            <AvatarFallback className="bg-[#23577A] text-white font-semibold">RR</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm sm:text-base text-[#2F2E41] font-semibold">Rick Rubiin</p>
                            <span className="text-[12px] text-[#38A3A5] sm:text-sm ">Galaxy S21 FE</span>
                        </div>

                        {/* Separador */}
                        <div className="h-8 border-r-[2px] border-zinc-300"></div>
                        <div className="flex items-center flex-wrap gap-2 sm:gap-4">

                            <div className="text-[13px] text-[#38A3A5]  items-center sm:text-base sm:font-semibold flex gap-2">
                                <DollarSign/>
                                <span className="text-[#2F2E41]">R$:</span>
                                <p>200,00</p>
                            </div>

                            {/* Separador */}
                            <div className="hidden xl:flex  h-8 border-r-[2px] border-zinc-300"></div>

                            <div className="text-[13px] text-[#38A3A5]  items-center sm:text-base sm:font-semibold flex gap-2">
                                <CalendarDays/>
                                <p>25/07/2024</p>
                            </div>
                        </div>    
                    </article>
                </Link>
                <Link href='/list/clientsct '>                                
                    <article className="flex transition-all duration-300 hover:bg-slate-50 rounded-xl items-center gap-6 shadow-[0px_0px_20px_-1px_rgba(0,0,0,0.2)] mb-4 px-4 py-3">
                        <Avatar className=' w-10 h-10'>
                            <AvatarFallback className="bg-[#23577A] text-white font-semibold">RR</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm sm:text-base text-[#2F2E41] font-semibold">Rick Rubiin</p>
                            <span className="text-[12px] text-[#38A3A5] sm:text-sm ">Galaxy S21 FE</span>
                        </div>

                        {/* Separador */}
                        <div className="h-8 border-r-[2px] border-zinc-300"></div>
                        <div className="flex items-center flex-wrap gap-2 sm:gap-4">

                            <div className="text-[13px] text-[#38A3A5]  items-center sm:text-base sm:font-semibold flex gap-2">
                                <DollarSign/>
                                <span className="text-[#2F2E41]">R$:</span>
                                <p>200,00</p>
                            </div>

                            {/* Separador */}
                            <div className="hidden xl:flex  h-8 border-r-[2px] border-zinc-300"></div>

                            <div className="text-[13px] text-[#38A3A5]  items-center sm:text-base sm:font-semibold flex gap-2">
                                <CalendarDays/>
                                <p>25/07/2024</p>
                            </div>
                        </div>    
                    </article>
                </Link>
                <Link href='/list/clientsct '>                                
                    <article className="flex transition-all duration-300 hover:bg-slate-50 rounded-xl items-center gap-6 shadow-[0px_0px_20px_-1px_rgba(0,0,0,0.2)] mb-4 px-4 py-3">
                        <Avatar className=' w-10 h-10'>
                            <AvatarFallback className="bg-[#23577A] text-white font-semibold">RR</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm sm:text-base text-[#2F2E41] font-semibold">Rick Rubiin</p>
                            <span className="text-[12px] text-[#38A3A5] sm:text-sm ">Galaxy S21 FE</span>
                        </div>

                        {/* Separador */}
                        <div className="h-8 border-r-[2px] border-zinc-300"></div>
                        <div className="flex items-center flex-wrap gap-2 sm:gap-4">

                            <div className="text-[13px] text-[#38A3A5]  items-center sm:text-base sm:font-semibold flex gap-2">
                                <DollarSign/>
                                <span className="text-[#2F2E41]">R$:</span>
                                <p>200,00</p>
                            </div>

                            {/* Separador */}
                            <div className="hidden xl:flex  h-8 border-r-[2px] border-zinc-300"></div>

                            <div className="text-[13px] text-[#38A3A5]  items-center sm:text-base sm:font-semibold flex gap-2">
                                <CalendarDays/>
                                <p>25/07/2024</p>
                            </div>
                        </div>    
                    </article>
                </Link>

                

            </CardContent>
        </ScrollArea>
            <div className="pt-8"></div>
      </Card> 
    );
}