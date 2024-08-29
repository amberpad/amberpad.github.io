import React from "react";
import { Button } from "@/ui/button";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {

}

const DownloadButton = React.forwardRef<any, Props>((props, forwardedRef) => {
  return (
    <Button 
      {...props}
      className='bg-orange-500 text-white hover:bg-orange-400'
      ref={forwardedRef}
    >
          Download for Mac OS
    </Button>
  )
})

DownloadButton.displayName = '';

export default DownloadButton