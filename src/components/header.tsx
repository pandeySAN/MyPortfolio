'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Menu, Code2, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
=======
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code2, Wand2 } from 'lucide-react';

const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
  { href: '/resume-rewriter', label: 'Resume AI Tool', icon: Wand2 },
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
];

export default function Header() {
  return (
<<<<<<< HEAD
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center px-4 md:px-8 mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-8 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-accent" />
            <span className="hidden font-bold sm:inline-block font-headline tracking-tight">
              Sanchit Pandey
=======
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block font-headline">
              Code Canvas
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
<<<<<<< HEAD
                className="transition-colors hover:text-foreground text-foreground/60"
=======
                className="transition-colors hover:text-foreground/80 text-foreground/60"
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
<<<<<<< HEAD
              <Button variant="ghost" size="icon" className="mr-2">
=======
              <Button variant="ghost" size="icon">
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
<<<<<<< HEAD
            <SheetContent side="left" className="pr-0">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Navigation links</SheetDescription>
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <Code2 className="h-6 w-6 text-accent" />
                <span className="font-bold font-headline tracking-tight">Sanchit Pandey</span>
=======
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6">
                <Code2 className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline">MyPortfolio</span>
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
              </Link>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
<<<<<<< HEAD
                    className="transition-colors hover:text-foreground text-foreground/80 flex items-center gap-2 text-lg font-medium"
                  >
=======
                    className="transition-colors hover:text-foreground/80 text-foreground/80 flex items-center gap-2"
                  >
                    {link.icon && <link.icon className="h-4 w-4" />}
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

<<<<<<< HEAD
        <div className="flex flex-1 items-center justify-end space-x-4">
          <ThemeToggle />
          <Button asChild className="bg-accent text-white hover:bg-accent/90 rounded-full px-6 font-medium shadow-sm transition-all hover:scale-105 active:scale-95 hidden sm:flex">
            <a href="https://drive.google.com/file/d/1h4CEqrd2GUkBj-5WM_gM8wR6p-8MGLaI/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-4 w-4" />
              Resume
            </a>
=======
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="https://drive.google.com/file/d/1yDURKmEYLD32RJR92dBjRP4WlCTMbWdc/view?usp=drive_link" download>Download CV</a>
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
          </Button>
        </div>
      </div>
    </header>
  );
}
