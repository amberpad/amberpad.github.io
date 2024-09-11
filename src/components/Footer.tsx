import { cn } from "@/lib/utils";
import React from "react";
import SVGIlustration from '@/assets/images/ilustration-footer.svg'
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/ui/button";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType> {

}

const Footer = React.forwardRef<HTMLElement, Props>((props, forwardedRef) => {
  return (
    <footer 
      className={cn(
        'pattern-1 w-full h-fit py-4',
        'flex flex-row justify-center items-end'
      )}
      {...props}
      ref={forwardedRef}
    >
      <div
        className={cn(
          'w-full max-w-screen-lg h-full max-h-full p-2',
          'flex flex-col justify-end items-end gap-0 z-10',
          'text-primary-foreground'
        )}
      >
        <div
          data-tag='socials'
          className={cn(
            'backdrop-blur-[0.6rem]',
            'flex flex-row justify-end items-center gap-2'
          )}
        >
          <Button variant='ghost' size='icon'>
            <FaGithub />
          </Button>
        </div>
        <div
          data-tag='documents'
          className={cn(
            'backdrop-blur-[0.6rem]',
            'flex flex-row justify-end items-center gap-2'
          )}
        >
          <h4 className={cn(
            'text-[0.8rem] font-bold'
          )}>
            Released under the 
            <Button 
              className='text-[0.8rem] text-primary-900 px-2' 
              variant='link'
              asChild
            >
              <a href="#">MIT License</a>
            </Button>
            ⋅ 
            <Button 
              className='text-[0.8rem] text-primary-900 px-2' 
              variant='link'
              asChild
            >
              <a href="#">Privacy Policy</a>
            </Button>
            ⋅
            <Button 
              className='text-[0.8rem] text-primary-900 px-2' 
              variant='link'
              asChild
            >
              <a href="#">Contributing</a>
            </Button>
          </h4>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer';

export default Footer