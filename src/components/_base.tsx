import React from "react";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {

}

const Base = React.forwardRef<any, Props>((props, forwardedRef) => {
  return (
    <section 
      {...props}
      ref={forwardedRef}
    >

    </section>
  )
})

Base.displayName = '';

export default Base