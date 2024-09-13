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
        'pattern-1 w-full h-72 mt-28 overflow-visible',
        'md:mt-72 lg:mt-40',
        'flex flex-row justify-center items-end'
      )}
      {...props}
      ref={forwardedRef}
    >
      <div
        className={cn(
          'relative',
          'w-full h-full max-w-screen-lg px-4',
          'flex flex-row justify-start items-end gap-4'
        )}
      >
        <div
          className={cn(
            'backdrop-blur-[0.6rem] w-fit h-fit max-h-full p-2',
            'flex flex-col justify-end items-stretch gap-2 z-10',
            'bg-[#fbb80082] text-primary-foreground',
          )}
        >
          <div
            data-tag='socials'
            className='flex flex-row justify-end items-center gap-2'
          >
            <Button variant='ghost' size='icon'>
              <FaGithub />
            </Button>
          </div>
          <div
            data-tag='documents'
            className='flex flex-row justify-end items-center gap-2'
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
                <a href="/privacy-policy">Privacy Policy</a>
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
        <Image 
          className={cn(
            'absolute bottom-0 right-0 z-0 max-w-96 sm:max-w-screen-sm pointer-events-none',
          )}
          src={SVGIlustration}
          alt='Ilustration of a girl holding in her hand an amber stone'
        />
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer';

export default Footer