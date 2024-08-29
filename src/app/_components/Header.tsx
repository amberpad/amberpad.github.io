import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

import { cn } from "@/lib/utils";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType> {

}

const Header = React.forwardRef<HTMLElement, Props>((props, forwardedRef) => {
  return (
    <header 
      {...props}
      className={cn(
        'backdrop-blur w-full h-fit mb-4 sticky top-0 z-50',
        'flex flex-row justify-center',
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
        <Navbar />
      </div>

    </header>
  )
})

Header.displayName = 'Header';

export default Header