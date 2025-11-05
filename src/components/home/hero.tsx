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
        </div>
      </div>
    </section>
  );
}
