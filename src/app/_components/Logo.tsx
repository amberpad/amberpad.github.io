import React from "react";
import SVGLogo from '@/assets/images/logo.svg'
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType> {

}

const Logo = React.forwardRef<any, Props>((props, forwardedRef) => {
  return (
    <Button 
      className={cn(
        'inline-flex justify-center items-center',
        'text-primary-500'
      )}
      variant='link'
      asChild
    >
    <span 
      {...props}
      ref={forwardedRef}
    >
        <Image
          className={cn(
            'text-4xl w-[1em]',
            'pointer-events-none select-none'
          )}
          priority
          src={SVGLogo}
          alt="Amberpad's icon"
        />
        <h1
          className={cn(
            'text-lg font-bold',
            'pointer-events-none select-none'
          )}
        >
          Amberpad
        </h1>
    </span>
    </Button>
  )
})

Logo.displayName = 'Logo';

export default Logo