import { getServerSession } from "next-auth";
import { BarbershopInfo } from "../components/barbershop-info";
import { ServiceItem } from "../components/service-item";
import { db } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopDetailsPageprops {
  params: {
    id?: string
  }
}

export default async function BarbershopDetailsPage({ params} : BarbershopDetailsPageprops) {
   const session = await getServerSession(authOptions)
  if(!params.id) {
    return null
  }

  const barbershop = await db.barbershop.findUnique({
     where: {
      id: params.id
     },
     include: {
      services : true
     }
  })
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="px-5 flex flex-col gap-4 py-6">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} barbershop={barbershop} service={service} isAuthenticated={!!session?.user} />
        ))}
      </div>
    </div>
  )
}