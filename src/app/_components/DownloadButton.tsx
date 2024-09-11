"use client"
import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { Button } from "@/ui/button";
import Link from "next/link";
import { filterDownloadAssets, getUserAgentDownloadAssetsDefaults } from "@/lib/utils";
import prefetchedData from '@/assets/prefetched/github.json'
import { FaSpinner } from "react-icons/fa6";

interface Props extends React.ComponentPropsWithoutRef<React.ElementType>  {

}

interface State {
  loading: boolean,
  installable: {
    [key: string]: any;
  } | null
}

/*
import { headers } from "next/headers"
(headers().get('User-Agent') || '')
*/

const DownloadButton = React.forwardRef<any, Props>((props, forwardedRef) => {
  const [state, setState] = useState<State>({
    loading: true,
    installable: null
  })  
  useEffect(() => {
    const installable = getClientInstallable(
      navigator.userAgent
    )
    if (installable !== null) {
      setState((prev) => ({
        ...prev,
        loading: false,
        installable
      }))
    }
  }, [])

  return (
    <Link 
      href={
        state.installable === null ?
          "/download" :
          state.installable.browser_download_url
      }
      legacyBehavior 
      passHref
    >
      <Button 
        {...props}
        className='bg-orange-500 text-white hover:bg-orange-400'
        ref={forwardedRef}
      >

        {(() => {
          if (state.loading) {
            return (
              <FaSpinner 
                className='animate-spin'
                rotate='true' 
              />
            )
          } else if (state.installable === null) {
            return 'Download now'
          } else {
            return `Get Amberpad for ${({
              'darwin': 'Mac OS',
              'win32': 'Windows',
              'linux': 'Linux'
            })[state.installable.platform as string]}`
          }
        })()}        
      </Button>
    </Link>
  )
})

DownloadButton.displayName = '';

export default DownloadButton

/******************************************************************************
* Utils
******************************************************************************/

function getClientInstallable (userAgent: string): {
  [key: string]: any;
} | null {
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
    return {
      ...assets.values[0],
      ...filters
    }
  }
  return null
}
