import { BarberShopItem } from "@/app/(home)/components/barbershop-item";
import { Header } from "@/components/header";
import { db } from "@/lib/prisma";
import { Barbershop } from "@prisma/client";

export default async function AllBarbershops() {
  const barbershops: Barbershop[] = await db.barbershop.findMany({});
  return (
    <>
    <Header />

    <div className="px-5 py-6 flex flex-col gap-6">

      <h1 className="text-gray-400 font-bold text-xs uppercase">Escolha sua barbearia</h1>

      <div className="w-full flex flex-wrap gap-4">
        {barbershops.map((barbershop: Barbershop) => (
          <div key={barbershop.id} className="">
            <BarberShopItem barbershop={barbershop} />
          </div>
        ))}
      </div>
    </div>

  </>
  )
}