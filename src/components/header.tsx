'use client'
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { SideMenu } from "./side-Menu";

export function Header() {
  return (
    <Card>
    <CardContent className="p-5 justify-between items-center flex flex-row">
      <h1>Brezeer</h1>
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
    </CardContent>
  </Card>
  )
}