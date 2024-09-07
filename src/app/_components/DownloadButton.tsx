import React from "react";
import { Button } from "@/ui/button";
import Link from "next/link";
import { headers } from "next/headers"
import { filterDownloadAssets, extractFromUserAgent } from "@/lib/utils";
import prefetchedData from '@/assets/prefetched/github.json'

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {

}

const DownloadButton = React.forwardRef<any, Props>((props, forwardedRef) => {
  const headersList = headers()
  const userAgent = headersList.get('User-Agent')
  console.log('User-Agent', headersList.get('User-Agent'))
  if (userAgent) {
    console.log('User-Agent components', extractFromUserAgent(userAgent))
  }


  const downloadAssets = filterDownloadAssets(
    prefetchedData.downloadAssets.values,
    {
      type: 'install',
      version: prefetchedData.latestRelease.name
    }
  )
  //console.log('Download assets', downloadAssets)

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