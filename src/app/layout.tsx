import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "./_components/Header";
import "@/assets/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      suppressHydrationWarning={true}
      lang="en"
    >
      <head>
        <script 
          // This code is placed here because is needed to run before the app renders
          dangerouslySetInnerHTML={{
            __html: `
              const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
              const getStorageTheme = () => window.localStorage.getItem('data-theme');
              document.documentElement.classList.add(getStorageTheme() || getSystemTheme());
            `
          }}
        />
      </head>
      <body 
        className={cn(
          "min-h-[100dvh] bg-background font-sans antialiased",
          'flex flex-col justify-start items-center',
          fontSans.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
