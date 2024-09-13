import Header from "@/components/Header";
import HomeFooter from '@/components/HomeFooter'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        {children}
        <HomeFooter />
    </>
  )
}