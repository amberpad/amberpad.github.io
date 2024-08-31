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
        'bg-[#ffffff7c] rounded-md shadow-sm border border-white/15 backdrop-blur-md',
        'w-full p-4',
        'flex flex-row justify-start items-start gap-4'
      )}
    >
      <Image
        className='min-w-28 max-w-40'
        src={image}
        alt={`${title} ilustration`}
      />
      <div
        data-tag='content'
        className='w-full'
      >
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

const Features = React.forwardRef<any, Props>((props, forwardedRef) => {
  return (
    <section 
      {...props}
      className={cn(
        'w-full px-8',
        'bg-[#FFDF80] pattern-2',
        'flex flex-col justify-center items-center'
      )}
      ref={forwardedRef}
    >
      <div
        className={cn(
          'w-full max-w-screen-lg h-fit min-h-96 px-4 py-16',
          'grid auto-rows-auto sm:grid-cols-2 gap-4'
        )}
      >
        <Item 
          image={SVGOpenSource}
          title='Open Source'
          content='You have full access to the source code, allowing you to analyze, customize, and extend the app. You can fork the project, build on it, or contribute to its development, ensuring transparency in its functionality and fostering support from a growing community.'
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