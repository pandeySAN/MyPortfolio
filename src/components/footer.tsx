<<<<<<< HEAD
import { Github, Linkedin, Mail } from 'lucide-react';
=======
import { Github, Linkedin } from 'lucide-react';
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
<<<<<<< HEAD
    <footer className="border-t border-border/40 bg-background">
      <div className="container max-w-screen-xl mx-auto flex flex-col items-center justify-between gap-4 py-8 md:h-24 md:flex-row md:py-0 px-4 md:px-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left font-medium">
            © {currentYear} Sanchit Pandey. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
           <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
            <Link href="https://github.com/pandeySAN" target="_blank" rel="noopener noreferrer">
=======
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} Made with ❤️ by Sanchit Pandey
          </p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.github.com/pandeySAN" target="_blank" rel="noopener noreferrer">
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
<<<<<<< HEAD
          <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
            <Link href="https://linkedin.com/in/pandeysanc" target="_blank" rel="noopener noreferrer">
=======
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/pandeysanc" target="_blank" rel="noopener noreferrer">
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
<<<<<<< HEAD
          <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
            <Link href="mailto:sancpan02@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
=======
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
        </div>
      </div>
    </footer>
  );
}
