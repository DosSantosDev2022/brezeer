'use client'
import { Button } from "@/components/ui/button";


export function SelectedSection() {
 
  return (
    <>
      <div className="flex items-center justify-start gap-3 px-5 py-6 lg:hidden ">
        <Button >Serviços</Button>
        <Button  >Informações</Button>
      </div>
    </>
  )
}