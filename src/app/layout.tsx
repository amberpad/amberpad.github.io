import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes'
import { headers } from 'next/headers';
import { 
  Inter as FontSans,
  Libre_Baskerville as FontSerif,
} from "next/font/google";
import { cn } from "@/lib/utils";
//import Header from "./_components/Header";
import "@/assets/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
})

const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
  display: 'swap',
})


export const metadata: Metadata = {
  title: "Amberpad",
  description: "Simple, efficient, and smart. The note-taking app with a web chat aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html 
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48x48.png"/>
        <link rel="manifest" href="/favicons/manifest.webmanifest"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="theme-color" content="#fff"/>
        <meta name="application-name" content="Amberpad"/>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="167x167" href="/favicons/apple-touch-icon-167x167.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png"/>
        <link rel="apple-touch-icon" sizes="1024x1024" href="/favicons/apple-touch-icon-1024x1024.png"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
        <meta name="apple-mobile-web-app-title" content="Amberpad"/>
        <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-640x1136.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-1136x640.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-750x1334.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-1334x750.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1125x2436.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2436x1125.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1170x2532.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2532x1170.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1179x2556.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2556x1179.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-828x1792.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-1792x828.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1242x2688.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2688x1242.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1242x2208.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2208x1242.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1284x2778.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2778x1284.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1290x2796.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2796x1290.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1488x2266.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2266x1488.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1536x2048.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2048x1536.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1620x2160.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2160x1620.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 820px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1640x2160.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 820px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2160x1640.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1668x2388.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2388x1668.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-1668x2224.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2224x1668.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" href="/favicons/apple-touch-startup-image-2048x2732.png"/>
        <link rel="apple-touch-startup-image" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" href="/favicons/apple-touch-startup-image-2732x2048.png"/>
        <meta name="msapplication-TileColor" content="#fff"/>
        <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png"/>
        <meta name="msapplication-config" content="/favicons/browserconfig.xml"/>
        <link rel="yandex-tableau-widget" href="/favicons/yandex-browser-manifest.json"></link>
      </head>
      <body 
        className={cn(
          'min-h-[100dvh]',
          'font-sans antialiased',
          'flex flex-col justify-start items-center',
          'overflow-x-hidden',
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
