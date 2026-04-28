import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
            <Link href="https://linkedin.com/in/pandeysanc" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="hover:bg-accent/10 hover:text-accent transition-colors">
            <Link href="mailto:sancpan02@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
