import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        {children}
        <Footer 
          className="mt-24"
        />
    </>
  )
}