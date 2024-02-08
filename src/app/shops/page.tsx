import { BarberShopItem } from "@/app/(home)/components/barbershop-item";
import { Header } from "@/components/header";
import { db } from "@/lib/prisma";
import { Barbershop } from "@prisma/client";
import { Search } from "../(home)/components/search";

export default async function AllBarbershops() {
  const barbershops: Barbershop[] = await db.barbershop.findMany({});
  return (
    <>
      <div className="px-5 py-6 flex flex-col gap-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-center">
          <h1 className="text-gray-400 font-bold text-xs uppercase w-full">Escolha sua barbearia</h1>
          <div className=" w-full">
            <Search />
          </div>
        </div>
        
        <div className="w-full flex flex-wrap gap-4 items-center justify-center lg:justify-start">
          {barbershops.map((barbershop: Barbershop) => (
              <BarberShopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

    </>
  )
}