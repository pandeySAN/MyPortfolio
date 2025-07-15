'use client';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Code,
  Database,
  Rocket,
  Settings,
  Brain
} from 'lucide-react';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    icon: <Code className="w-8 h-8 text-accent transition-transform duration-300 group-hover:rotate-6" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Rocket className="w-8 h-8 text-accent transition-transform duration-300 group-hover:-translate-y-1" />,
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Flask', 'Tailwind CSS'],
  },
  {
    category: 'Databases & ORMs',
    icon: <Database className="w-8 h-8 text-accent transition-transform duration-300 group-hover:scale-110" />,
    skills: ['MongoDB', 'PostgreSQL', 'Firebase', 'SQLAlchemy'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Settings className="w-8 h-8 text-accent transition-transform duration-300 group-hover:rotate-180" />,
    skills: ['Docker', 'Git & GitHub', 'AWS', 'VS Code', 'Postman'],
  },
  {
    category: 'Machine Learning',
    icon: <Brain className="w-8 h-8 text-accent transition-transform duration-300 group-hover:rotate-6" />,
    skills: ['scikit-learn', 'TensorFlow', 'Keras', 'Pandas', 'NumPy', 'Matplotlib'],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-border/40 bg-muted/40 py-20"
      aria-label="Skills Section"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-headline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            🚀 My Tech Stack
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg/relaxed">
            A curated collection of tools and technologies I use to craft scalable, performant, and intelligent applications.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          {skillsData.map((group) => (
            <motion.div key={group.category} variants={cardVariants}>
              <Card className="group bg-white/5 border border-border backdrop-blur-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-accent/60">
                <CardHeader className="flex flex-col items-center text-center gap-4">
                  {group.icon}
                  <CardTitle className="text-lg font-semibold text-foreground font-headline">
                    {group.category}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap justify-center gap-2">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="transition-transform duration-200 hover:scale-105 cursor-default px-3 py-1 text-[0.85rem] font-medium shadow-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
