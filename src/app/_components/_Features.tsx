import { cn } from "@/lib/utils";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";

import SVGOpenSource from '@/assets/images/features-open-source.svg'
import SVGUserExperience from '@/assets/images/features-user-experience.svg'
import SVGFamiliarInterface from '@/assets/images/features-familiar-interface.svg'
import SVGIntuitiveOrganization from '@/assets/images/features-intuitive-organization.svg'

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {

}

interface ItemProps extends React.ComponentPropsWithoutRef<React.ElementType>  {
  image: string | StaticImport;
  title: string; 
  content: string;
}

const Item = ({
  image, 
  title, 
  content
}: ItemProps) => {
  return (
    <div
      data-tag='item'
      className={cn(
        'bg-white/75 rounded-lg shadow-sm border border-gray-50/95 backdrop-blur-md',
        'dark:bg-stone-900/85 dark:border-none',
        'w-full p-4',
        'md:px-6 md:py-4',
        'flex flex-col justify-start items-center gap-6',
        'lg:flex lg:flex-row lg:justify-start lg:items-start',
      )}
    >
      <Image
        className={cn(
          'w-40',
          'md:w-[34%]',
        )}
        src={image}
        alt={`${title} ilustration`}
      />
      <div
        data-tag='content'
        className={cn(
          'w-full prose prose-stone prose-sm font-sans',
        )}
      >
        <h3 className="text-shades-950 dark:text-shades-0">{title}</h3>
        <p className="font-medium text-shades-700 dark:text-shades-300">{content}</p>
      </div>
    </div>
  )
}

const Features = React.forwardRef<any, Props>((props, forwardedRef) => {
  return (
    <section 
      {...props}
      className={cn(
        'bg-gradient-to-b from-primary-600/70 to-primary-500/70',
        'dark:bg-gradient-to-b dark:from-primary-500/70 dark:to-primary-400/70',
        'w-full min-h-slide px-4 py-16',
        'sm:px-8 md:px-12 2xl:min-h-fit 2xl:py-28',
        'flex flex-col justify-center items-center'
      )}
      ref={forwardedRef}
    >
      <div
        className={cn(
          'w-full max-w-screen-lg h-fit min-h-96',
          '',
          'grid auto-rows-auto gap-8',
          'sm:grid-cols-2 lg:gap-12'
        )}
      >
        <Item 
          image={SVGOpenSource}
          title='Open Source'
          content={`
            You have full access to the source code, allowing you to analyze, customize, and extend 
            the app, ensuring transparency in its functionality and fostering support from a growing community.
          `}
        />
        <Item 
          image={SVGUserExperience}
          title='User Experience'
          content='Crafted with a focus on user experience (UX) and usability, the app is designed to be intuitive and user-friendly.'
        />
        <Item 
          image={SVGFamiliarInterface}
          title='Familiar Interface'
          content='A design that looks and feels like apps you already use, making it instantly recognizable and easy to navigate.'
        />
        <Item 
          image={SVGIntuitiveOrganization}
          title='Intuitive Organization'
          content='Easily sort and organize your notes with simple drag-and-drop functionality, customizable folders, and tags.'
        />        
      </div>
    </section>
  )
})

Features.displayName = 'Features';

export default Features