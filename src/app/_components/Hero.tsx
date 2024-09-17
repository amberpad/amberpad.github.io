'use client'
import { cn } from "@/lib/utils";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import ImageAppLight from '@/assets/images/hero-app-light.png'
import ImageAppDark from '@/assets/images/hero-app-dark.png'
import SVGBlob from '@/assets/images/blob.svg'
import React from "react";
import { useTheme } from 'next-themes'

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {

}

const Hero = React.forwardRef<any, Props>((props, forwardedRef) => {
  const { theme } = useTheme()

  let renderTheme = undefined 
  if (theme === 'system') {
    renderTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'
  } else {
    renderTheme = theme
  }

  return (
    <section 
      {...props}
      className={cn(
        'w-full min-h-slide px-4 py-12',
        'lg:max-w-screen-lg lg:h-slide',
        'flex flex-col justify-center items-center gap-4',
        'lg:flex lg:flex-row lg:justify-center lg:items-center',
      )}
      ref={forwardedRef}
    >
      <div
        data-tag='content'
        className={cn(
          'max-w-96',
          'flex flex-col justify-center items-center gap-6'
        )}
      >
        <div
          className={cn(
            'text-left',
          )}
        >
          <h1
            className='mb-6 font-sans text-fluent-2xl leading-none font-bold'
          >
            Your Ideas, Captured in <span className='text-primary-500'>Amber</span>
          </h1>
          <h3
            className='font-sans text-fluent-base leading-snug'
          >
            Simple, efficient, and smart. The note-taking app with a web chat aesthetic.
          </h3>
        </div>
        <DownloadButton />
      </div>

      <div
        className={cn(
          'relative w-full aspect-square',
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
          src={renderTheme === 'light' ? ImageAppLight : ImageAppDark} 
          alt='App screenshot'
        />
      </div>

    </section>
  )
})

Hero.displayName = 'Hero';

export default Hero