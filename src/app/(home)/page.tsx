import { Header } from "@/components/header";

import { Search } from "./components/search";
import { BookingItem } from "@/components/booking-item";
import { BarberShopItem } from "./components/barbershop-item";
import { db } from "@/lib/prisma";
import { Hero } from "./components/hero";
import { Barbershop, Booking } from "@prisma/client";


export default async function Home() {
  const latestBooking : Booking= await db.booking.findFirst({
    orderBy: { date : 'desc'},
    include: {
      service: true,
      barbershop: true
    }
  })
  
  const barbershops : Barbershop[] = await db.barbershop.findMany({});
  
  return (
    <div>
    <Header />

    <Hero/>

    <div className="px-5 mt-6">
      <Search />
    </div>

    <div className="px-5 mt-6">
      <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">último agendamento</h2>
      {latestBooking && <BookingItem booking={latestBooking} />} 
    </div>

    <div className="mt-6">
      <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>

      <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
          <BarberShopItem key={barbershop.id } barbershop={barbershop} />
        ))}
      </div>
    </div>

    <div className="mt-6 mb-[4.5rem]">
      <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Populares</h2>

      <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
          <BarberShopItem key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>
    </div>
  </div>
  );
}
