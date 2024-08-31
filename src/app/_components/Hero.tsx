import { cn } from "@/lib/utils";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import ImageAppLight from '@/assets/images/hero-app-light.png'
import SVGBlob from '@/assets/images/blob.svg'
import React from "react";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {

}

const Hero = React.forwardRef<any, Props>((props, forwardedRef) => {
  return (
    <section 
      {...props}
      className={cn(
        'w-full max-w-screen-lg h-slide px-8',
        'flex flex-row justify-center items-center gap-4'
      )}
      ref={forwardedRef}
    >
      <div
        data-tag='content'
        className={cn(
          'max-w-96',
          'flex flex-col justify-center items-center gap-4'
        )}
      >
        <div
          className={cn(
            'text-left',
            //'flex flex-col justify-start items-center gap-4'
          )}
        >
          <h1
            className='m-1'
          >
            Your Ideas, Captured in <span className='text-primary-500'>Amber</span>
          </h1>
          <h3
            className='m-1'
          >
            Simple, efficient, and smart. The note-taking app with a web chat aesthetic.
          </h3>
        </div>
        <DownloadButton />
      </div>

      <div
        className={cn(
          'relative w-full aspect-square max-w-screen-md',
          'flex flex-col justify-center items-center',
          'overflow-visible'
        )}
      >
        <Image 
          className={cn(
            'absolute top-[0%] left-[0%] w-full h-full z-0',
            'pointer-events-none select-none',
          )}
          src={SVGBlob} 
          alt='svg blob background' 
        />
        <Image 
          className={cn(
            'relative w-[90%] z-10',
            'pointer-events-none select-none',
            'drop-shadow-md'
          )}
          src={ImageAppLight} 
          alt='App screenshot'
        />
      </div>

    </section>
  )
})

Hero.displayName = 'Hero';

export default Hero