"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaCircleHalfStroke, FaMoon, FaSpinner, FaSun } from "react-icons/fa6";
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
import themeModule, { type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {}

const ThemeButton = React.forwardRef<any, Props>((props, forwardedRef) => {
  const [theme, setTheme] = useState<Theme>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log(themeModule)
    setTheme(themeModule.getTheme())
    setLoading(false)
  }, [])

  const toggleTheme = useCallback(() => {
    console.log('TOGGLE THEME')
    themeModule.toggleTheme()
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }, [])
  
  if (loading) {
    return (
      <NavigationMenuItem>
      <NavigationMenuLink 
        className={cn(
          navigationMenuTriggerStyle({ variant: 'icon' }),
          'text-muted-foreground hover:text-muted-foreground active:text-muted-foreground',
          'dark:text-muted-foreground dark:hover:text-muted-foreground dark:active:text-muted-foreground',
          'cursor-default'
        )}
        onClick={undefined}
      >
        <FaSpinner 
          className='animate-spin'
          rotate='true' 
        />
      </NavigationMenuLink>
  </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem>
      <NavigationMenuLink 
        className={navigationMenuTriggerStyle({ variant: 'icon' })}
        onClick={toggleTheme}
      >
        { theme === 'light' ? 
          <FaMoon /> :
          <FaSun />          
        }

      </NavigationMenuLink>
  </NavigationMenuItem>
  )
})

ThemeButton.displayName = 'ThemeButton';

export default ThemeButton