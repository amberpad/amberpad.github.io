import React from 'react'
import Link from "next/link";
import { FaGripLines, FaGithub } from "react-icons/fa6";
import { Button } from "@/ui/button";
import { cn } from '@/lib/utils';
import ThemeButton from "./ThemeButton";
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
  return (
    <Sheet>
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
            <ThemeButton 
              className={navigationMenuTriggerStyle({ variant: 'icon' })}
            />
            <Button
              className={navigationMenuTriggerStyle({ variant: 'icon' })}
              asChild={true}
            >
              <a
                href='#'
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

          <Link href="/download" legacyBehavior passHref>
            <Button variant='ghost'>
              Home
            </Button>
          </Link>
          <Link href="/about" legacyBehavior passHref>
            <Button variant='ghost'>
              Download
            </Button>
          </Link>
          <Link href="/" legacyBehavior passHref>
            <Button variant='ghost'>
              About
            </Button>
          </Link>

        </div>
      </SheetContent>
    </Sheet>
  )
})

MobileNavigationMenu.displayName = 'MobileNavigationMenu';

export default MobileNavigationMenu