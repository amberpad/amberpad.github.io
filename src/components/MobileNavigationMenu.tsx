"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { FaGripLines, FaGithub } from "react-icons/fa6";
import { Button } from "@/ui/button";
import { cn } from '@/lib/utils';
import ThemesButton from "@/components/ThemesButton";
import { navigationMenuTriggerStyle } from "@/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/ui/sheet"
import { Separator } from "@/ui/separator"


interface Props extends React.ComponentPropsWithoutRef<React.ElementType> {

}

const MobileNavigationMenu = React.forwardRef<any, Props>((props, forwardedRef) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(value) => setIsOpen(value)}
    >
      <SheetTrigger
        asChild={true}
      >
        <Button 
          variant='ghost'
          className={cn(
            props.className || '',
          )}        
        >
          <FaGripLines 
            className="text-2xl" 
          />
        </Button>
      </SheetTrigger>
      <SheetContent
        aria-describedby='Side menu for mobile devices'
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <div
            className={cn(
              'flex flex-row justify-start items-center gap-2'
            )}
          >
            <ThemesButton 
              className={navigationMenuTriggerStyle({ variant: 'icon' })}
            />
            <Button
              className={navigationMenuTriggerStyle({ variant: 'icon' })}
              asChild={true}
            >
              <a
                href='#'
                onClick={() => setIsOpen(false)}
              >
                <FaGithub />
              </a>
            </Button>
          </div>
          <Separator 
            className='my-4'
          />
        </SheetHeader>
        
        <div
          className={cn(
            'flex flex-col justify-start items-start gap-0'
          )}
        >

          <Button 
            variant='ghost'
            onClick={() => setIsOpen(false)}
            asChild
          >
            <Link href="/#" passHref>
              Home
            
            </Link>
          </Button>
          
          {/* <Button 
            variant='ghost'
            onClick={() => setIsOpen(false)}
            asChild
          >
            <Link href="/download" passHref>
              Download
            </Link>
          </Button> */}

          <Button 
            variant='ghost'
            onClick={() => setIsOpen(false)}
            asChild
          >
            <Link href="/about" passHref>
                About
            </Link>
          </Button>

        </div>
      </SheetContent>
    </Sheet>
  )
})

MobileNavigationMenu.displayName = 'MobileNavigationMenu';

export default MobileNavigationMenu