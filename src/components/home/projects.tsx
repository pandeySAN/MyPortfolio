'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'Interview.AI- Interview simulator Website',
    description:
      'A web application that simulates real interview scenarios using AI.',
    image: 'https://bloximages.chicago2.vip.townnews.com/thestar.com/content/tncms/assets/v3/editorial/a/33/a3373f12-6449-5b41-9a93-11ee9cfa06e2/66671a4a027ef.image.jpg?resize=750%2C500',
    hint: 'AI interview simulator',
    tags: ['Next.js', 'Typescript', 'Gemini', 'Firebase', 'Vapi AI'],
    liveUrl: "https://ai-interview-simulator-green.vercel.app",
    githubUrl: 'https://github.com/pandeySAN/AI-Interview-Simulator.git',
  },
  {
    title: 'Potato Disease Classification',
    description:
      'A deep learning-based web application to detect and classify potato leaf diseases using image input.',
    image: 'https://placehold.co/600x400?text=Potato+Disease+App',
    hint: 'plant disease detector',
    tags: ['Python', 'TensorFlow', 'Keras', 'Streamlit'],
    liveUrl: '#', // Add deployment link if available
    githubUrl: 'https://github.com/pandeySAN/potato-disease-classification',
  },
  {
    title: 'Breast Cancer Prediction',
    description:
      'A machine learning model that predicts breast cancer presence using medical data and classification algorithms.',
    image: 'https://placehold.co/600x400?text=Breast+Cancer+ML',
    hint: 'healthcare prediction model',
    tags: ['Python', 'scikit-learn', 'Pandas', 'Jupyter'],
    liveUrl: '#',
    githubUrl: 'https://github.com/pandeySAN/Breast-Cancer-prediction',
  },
  {
    title: 'Todo App',
    description:
      'A full-stack task management application with user authentication, CRUD operations, and responsive design.',
    image: 'https://placehold.co/600x400?text=Todo+App',
    hint: 'task manager',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveUrl: '#',
    githubUrl: 'https://github.com/pandeySAN/Todo_app',
  },
  {
    title: 'Walmart Sparkathon Recommender',
    description:
      'A recommendation system that provides product suggestions using NLP and cosine similarity on Walmart product data.',
    image: 'https://placehold.co/600x400?text=Walmart+Recommender',
    hint: 'product recommender',
    tags: ['Python', 'Flask', 'TF-IDF', 'Pandas'],
    liveUrl: '#',
    githubUrl: 'https://github.com/pandeySAN/walmart_sparkathon',
  },
];

// Animation for cards
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/40 border-t border-border/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-headline">
            🚀 Featured Projects
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg/relaxed">
            A showcase of some of my best work—each project highlights my skills, creativity, and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full"
            >
              <Card className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:scale-[1.015] backdrop-blur-md bg-white/5 border border-border">
                <CardHeader className="relative h-60 w-full overflow-hidden rounded-t-lg p-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={project.hint}
                  />
                </CardHeader>

                <CardContent className="flex-grow p-6 space-y-3">
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="px-2 py-1 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 mt-auto">
                  <div className="flex w-full justify-end gap-2">
                    <Button variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
