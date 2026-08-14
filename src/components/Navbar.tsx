"use client"

import React from "react";
import Link from "next/link";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa6";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ThemesButton from "@/components/ThemesButton";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType> {

}

const Navbar = React.forwardRef<any, Props>((props, forwardedRef) => {

  return (
    <NavigationMenu 
      {...props}
      ref={forwardedRef}
      className={cn(
        (props.className || ''),
        'font-sans',
      )}
    >
      <NavigationMenuList>
        
        <NavigationMenuItem>
          <NavigationMenuLink 
            className={cn(
              navigationMenuTriggerStyle({ variant: 'ghost' }),
              'font-medium'
            )}
            asChild
          >
            <Link href="/#">
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuLink 
            className={cn(
              navigationMenuTriggerStyle({ variant: 'ghost' }),
              'font-medium'
            )}
            asChild
          >
            <Link href="/download">
              Download
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}
        
        <NavigationMenuItem>
          <NavigationMenuLink 
            className={cn(
              navigationMenuTriggerStyle({ variant: 'ghost' }),
              'font-medium'
            )}
            asChild
          >
            <Link href="/about" passHref>
              About
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <span className='text-base font-medium select-none'> | </span>

        {/* Icon buttons */}
        <NavigationMenuItem>
          <ThemesButton 
            className={navigationMenuTriggerStyle({ variant: 'icon' })}
          />          
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink 
            className={navigationMenuTriggerStyle({ variant: 'icon' })}
            href="https://github.com/amberpad/amberpad-electron"
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