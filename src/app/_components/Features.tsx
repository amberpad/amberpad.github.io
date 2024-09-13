import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/ui/button"
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React from "react";
import { Download, Edit, Share2, Lock } from "lucide-react"

import SVGOpenSource from '@/assets/images/features-open-source.svg'
import SVGUserExperience from '@/assets/images/features-user-experience.svg'
import SVGFamiliarInterface from '@/assets/images/features-familiar-interface.svg'
import SVGIntuitiveOrganization from '@/assets/images/features-intuitive-organization.svg'
import DownloadButton from "./DownloadButton";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {

}

const Features = React.forwardRef<any, Props>((props, forwardedRef) => {
  return (
    <section 
      {...props}
      className={cn(
        'w-full min-h-slide px-4 py-16',
        'sm:px-8 md:px-12 2xl:min-h-fit 2xl:py-28',
        'flex flex-col justify-center items-center'
      )}
      ref={forwardedRef}
    >
      <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide select-none pointer-events-none">
          Beta
        </span>
        <h2 className="mt-4 text-3xl font-extrabold text-foreground dark:text-foreground sm:text-4xl">
          Experience the Future of Note-Taking
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-stone-700 dark:text-stone-300 sm:mt-4">
          The revolutionary notes app is now in Beta. Be among the first to try it out and shape its future!
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 mb-12">
        <FeatureCard 
          image={SVGOpenSource}
          title="Open Source"
          description={`
            You have full access to the source code, allowing you to analyze, customize, and extend 
            the app, ensuring transparency in its functionality and fostering support from a growing community.
          `}
        />
        <FeatureCard 
          image={SVGUserExperience}
          title='User Experience'
          description='Crafted with a focus on user experience (UX) and usability, the app is designed to be intuitive and user-friendly.'
        />
        <FeatureCard 
          image={SVGFamiliarInterface}
          title='Familiar Interface'
          description='A design that looks and feels like apps you already use, making it instantly recognizable and easy to navigate.'
        />
        <FeatureCard 
          image={SVGIntuitiveOrganization}
          title='Intuitive Organization'
          description='Easily sort and organize your notes with simple drag-and-drop functionality, customizable folders, and tags.'
        />
      </div>
      
      <DownloadButton />
    </div>

    </section>
  )
})

Features.displayName = 'Features';

export default Features

/******************************************************************************
* Subcomponents
******************************************************************************/

function FeatureCard(
  { 
    image,
    title, 
    description 
  }: {
    image: any,
    title: string,
    description: string,
  }
) {
  return (
    <div 
      className={cn(
        "bg-background rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform",
        "dark:bg-background dark:border dark:border-gray-700",
        "hover:-translate-y-1 hover:shadow-lg"
      )}
    >
      <div className="flex items-center justify-center w-24 h-24 mb-4">
        <Image
          className={cn(
            'h-24 pointer-events-none',
            'dark:grayscale-[0.4]',
          )}
          src={image}
          alt={`${title} ilustration`}
        />
      </div>
      <h3 className="text-lg font-semibold text-foreground dark:text-foreground mb-2">{title}</h3>
      <p className="text-stone-700 dark:text-stone-300">{description}</p>
    </div>
  )
}