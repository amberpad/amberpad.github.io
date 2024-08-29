import { Button } from "@/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import { cn } from "@/lib/utils";

// p-24
export default function Home() {
  return (
    <main className={cn(
      'flex flex-col gap-16 justify-center items-center',
      'w-full'
    )}>
      <Hero />
      <Features />
    </main>
  );
}
