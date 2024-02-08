import { db } from "@/lib/prisma";
import { BarbershopInfo } from "@/app/barbershops/components/barbershop-info";
import { ServiceItem } from "@/app/barbershops/components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Service } from "@prisma/client";
import { Button } from "@/components/ui/button";

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
      <div className="flex items-center justify-start gap-3 px-5 py-6 ">
        <Button>Serviços</Button>
        <Button>Informações</Button>
      </div>
      <div className="px-5 flex flex-col lg:flex-row lg:flex-wrap items-center justify-start gap-4 py-6">
        {barbershop.services.map((service: Service) => (
          <ServiceItem key={service.id}
            barbershop={barbershop}
            service={service}
            isAuthenticated={!!session?.user}
          />
        ))}
      </div>
    </div>
  )
}