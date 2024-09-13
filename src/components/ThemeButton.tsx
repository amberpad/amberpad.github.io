"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaCircleHalfStroke, FaMoon, FaSpinner, FaSun } from "react-icons/fa6";
import themeModule, { type Theme } from "@/lib/theme";
import { Button } from "@/ui/button";
import { cn } from "@/lib/utils";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {}

const ThemeButton = React.forwardRef<any, Props>((props, forwardedRef) => {
  const [theme, setTheme] = useState<Theme>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTheme(themeModule.getTheme())
    setLoading(false)
  }, [])

  const toggleTheme = useCallback(() => {
    themeModule.toggleTheme()
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }, [])
  
  if (loading) {
    return (
      <span
        className={cn(
          props.className || '',
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
      </span>
    )
  }

  return (
    <span
      className={cn(
        props.className || '',
      )}
      onClick={toggleTheme}
    >
      { theme === 'light' ? 
        <FaMoon /> :
        <FaSun />          
      }
    </span>
  )
})

ThemeButton.displayName = 'ThemeButton';

export default ThemeButton