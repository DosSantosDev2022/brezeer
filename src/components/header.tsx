'use client'
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { SideMenu } from "./side-Menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HeaderDesktop } from "./desktopHeader";

export function Header() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleRisize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleRisize()
    window.addEventListener("resize", handleRisize)

    return () => {
      window.removeEventListener("resize", handleRisize)
    }
  },[])


  return (
    
    <Card>
      <CardContent className="p-5 justify-between items-center flex flex-row">
        <Link href={'/'}>
          <h1 className="font-bold text-2xl">Brezeer</h1>
        </Link>
        

        {isMobile ? (
          <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>

        ) : (
          <HeaderDesktop/>
        )}
        
      </CardContent>
    </Card>
  )
}