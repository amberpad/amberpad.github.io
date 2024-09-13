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
import ThemeButton from "@/components/ThemeButton";

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
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle({ variant: 'ghost' }),
                'font-medium'
              )}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/download" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle({ variant: 'ghost' }),
                'font-medium'
              )}
            >
              Download
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink 
              className={cn(
                navigationMenuTriggerStyle({ variant: 'ghost' }),
                'font-medium'
              )}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <span className='text-base font-medium select-none'> | </span>

        {/* Icon buttons */}
        <NavigationMenuItem>
          <ThemeButton 
            className={navigationMenuTriggerStyle({ variant: 'icon' })}
          />          
        </NavigationMenuItem>
        
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