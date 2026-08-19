'use client';

import { useState, MouseEvent } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Github, ExternalLink, Code2, BrainCircuit, Terminal } from 'lucide-react';

type Category = 'All' | 'AI' | 'Systems' | 'Web';

const projectsData = [
  {
    title: "Farmer's Friend",
    description: 'Bilingual Multi-Agent Crop Advisory Platform',
    icon: BrainCircuit,
    category: 'AI',
    tags: ['FastAPI', 'LangGraph', 'Pinecone', 'Docker', 'JWT'],
    achievements: [
      'Designed a 5-agent LangGraph orchestration system (crop, market, memory, resource, weather + StateGraph orchestrator) for bilingual (Hindi + English) crop advisory.',
      'Routed farmer queries to the appropriate specialist agent based on intent, with a dedicated memory agent persisting per-farmer interaction history for context-aware follow-up recommendations.',
      'Built a JWT-authenticated FastAPI backend with Pinecone vector search over farmer crop history; containerized with Docker Compose.'
    ],
    githubUrl: 'https://github.com/pandeySAN',
  },
  {
    title: 'PyCodeR',
    description: 'Static Security Analyzer',
    icon: Terminal,
    category: 'Systems',
    tags: ['Python', 'AST', 'Data-Flow Analysis'],
    achievements: [
      'Built a static security analyzer combining AST/CFG construction with taint-based data-flow analysis to detect SQL injection, hardcoded secrets, and command injection.',
      'Designed a pluggable rule-engine architecture allowing new vulnerability detectors to be registered without modifying the core analysis pipeline.',
      'Added a result-caching layer for incremental re-analysis, cutting repeat-run latency on unchanged files to milliseconds.'
    ],
    githubUrl: 'https://github.com/pandeySAN',
  },
  {
    title: 'AI Interview Simulator',
    description: 'Voice-Based Mock Interview Platform',
    icon: Code2,
    category: 'Web',
    tags: ['Next.js', 'TypeScript', 'Vapi AI', 'Gemini', 'Firebase'],
    achievements: [
      'Built a voice-based mock interview platform using the Vapi AI SDK for real-time speech transcription and call-state management.',
      'Integrated Google Gemini to dynamically generate role/tech-stack-specific interview questions, persisted via Firestore.',
      'Built type-safe forms with React Hook Form + Zod on a Next.js 15 (App Router) / React 19 stack with shadcn/ui.'
    ],
    liveUrl: "https://ai-interview-simulator-green.vercel.app",
    githubUrl: 'https://github.com/pandeySAN/AI-Interview-Simulator.git',
  }
];

const categories: Category[] = ['All', 'AI', 'Systems', 'Web'];

// 3D Tilt Card Component
function ProjectCard({ project }: { project: any }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="h-full w-full [perspective:1000px]"
    >
      <Card 
        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
        className="flex flex-col h-full overflow-hidden group transition-all duration-500 hover:border-accent/40 bg-card/40 backdrop-blur-sm border-border shadow-sm hover:shadow-xl hover:shadow-accent/5"
      >
        <CardHeader className="p-6 pb-4 flex flex-row items-start justify-between" style={{ transform: "translateZ(30px)" }}>
          <div className="space-y-1.5">
            <CardTitle className="font-headline text-xl font-semibold flex items-center gap-2 text-foreground/90">
              <project.icon className="w-5 h-5 text-accent/80" />
              {project.title}
            </CardTitle>
            <p className="text-muted-foreground/90 text-sm">{project.description}</p>
          </div>
        </CardHeader>

        <CardContent className="p-6 pt-0 flex-grow space-y-4" style={{ transform: "translateZ(20px)" }}>
          <ul className="space-y-2 text-sm text-muted-foreground/90">
            {project.achievements.map((achievement: string, i: number) => (
              <li key={i} className="flex items-start">
                <span className="mr-2 text-accent/80 mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="outline" className="px-2 py-0.5 text-xs bg-background/50 border-border/50 text-muted-foreground font-medium">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-4 border-t border-border/40 bg-muted/5" style={{ transform: "translateZ(30px)" }}>
          <div className="flex w-full gap-3">
            {project.githubUrl && (
              <Button variant="outline" size="sm" asChild className="flex-1 rounded-md border-border/60 hover:bg-accent/5 hover:text-accent hover:border-accent/30 transition-colors">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Source
                </Link>
              </Button>
            )}
            {project.liveUrl && (
              <Button size="sm" asChild className="flex-1 rounded-md bg-foreground/90 text-background hover:bg-foreground hover:scale-[1.02] transition-transform">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = projectsData.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 bg-muted/10 border-t border-border/40">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-headline text-foreground/90">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            A selection of my recent work in AI orchestration, distributed systems, and full-stack development.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-foreground/90 text-background shadow-md'
                  : 'bg-background/50 text-muted-foreground hover:bg-muted border border-border/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
