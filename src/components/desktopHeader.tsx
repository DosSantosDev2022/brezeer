import Link from "next/link";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CalendarIcon, HomeIcon, LogInIcon, LucideScissors, UserIcon } from "lucide-react";
import { Button } from "./ui/button";

const handleLogoutClick = () => signOut();
const handleLoginClick = () => signIn()
export function HeaderDesktop() {

  const links = [
    {
      linkName: 'Home',
      Url: '/',
      icon: <HomeIcon size={18} className="mr-2" />
    },
    {
      linkName: 'Agendamentos',
      Url: '/bookings',
      icon: <CalendarIcon size={18} className="mr-2" />
    },
    {
      linkName: 'Barbershops',
      Url: '/shops',
      icon: <LucideScissors  size={18} className="mr-2" />
    }
  ]

  const { data } = useSession();
  return (
    <div className="flex items-center justify-center gap-12">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-3">
            {links.map((link) => (
              <NavigationMenuItem className="hover:bg-primary-foreground p-2 rounded-sm transition-all duration-500" key={link.linkName}>
                <Link className="flex items-center" href={link.Url}>
                  <i>{link.icon}</i>
                  {link.linkName}
                </Link>
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        {data?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage alt="" src={data?.user?.image || ''} />
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button variant="link" className="w-full justify-start " onClick={handleLogoutClick}>
                  <LogInIcon className="mr-2" size={18} />
                  Logout
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-2">
                <UserIcon size={32} />
                <h2 className="font-bold">Olá, faça seu login!</h2>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button variant="link" className="w-full justify-start" onClick={handleLoginClick}>
                  <LogInIcon className="mr-2" size={18} />
                  Login
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}


      </div>
    </div>
  )
}