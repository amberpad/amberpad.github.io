import { Button } from "@/ui/button";
import Image from "next/image";
import HomeFooter from "./_components/HomeFooter";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import { cn } from "@/lib/utils";

function Home() {
  
  return (
    <>
      <main className={cn(
        'flex flex-col justify-center items-center',
        'w-full'
      )}>
        <Hero />
        <Features />
      </main>
      <HomeFooter />
    </>
  );
}

export default Home