import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce site with features like product search, shopping cart, and Stripe integration for payments.',
    image: 'https://placehold.co/600x400.png',
    hint: 'online store',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Real-time Chat App',
    description: 'A web application enabling users to chat in real-time, built with WebSockets for instant messaging.',
    image: 'https://placehold.co/600x400.png',
    hint: 'messaging app',
    tags: ['React', 'Node.js', 'Socket.IO', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management Tool',
    description: 'A Kanban-style task manager with drag-and-drop functionality to organize workflows and improve productivity.',
    image: 'https://placehold.co/600x400.png',
    hint: 'productivity tool',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
   {
    title: 'Portfolio Website',
    description: 'This very portfolio, designed to be a clean, modern, and interactive showcase of my work and skills.',
    image: 'https://placehold.co/600x400.png',
    hint: 'developer portfolio',
    tags: ['Next.js', 'Tailwind CSS', 'Shadcn/UI', 'Genkit'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Here are some of the projects I'm proud of. Each one demonstrates my passion for creating meaningful digital experiences.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden group transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <CardHeader>
                <div className="relative h-60 w-full overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={project.hint}
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2 font-headline">{project.title}</CardTitle>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex w-full justify-end gap-2">
                  <Button variant="outline" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
