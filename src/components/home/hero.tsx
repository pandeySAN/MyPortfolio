<<<<<<< HEAD
'use client';

import { Button } from '@/components/ui/button';
import { Download, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const HeroShape = dynamic(() => import('@/components/canvas/HeroShape'), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <HeroShape />
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mt-16 md:mt-0">
        <div className="flex flex-col items-start justify-center space-y-8 text-left max-w-4xl mx-auto md:mx-0 md:mr-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
          >
            <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            Open to Relocation & Roles
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight font-headline text-foreground/90">
              Software Engineer
              <span className="block text-accent/90 mt-2 font-medium">Backend & AI</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-lg leading-relaxed font-body">
              Building scalable backend systems and intelligent AI solutions. Focused on performance, reliability, and clean architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90 transition-all rounded-full h-12 px-8">
              <a href="#projects">
                View Projects
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-8 transition-all hover:bg-accent hover:text-white hover:border-accent">
              <a href="https://drive.google.com/file/d/1h4CEqrd2GUkBj-5WM_gM8wR6p-8MGLaI/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>
=======
import { Button } from '@/components/ui/button';
import { Download, Send } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 xl:grid-cols-1">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                Sanchit Pandey, Student
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
              I'm a passionate software developer with a focus on the MERN stack and machine learning. I enjoy building responsive web apps and smart solutions that solve real-world problems. Explore my projects below!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform transform hover:scale-105">
                <a href="https://drive.google.com/file/d/1yDURKmEYLD32RJR92dBjRP4WlCTMbWdc/view?usp=drive_link" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="transition-transform transform hover:scale-105">
                <a href="https://www.linkedin.com/in/pandeysanc" linkedin>
                  <Send className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
        </div>
      </div>
    </section>
  );
}
