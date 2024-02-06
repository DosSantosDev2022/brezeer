'use client'
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useSession } from "next-auth/react";

export function Hero(){
  const {data} = useSession()
  return (
    <div className="px-5 pt-5">
      <h2 className="text-xl font-bold">{`Olá, ${data?.user?.name}`}</h2>
      <p className="capitalize text-sm">
        {format(new Date(), "EEEE',' dd 'de' MMMM", {
          locale: ptBR,
        })}
      </p>
    </div>
  )
}