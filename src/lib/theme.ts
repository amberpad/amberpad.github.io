"use client"
export type Theme = 'light' | 'dark'

export interface ThemeModule {
  getTheme: () => Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  init: () => void;
}



const getSystemTheme = (): Theme => window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
const getStorageTheme = (): Theme | null => window.localStorage.getItem('data-theme') as Theme || null;
const setStorageTheme = (theme: Theme) => window.localStorage.setItem('data-theme', theme);

const setThemeClass = (theme: Theme) => {
  if (theme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    document.documentElement.classList.add('dark')
  }
}

const context = {} as ThemeModule

context.getTheme = (): Theme => {
  return getStorageTheme() || getSystemTheme()
}

context.setTheme = (theme: Theme) => {
  setStorageTheme(theme)
  setThemeClass(theme)
}

context.toggleTheme = () => {
  const current = context.getTheme()
  context.setTheme(current === 'dark' ? 'light' : 'dark')
}

export default context as ThemeModule