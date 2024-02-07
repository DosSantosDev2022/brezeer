import { redirect } from "next/navigation";
import {BarberShopItem} from "@/app/(home)/components/barbershop-item";
import {Header} from "@/components/header";
import { db } from "@/lib/prisma";
import {Search} from "@/app/(home)/components/search";
import { Barbershop } from "@prisma/client";

interface BarbershopsPageProps {
  searchParams: {
    search?: string;
  };
}

const BarbershopsPage = async ({ searchParams }: BarbershopsPageProps) => {
  if (!searchParams.search) {
    return redirect("/");
  }

  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
  });

  return (
    <>
      <Header />

      <div className="px-5 py-6 flex flex-col gap-6">
        <Search
          defaultValues={{
            search: searchParams.search,
          }}
        />

        <h1 className="text-gray-400 font-bold text-xs uppercase">Resultados para &quot;{searchParams.search}&quot;</h1>

        <div className="w-full flex flex-wrap gap-4">
          {barbershops.map((barbershop : Barbershop) => (
            <div key={barbershop.id} className="">
              <BarberShopItem barbershop={barbershop} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BarbershopsPage;