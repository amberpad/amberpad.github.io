import HomeLayout from '@/layouts/HomeLayout'
import Hero from "./_components/Hero";
import Features from "@/app/_components/Features";
import { cn } from "@/lib/utils";

function Home() {

  return (
    <HomeLayout>
      <main className={cn(
        'flex flex-col justify-center items-center',
        'w-full'
      )}>
        <Hero />
        <Features />
      </main>
    </HomeLayout>
  );
}

export default Home