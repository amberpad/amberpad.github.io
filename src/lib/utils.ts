import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { UAParser } from "ua-parser-js";
import type { DownloadAsset } from '@/types'
import lodash from 'lodash'
import { 
  MACOS_USER_AGENT, 
  WINDOWS_USER_AGENT, 
  DEB_INSTALLER_SUPPORT_OS,
  RPM_INSTALLER_SUPPORT_OS,
  X64_ARCH,
  ARM64_ARCH,
  IA32_ARCH,
  ARMV7L_ARCH,
} from "./regexes";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function filterDownloadAssets (
  assets: {[key: string]: any}[],
  filterObject: Partial<DownloadAsset>={}
): {
  values: {[key: string]: any}[],
  options: {[key: string]: string[]},
} {
  const values: {[key: string]: any}[] = []
  const options = {
    version: new Set(),
    platform: new Set(),
    arch: new Set(),
    extension: new Set(),
  }

  const filters = lodash.pickBy(filterObject, (value) => value !== undefined)
  const keys = Object.keys(filters)
  for (let i = 0; i < assets.length; i++) {
    if (lodash.isEqual(lodash.pick(assets[i], keys), filters)) {
      values.push(assets[i])
      options.version.add(assets[i].version)
      options.platform.add(assets[i].platform)
      options.arch.add(assets[i].arch)
      options.extension.add(assets[i].extension)
    }
  }

  return {
    values,
    options: lodash.mapValues(options, (attr) => Array.from(attr).toSorted()) as any,
  }
}

function normalizeSystemLabel (system: string) {

}

export function getUserAgentDownloadAssetsDefaults (userAgentHeader: string) {
    //const userAgent = new UAParser(navigator.userAgent);
    const userAgent = new UAParser(userAgentHeader);
    const userAgentDict = userAgent.getResult()
    const _defatuls: {
      platform: string | null;
      arch: string | null;
      extension: string | null;
    } = {
      platform: null,
      arch: null,
      extension: null,
    }

    const system = userAgentDict.os.name
    const arch = userAgentDict.cpu.architecture
    // Normalize CPU architectures
    if (typeof arch === 'string' && arch) {
      if (
        X64_ARCH.test(arch)
      ) {
        _defatuls.arch = 'x64'
      } else if (
        ARM64_ARCH.test(arch)
      ) {
        _defatuls.arch = 'arm64'
      } else if (
        IA32_ARCH.test(arch)
      ) {
        _defatuls.arch = 'ia32'
      } else if (
        ARMV7L_ARCH.test(arch)
      ) {
        _defatuls.arch = 'armv7l'
      }
    }

    // Installers & Operating systems
    if (typeof system === 'string' && system) {
      if (
        MACOS_USER_AGENT.test(system)
      ) {
        _defatuls.platform = 'darwin'
        _defatuls.arch = 'universal'
        _defatuls.extension = 'dmg'
      } else if (
        WINDOWS_USER_AGENT.test(system)
      ) {
        _defatuls.platform = 'win32'
        _defatuls.extension = 'exe'
      } else if (
        DEB_INSTALLER_SUPPORT_OS.test(system)
      ) {
        _defatuls.platform = 'linux'
        _defatuls.extension = 'deb'
      } else if (
        RPM_INSTALLER_SUPPORT_OS.test(system)
      ) {
        _defatuls.platform = 'linux'
        _defatuls.extension = 'rpm'
      }
    }

    return _defatuls
}