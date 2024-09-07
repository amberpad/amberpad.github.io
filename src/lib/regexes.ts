

export const LINUX_DISTRIBUTABLES_EXTENSIONS = 
  /^(deb|rpm|apk|AppImage|flatpak|snap)$/i

export const MACOS_DISTRIBUTABLES_EXTENSIONS = 
  /^(dmg|pkg)$/i

export const WINDOWS_DISTRIBUTABLES_EXTENSIONS = 
  /^(exe|msi|appx)$/i

export const WINDOWS_USER_AGENT = (
  /^(Windows)$/
)
export const MACOS_USER_AGENT = (
  /^(MAC\s?OS(\sX)?(\s\d+\.?\d*)?|OS\sX)$/i
)
export const DEB_INSTALLER_SUPPORT_OS = (
  /^(linux)?\s?(Ubuntu|Debian|Mint|elementaryDeepin|Raspbian|Zorin|Pop!_OS|MX|Kali|Bodhi|Peppermint|antiX|SparkyLinux|Raspberry\s?Pi|BunsenLabs|Netrunner|QtBuntu|Siduction)\s?(Linux|\s?OS)?$/
)
export const RPM_INSTALLER_SUPPORT_OS = (
    /^(linux)?\s?(RedHat|CentOS|Fedora|SUSE|Mageia|PCLinuxOS|Rosa|AlmaLinux|Rocky|Scientific|ClearOS)$/
)

// for "x64"
export const X64_ARCH = 
  /^(x64|amd64|x86(-|_)64)$/i
// For "arm64"
export const ARM64_ARCH =
  /^(arm64|AArch64|ARMv\d+)$/i
// For "ia32"
export const IA32_ARCH = 
  /^(ia32|IA(-|_)32|i686|x86|x86\s(L|l)egacy|x86(-|_)32)$/i
// For "armv7l"
export const ARMV7L_ARCH = 
  /^(armv7l|ARMv[a-zA-Z-\d]*)$/i
