import { db } from "@/lib/prisma";
import { BarbershopInfo } from "@/app/barbershops/components/barbershop-info";
import { ServiceItem } from "@/app/barbershops/components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Service } from "@prisma/client";
import { SelectedSection } from "../components/selectedSections";
import { Informations } from "../components/informations";

interface BarbershopDetailsPageProps {
  params: {
    id?: string;
  };
}

export default async function BarbershopDetailsPage({ params }: BarbershopDetailsPageProps) {
  const session = await getServerSession(authOptions);

  if (!params.id) {
    // TODO: redirecionar para home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    // TODO: redirecionar para home page
    return null;
  }
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <SelectedSection />
      <div className="flex items-start justify-center gap-2 w-full">
        <div className="px-5 py-6  flex flex-wrap items-center justify-center gap-4 ">
          {barbershop.services.map((service: Service) => (
            <ServiceItem
              key={service.id}
              barbershop={barbershop}
              service={service}
              isAuthenticated={!!session?.user}
            />
          ))}
        </div>
        <div className="px-5 py-6 w-full hidden  lg:flex items-center justify-center">
          <Informations barbershop={barbershop} />
        </div>
        
      </div>

    </div>
  )
}