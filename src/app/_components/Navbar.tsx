import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa6";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ThemeButton from "./ThemeButton";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType> {

}

const Navbar = React.forwardRef<any, Props>((props, forwardedRef) => {

  return (
    <NavigationMenu 
      {...props}
      ref={forwardedRef}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle({ variant: 'ghost' })}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/download" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle({ variant: 'ghost' })}>
              Download
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <span className='text-base font-medium select-none'> | </span>

        {/* Icon buttons */}
        <ThemeButton />
        
        <NavigationMenuItem>
          <NavigationMenuLink 
            className={navigationMenuTriggerStyle({ variant: 'icon' })}
            href="#"
          >
            <FaGithub />
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
})

Navbar.displayName = 'Navbar';

export default Navbar