import React from "react";
import { Button } from "@/ui/button";
import Link from "next/link";
import { headers } from "next/headers"
import { filterDownloadAssets, getUserAgentDownloadAssetsDefaults } from "@/lib/utils";
import prefetchedData from '@/assets/prefetched/github.json'

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {

}

const DownloadButton = React.forwardRef<any, Props>((props, forwardedRef) => {
  const headersList = headers()
  const userAgent = headersList.get('User-Agent')
  let forDownload: {[key: string]: any} | null = null
  if (userAgent) {
    const filters = getUserAgentDownloadAssetsDefaults(userAgent)
    const assets = filterDownloadAssets(
      prefetchedData.downloadAssets.values,
      {
        version: prefetchedData.latestRelease.name,
        ...(Object.fromEntries(
          Object.entries(filters)
            .filter(([key, value]) => ![null, undefined].includes(value as any))
        )),
      }
    )
    if (assets.values.length === 1) {
      forDownload = {
        ...assets.values[0],
        ...filters
      }
    }
  }

  if (forDownload !== null) {
    const platform = ({
      'darwin': 'Mac OS',
      'win32': 'Windows',
      'linux': 'Linux'
    })[forDownload.platform as string]

    return (
      <Button 
        {...props}
        className='bg-orange-500 text-white hover:bg-orange-400'
        ref={forwardedRef}
        asChild={true}
      >
        <a
          href={forDownload.browser_download_url}
        >
          {
            platform ? 
              `Get Amberpad for ${platform}` :
              'Download now'
          }
        </a>
      </Button>
    )
  }

  return (
    <Link 
      href="/download"
      legacyBehavior 
      passHref
    >
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