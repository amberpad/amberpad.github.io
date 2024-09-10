import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileNavigationMenu from "./MobileNavigationMenu";

import { cn } from "@/lib/utils";


interface Props extends React.ComponentPropsWithoutRef<React.ElementType> {

}

const Header = React.forwardRef<HTMLElement, Props>((props, forwardedRef) => {
  return (
    <header 
      {...props}
      className={cn(
        'w-full h-header',
        'backdrop-blur sticky top-0 z-50',
        'flex flex-row justify-center items-center',
        'overflow-x-hidden'
      )}
      ref={forwardedRef}
    >
      <div
        data-tag='content'
        className={cn(
          'w-full h-20 px-4 py-2 max-w-screen-lg',
          'flex flex-row justify-between items-center gap-4',
        )}
      >
        <Logo />
        <Navbar 
          className='hidden md:block' 
        />
        <MobileNavigationMenu 
          className='md:hidden'
        />

      </div>

    </header>
  )
})

Header.displayName = 'Header';

export default Header