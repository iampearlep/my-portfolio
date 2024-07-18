"use client"
import { AboutHero } from '@/components/AboutHero';
import { ProjectLinks } from '@/components/ProjectLinks';

export default function Home() {

  return (
    <main className="md:h-[100vh] w-full flex justify-center items-center mx-auto">
      <div className="flex flex-col md:flex-row gap-y-10 relative px-6 py-10 md:py-0 md:px-0">
        <div className="w-full md:w-5/12 text-neutral-50 md:px-20 py-7">
        <AboutHero />
        </div>
    <div className="w-full md:w-7/12 md:px-20 ">
    <ProjectLinks />
    </div>
      </div>
    </main>
  );
}
