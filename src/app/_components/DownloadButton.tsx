import React from "react";
import { Button } from "@/ui/button";
import Link from "next/link";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {

}

const DownloadButton = React.forwardRef<any, Props>((props, forwardedRef) => {
  return (
    <Link href="/download" legacyBehavior passHref>
      <Button 
        {...props}
        className='bg-orange-500 text-white hover:bg-orange-400'
        ref={forwardedRef}
      >
            Download now
      </Button>
    </Link>
  )
})

DownloadButton.displayName = '';

export default DownloadButton