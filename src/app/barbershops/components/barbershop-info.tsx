'use client'

import {SideMenu} from "@/components/side-Menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface BarbershopInfoProps {
  barbershop: Barbershop;
}

export function BarbershopInfo({ barbershop }: BarbershopInfoProps) {

  const router  = useRouter()

  const handleBackClick = () => {
    router.replace("/")
  }


  return (
    <div>
      <div className="h-[250px] w-full relative ">
        <Button variant={"outline"} className="z-50 absolute top-4 left-4" onClick={handleBackClick}>
          <ChevronLeftIcon />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button size={'icon'}  variant={"outline"} className="z-50 absolute top-4 right-4">
              <MenuIcon/>
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu/>
          </SheetContent>
        </Sheet>

        <Image src={barbershop.imageUrl} fill alt={barbershop.name} style={{
          objectFit: "cover"
        }} className="opacity-75" />
      </div>

      <div className="px-5 pb-6 border-b border-solid border-secondary ">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-1 mt-2"> 
          <MapPinIcon className="text-primary" size={18}/>
          <p className="text-sm">5,0 (899 avaliações)</p>
        </div>
      </div>
    </div>
  )
}