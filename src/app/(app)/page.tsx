import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {CircleArrowOutUpRight} from 'lucide-react'


export default function Home() {
  return (
  // <a href="api/auth/sign-out">Sign Out</a>

  <main className="sm:ml-14">

    {/* Titulo */}
    <div className="mb-[4rem]">
      <h1 className="text-[42px] font-bold">Registrar Aparelho</h1>
      <p className="text-sm ml-2 text-gray-600">Informe os dados do aparelho</p>
    </div>

    <section className="grid grid-cols-4 gap-4 pl-[2rem]">
      <Card>
        <CardHeader>
          <div className="flex justify-between">
          <CardTitle>
            Pedidos em Andamento
          </CardTitle>
           <CircleArrowOutUpRight/>
          </div>
        </CardHeader>
      </Card>

    </section>
  </main>
    
  );
}
