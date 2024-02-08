

import { Search } from "./components/search";
import { BookingItem } from "@/components/booking-item";
import { BarberShopItem } from "./components/barbershop-item";
import { db } from "@/lib/prisma";
import { Hero } from "./components/hero";
import { Barbershop, Booking } from "@prisma/client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


export default async function Home() {
  const latestBooking: Booking = await db.booking.findFirst({
    orderBy: { date: 'desc' },
    include: {
      service: true,
      barbershop: true
    }
  })

  const barbershops: Barbershop[] = await db.barbershop.findMany({});

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full bg-[url('/bg-hero.png')] bg-cover lg:h-[460px] ">
        <div className="flex flex-col w-full">
          <Hero />
          <div className="px-5 mt-6 w-full">
            <Search />
          </div>
          <div className="hidden lg:block px-5 mt-6 w-full">
            <p className="font-bold text-4xl">As melhores barbearias na sua região !</p>
          </div>
        </div>
        <div className="px-5 mt-6 w-full">
          <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">último agendamento</h2>
          {latestBooking && <BookingItem booking={latestBooking} />}
        </div>
      </div>

      <div className="mt-6 lg:h-[460px] flex flex-col lg:flex-row">
        <div className="flex flex-col w-full">
          <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>
          <div className="w-full px-5">
            <h3 className="font-bold text-2xl">Os melhores barbeiros para cuidar do seu visual</h3>
            <p className="text-md font-light mt-6">Descubra uma experiência de cuidado excepcional com os melhores barbeiros, prontos para aprimorar o seu visual e proporcionar um serviço de qualidade incomparável.</p>
          </div>
        </div>

        <div className="flex px-5 mt-6 lg:mt-0 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <Carousel>
            <CarouselContent className="w-full flex gap-3 ">
              {barbershops.map((barbershop) => (
                <CarouselItem key={barbershop.id} className="">
                  <BarberShopItem  barbershop={barbershop} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant={"secondary"} />
            <CarouselNext variant={'secondary'} />
          </Carousel>

        </div>
      </div>

      <div className="mt-6 lg:h-[460px]  flex flex-col lg:flex-row">
        <div className="flex flex-col w-full">
          <h2 className="px-5 text-xs mb-3 uppercase text-gray-400 font-bold">Populares</h2>
          <div className="w-full px-5">
            <h3 className="font-bold text-2xl">Os melhores barbeiros para cuidar do seu visual</h3>
            <p className="text-md font-light mt-6">Descubra uma experiência de cuidado excepcional com os melhores barbeiros, prontos para aprimorar o seu visual e proporcionar um serviço de qualidade incomparável.</p>
          </div>
        </div>

        <div className="flex px-5 mt-6 lg:mt-0 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          <Carousel>
            <CarouselContent className="w-full flex gap-3 ">
              {barbershops.map((barbershop) => (
                <CarouselItem key={barbershop.id} className="lg:basis-[167px] basis-[167px]">
                  <BarberShopItem  barbershop={barbershop} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant={"secondary"} />
            <CarouselNext variant={'secondary'} />
          </Carousel>

        </div>
      </div>
    </div>
  );
}
