"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";

import Footer from "@/components/Footer";

import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative dark:bg-red-200 bg-white dark:bg-grid-white/[0.03] bg-grid-orange-100/[0.2] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
       
        <RecentProjects />
    
        <Experience />
    
        <Footer />
      </div>
    </main>
  );
};

export default Home;
