import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Barbershop } from "@prisma/client";
import { LucidePhone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface InformationsProps {
  barbershop : Barbershop
}

export function Informations({ barbershop} : InformationsProps) {
  
  return (
    <>
      <Card className="w-[368px]">
        <CardHeader>
          <Image src={'/Barber-map.png'} alt={barbershop.name} width={360} height={360} />
        </CardHeader>
        <CardContent>
          <CardTitle className="mb-6">Sobre nós</CardTitle>
          <CardDescription>
            Bem-vindo à Vintage Barber, onde tradição encontra estilo. Nossa equipe de mestres barbeiros transforma cortes de cabelo e barbas em obras de arte. Em um ambiente acolhedor, promovemos confiança, estilo e uma comunidade unida.
          </CardDescription>
          <div className="flex flex-col gap-5 mt-6">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <LucidePhone size={16} />
                <span> (11) 98204-5108</span>
              </div>
              <Button>Copiar</Button>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <LucidePhone size={16} />
                <span> (11) 98204-5108</span>
              </div>
              <Button>Copiar</Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <div className="flex justify-between">
              <span className="font-light text-zinc-500"> Segunda-feira</span>
              <span>Fechado</span>
            </div>
            <div className="flex justify-between">
              <span className="font-light text-zinc-500">Terça-feira</span>
              <span>09:00 - 21:00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-light text-zinc-500">Quarta-feira</span>
              <span>09:00 - 21:00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-light text-zinc-500">Quinta-feira</span>
              <span>09:00 - 21:00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-light text-zinc-500">Sexta-feira</span>
              <span>09:00 - 21:00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-light text-zinc-500">Sábado</span>
              <span>09:00 - 21:00</span>
            </div>
            <div className="flex justify-between">
              <span className="font-light text-zinc-500">Domingo</span>
              <span>Fechado</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-between w-full border-t border-zinc-500 py-6">
            <span>Em parceria com</span>
            <Link href={'/'}>
              <h1 className="font-bold text-2xl">Brezeer</h1>
            </Link>
          </div>
        </CardFooter>
      </Card>
    </>
  )
}