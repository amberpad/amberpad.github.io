'use client'

import { cn } from "@/lib/utils";
//import { UAParser } from "ua-parser-js";
import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select"
import { Label } from "@/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/ui/tabs"
import { FaDownload } from "react-icons/fa6";
import { useMemo, useEffect, useRef, useState } from "react";
import { filterDownloadAssets, getUserAgentDownloadAssetsDefaults } from "@/lib/utils";
import GeneralLayout from "@/layouts/GeneralLayout";
import prefetchedData from '@/assets/prefetched/github.json'

const latestRelease = prefetchedData.latestRelease
const assets = prefetchedData.downloadAssets.values
const options = prefetchedData.downloadAssets.options
const labels = {
  platform: {
    'darwin': 'Mac OS',
    'linux': 'Linux',
    'win32': 'Windows',
  },
  arch: {
    'x64': 'x64',
    'arm64': 'ARM64',
    'ia32': 'ia32',
    'armv7l': 'ARMv7l'
  },
  extension: {
    'deb': 'Linux DEB',
    'rpm': 'Linux RPM',
    'dmg': 'DMG',
    'pkg': 'PKG',
    'exe': 'Windows installer'
  }
}
const defaults: {
  platform: string | null;
  arch: string | null;
  extension: string | null;
} = {
  platform: null,
  arch: null,
  extension: null,
}

function getDefault (
  arr: any[], 
  _default: string = ''
) {
  const found = arr.find(item => item === _default)
  return found || arr[0]
}

const DownloadForm = () => {
  const [state, setState] = useState<{
    version: string;
    platform: string | undefined;
    arch: string | undefined;
    extension: string | undefined;
  }>({
    version: latestRelease.name,
    platform: options.platform.length > 0 ? options.platform[0] : undefined,
    arch: undefined,
    extension: undefined,
  })

  /****************************************************************************
  * Filter assets for select options
  ****************************************************************************/
  const downloadAssets = useMemo(() => {
    return filterDownloadAssets(
      assets,
      {
        version: state.version,
        platform: state.platform,
      }
    )
  }, [
    state.version,
    state.platform,
  ])

  /****************************************************************************
  * Filter assets to get the asset to download
  ****************************************************************************/
  const variableOptionsHash = JSON.stringify({
    arch: downloadAssets.options.arch,
    extension: downloadAssets.options.extension
  })
  useEffect(() => {
    // Update filters to get the asset to download
    setState(prev => ({
      ...prev,
      arch: getDefault(downloadAssets.options.arch, defaults.arch || ''),
      extension: getDefault(downloadAssets.options.extension, defaults.extension || ''),
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variableOptionsHash])

  const assetForDownload = useMemo(() => {
    const forDownload = filterDownloadAssets(
      assets,
      {
        version: state.version,
        platform: state.platform,
        arch: state.arch,
        extension: state.extension,
      }
    )

    return forDownload.values.length > 0 ? 
      forDownload.values[0] :
      null
  }, [
    state.version,
    state.platform,
    state.arch,
    state.extension,
  ])

  useEffect(() => {
    
    const userAgentDefaults = getUserAgentDownloadAssetsDefaults(
      navigator.userAgent
    )
    defaults.platform = userAgentDefaults.platform || defaults.platform
    defaults.arch = userAgentDefaults.arch || defaults.arch
    defaults.extension = userAgentDefaults.extension || defaults.extension
    // Set default OS if exist in list
    setState(prev => ({
      ...prev,
      platform: getDefault(options.platform, defaults.platform || ''),
    })) 
  }, [])

  return (
    <>
      <div
        data-tag='filters'
        className={cn(
          'py-4',
          'flex flex-row justify-start items-center gap-4 flex-wrap'
        )}
      >
          <Label
            className={cn(
              'flex flex-col justify-start items-start gap-2',
            )}
          >
            <h4>Operating System</h4>
            <Select
              defaultValue={
                options.platform.length > 0 ? options.platform[0] : undefined
              }
              value={state.platform}
              onValueChange={(value) => setState(prev => ({
                ...prev,
                platform: value,
              }))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {
                  options.platform.map(item => 
                    <SelectItem value={item} key={item}>
                      {(labels.platform as any)[item] || item}
                    </SelectItem>
                  )
                }
              </SelectContent>
            </Select>
          </Label>

          <Label
            className={cn(
              'flex flex-col justify-start items-start gap-2',
            )}
          >
            <h4>Installer</h4>
            <Select
              value={state.extension}
              onValueChange={(value) => setState(prev => ({
                ...prev,
                extension: value,
              }))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {
                  downloadAssets.options.extension.map(item => 
                    <SelectItem value={item} key={item}>
                      {(labels.extension as any)[item] || item}
                    </SelectItem>
                  )
                }
              </SelectContent>
            </Select>
          </Label>

          <Label
            className={cn(
              'flex flex-col justify-start items-start gap-2',
            )}
          >
            <h4>Architecture</h4>
            <Select
              disabled={state.arch?.toLocaleLowerCase() === 'universal'}
              value={state.arch?.toLocaleLowerCase() === 'universal' ? '' : state.arch}
              onValueChange={(value) => setState(prev => ({
                ...prev,
                arch: value,
              }))}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {
                  downloadAssets.options.arch.map(item => 
                    <SelectItem value={item} key={item}>
                      {(labels.arch as any)[item] || item}
                    </SelectItem>
                  )
                }
              </SelectContent>
            </Select>
          </Label>

          <Label
            className={cn(
              'flex flex-col justify-start items-start gap-2',
            )}
          >
            <h4>Version</h4>
            <Select
              defaultValue={state.version}
              disabled={true}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={state.version}>{state.version}</SelectItem>
              </SelectContent>
            </Select>
          </Label>



      </div>
      <div
        data-tag='download-button'
        className={cn(
          'min-h-52 w-full px-4 py-8',
          'flex flex-col justify-center items-center gap-2',
        )}
      >
        {
          assetForDownload === null ? undefined : (
            <Button
              variant='ghost'
              className={cn(
                'hidden',
                'h-fit p-4 overflow-visible',
                'text-xl text-primary border border-primary hover:border-accent active:border-accent',
                'flex flex-row justify-center items-start gap-4 flex-wrap',
                'text-wrap align-middle',
                'text-primary-500 border-primary-500'
              )}
              asChild={true}
            >
              <a
                href={assetForDownload.browser_download_url}
              >
                <FaDownload className="text-2xl" />
                Download Amberpad&nbsp;
                v{assetForDownload.version}
              </a>

            </Button>   
          )
        }
      </div>
      <h5
        className="font-sans text-fluent-sm"
      >
        Read&nbsp;
        <Button 
          variant='link' 
          size='link'
          asChild={true}
        >
          <a
            href={latestRelease.html_url}
          >
            changelog
          </a>
        </Button>&nbsp;
        on github
      </h5>
  </>
  )
}

export default function Download() {
  return (
    <GeneralLayout>
      <section className={cn(
        'w-full',
        'flex flex-col min-h-slide justify-start items-center',
      )}>
        <div
          className={cn(
            'w-fit max-w-screen-lg min-h-content px-4 py-16',
            'flex flex-col justify-start items-stretch gap-4',
          )}
        >
          <h1 className='header text-fluent-lg'>
            Download
          </h1>
          <Tabs 
            className={cn(
              'w-full'
            )}
            defaultValue="installer" 
          >
            <TabsList>
              <TabsTrigger value="installer">Prebuilt installer</TabsTrigger>
              {/* 
                <TabsTrigger value="source">Source code</TabsTrigger>         
              */}
            </TabsList>
            
            <TabsContent value="installer">
              <Card>
                <CardContent>
                  <DownloadForm />
                </CardContent>
              </Card>
            </TabsContent>

            {/* 
              <TabsContent value="source">
                <Card>
                  <CardContent>
                    <DownloadForm />
                  </CardContent>
                </Card>
              </TabsContent>          
            */}

          </Tabs>
        </div>
      </section>
    </GeneralLayout>
  );
}
