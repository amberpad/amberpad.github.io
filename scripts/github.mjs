import path from 'node:path'
import { Octokit } from "octokit";
import { JSONFilePreset } from 'lowdb/node'

const OUTPUT_FILE = path.resolve('./src/assets/prefetched/github.json')
const OWNER = 'maxkalavera'
const REPO = 'amberpad'
const ORGANIZATION = 'amberpad'

const defaultData = {
  latestRelease: null,
  members: [],
  contributors: [],
  downloadAssets: {
    values: [],
    options: {}
  }
}

const octokit = new Octokit({
  //auth: 'YOUR-TOKEN'
})

/****************************************************************************** 
* Regexes
******************************************************************************/
const INSTALLER_TOKENS = [
  'Amberpad',
  '-?',
  '(?<version>v?\\d+\\.\\d+\\.\\d+)?',
  '-?',
  '(?<platform>mac|linux|win)?',
  '-?',
  '(?<arch>ia32|IA(-|_)32|i686|x86|x86\\s(L|l)egacy|x86(-|_)32|x64|amd64|x86(-|_)64|AArch64|ARMv\\d+|arm64|armv7l|universal)?',
  '.',
  '(?<extension>dmg|pkg|exe|msi|appx|deb|rpm|apk|AppImage|flatpak|snap|7z|zip|tar.xz|tar.lz|tar.gz|tar.bz2)'
]
const INSTALLER_SEARCH_REGEXP = new RegExp(`^${INSTALLER_TOKENS.join('')}$`, 'i')
const INSTALLER_TOKENS_REGEXP = RegExp(INSTALLER_TOKENS.join(''), 'i')

// Systems
const LINUX_DISTRIBUTABLES_EXTENSIONS = 
  /^(deb|rpm|apk|AppImage|flatpak|snap)$/i
const MACOS_DISTRIBUTABLES_EXTENSIONS = 
  /^(dmg|pkg)$/i
const WINDOWS_DISTRIBUTABLES_EXTENSIONS = 
  /^(exe|msi|appx)$/i

// ARCHS
const X64_ARCH_ANALOGS_REGEXP = 
  /^(x64|amd64|x86(-|_)64)$/i
const ARM64_ARCH_ANALOGS_REGEXP =
  /^(arm64|AArch64|ARMv\d+)$/i
const IA32_ARCH_ANALOGS_REGEXP = 
  /^(ia32|IA(-|_)32|i686|x86|x86\s(L|l)egacy|x86(-|_)32)$/i
const ARM_MOBILES_ARCH_ANALOGS_REGEXP = 
  /^(ARMv[a-zA-Z-\d]*)$/i

/****************************************************************************** 
* Fetcher functions
******************************************************************************/

const getLatestRelease = async () => {
  const response = await octokit.request('GET /repos/{owner}/{repo}/releases/latest', {
    owner: OWNER,
    repo: REPO,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  if (response.status === 200) {
    return response.data
  }

  console.error('There was a problem fetching latest release')
  return null
}

const getCollaborators = async () => {
  const response = await octokit.request('GET /repos/{owner}/{repo}/collaborators', {
    owner: OWNER,
    repo: REPO,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  if (response.status === 200) {
    return response.data
  }

  console.error('There was a problem fetching collaborators')
  return null
}

const getContributors = async () => {
  const response = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
    owner: OWNER,
    repo: REPO,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  if (response.status === 200) {
    return response.data
  }

  console.error('There was a problem fetching contributors')
  return null
}

const getUser = async (username) => {
  const response = await octokit.request('GET /users/{username}', {
    username,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  if (response.status === 200) {
    return response.data
  }

  console.error(`There was a problem fetching user (${username}) info`)
  return null
}

const getOrganizationMembers = async () => {
  let response = await octokit.request('GET /orgs/{org}/members', {
    org: ORGANIZATION,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  if (response.status === 200) {
    let items = response.data
    const members = []
    for (let member of items) {
      const userInfo = await getUser(member.login)
      if (userInfo !== null) {
        members.push(userInfo)
      }
    }
    return members
  }

  console.error('There was a problem fetching organization members')
  return null
}

const buildRepoData = async () => {
  const db = await JSONFilePreset(OUTPUT_FILE, defaultData)

  db.data.latestRelease = await getLatestRelease() || db.data.latestRelease
  db.data.members = await getOrganizationMembers() || db.data.members
  db.data.contributors = (await getContributors()) || db.data.contributors

  // Remove contributors that already are in member\'s list
  db.data.contributors = db.data.contributors.filter(
    contributor => !db.data.members.some(member => member.login === contributor.login)
  )
  // Sort by contributions
  /* @ts-ignore */
  db.data.contributors = db.data.contributors.toSorted((a, b) => b.contributions - a.contributions)

  db.data.downloadAssets.values = extractAssetData(
    db.data.latestRelease?.assets
  ) || db.data.downloadAssets.values
  db.data.downloadAssets.options = getOptionsValues(
    db.data.downloadAssets.values, 
    ['version', 'platform']
  ) || db.data.downloadAssets.options

  db.write()
  console.info('Prefetched github data file updated')
}

await buildRepoData()

/******************************************************************************
* Utils
******************************************************************************/

function extractDataFromFilename (filename) {
  const found = filename.match(INSTALLER_TOKENS_REGEXP)
  return found === null ? {} : { ...found.groups }
}

function normalizeData (data) {
  // x64 AMD64, x86-64, x86_64
  if (X64_ARCH_ANALOGS_REGEXP.test(data.arch)) {
    data.arch = 'x64'
  }

  // ARM64 AArch64, ARMv7 and ARMv8
  if (ARM64_ARCH_ANALOGS_REGEXP.test(data.arch)) {
    data.arch = 'arm64'
  }

  // ia32, IA-32, i686, x86, x86 Legacy, x86-32, x86_32
  if (IA32_ARCH_ANALOGS_REGEXP.test(data.arch)) {
    data.arch = 'ia32'
  }

  // ARMv7/8 for raspberry pi
  if (ARM_MOBILES_ARCH_ANALOGS_REGEXP.test(data.arch)) {
    data.arch = 'armv7l'
  }

  // Linux
  if (LINUX_DISTRIBUTABLES_EXTENSIONS.test(data.extension)) {
    data.platform = 'linux'
  }

  // Mac OS
  if (MACOS_DISTRIBUTABLES_EXTENSIONS.test(data.extension)) {
    data.platform = 'darwin'
    data.arch = 'universal'
  }

  // Windows
  if (WINDOWS_DISTRIBUTABLES_EXTENSIONS.test(data.extension)) {
    data.platform = 'win32'
  }

  return data
}

function extractAssetData (assets) {
  const assetsData = assets.map(item => ({
    url: item.url,
    browser_download_url: item.browser_download_url,
    filename: item.name,
    content_type: item.content_type,
    size: item.size,
    created_at: item.created_at,
    updated_at: item.updated_at,
  })).filter(item => INSTALLER_SEARCH_REGEXP.test(item.filename))
  
  return assetsData.map((item) => ({
    ...item,
    ...extractDataFromFilename(item.filename)
  }))
    .map(normalizeData)
}

function getOptionsValues (assets, attrs = []) {
  const options = {}
  attrs.forEach(attr => options[attr] = new Set())
  for (let i = 0; i < assets.length; i++) {
    for (let j = 0; j < attrs.length; j++) {
      options[attrs[j]].add(assets[i][attrs[j]])
    }
  }

  return Object.fromEntries(
    Object.entries(options)
      .map(([key, value]) => [key, Array.from(value)])
  )
}
