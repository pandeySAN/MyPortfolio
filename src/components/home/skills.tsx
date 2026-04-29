'use client';

import { MouseEvent } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Code2,
  Server,
  Database,
  Cloud,
  BrainCircuit
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    icon: <Code2 className="w-6 h-6 text-accent" />,
    skills: ['Python', 'JavaScript (ES2022+)', 'TypeScript', 'C++', 'SQL'],
  },
  {
    category: 'Backend & Systems',
    icon: <Server className="w-6 h-6 text-accent" />,
    skills: ['FastAPI', 'Django REST', 'Node.js', 'Express.js', 'REST/GraphQL', 'Microservices', 'System Design', 'Event-Driven Arch'],
  },
  {
    category: 'AI & ML',
    icon: <BrainCircuit className="w-6 h-6 text-accent" />,
    skills: ['LangGraph', 'RAG', 'Pinecone', 'XGBoost', 'Scikit-learn', 'LLM Eval', 'TF-IDF'],
  },
  {
    category: 'Databases',
    icon: <Database className="w-6 h-6 text-accent" />,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Query Optimization', 'B-tree Indexing'],
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6 text-accent" />,
    skills: ['AWS (EC2/ECS/S3/RDS/Lambda)', 'Docker', 'Kubernetes', 'CI/CD (GitHub Actions)', 'Nginx', 'Gunicorn'],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const }
  }
};

function SkillCard({ group }: { group: any }) {
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
        style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}
        className="h-full flex flex-col bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-colors duration-300 shadow-lg hover:shadow-accent/5"
      >
        <CardHeader className="flex flex-row items-center gap-4 pb-4" style={{ transform: "translateZ(20px)" }}>
          <div className="p-2.5 bg-accent/10 rounded-lg shadow-inner">
            {group.icon}
          </div>
          <CardTitle className="text-xl font-semibold text-foreground font-headline m-0">
            {group.category}
          </CardTitle>
        </CardHeader>
        <CardContent style={{ transform: "translateZ(15px)" }} className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill: string) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-muted/50 text-foreground/80 hover:bg-muted/80 transition-colors px-3 py-1 font-medium shadow-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-foreground">
            Technical Arsenal
          </h2>
          <p className="max-w-2xl text-muted-foreground text-lg">
            Core technologies and tools I leverage to build scalable systems and intelligent applications.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((group) => (
            <motion.div key={group.category} variants={cardVariants} className="h-full">
              <SkillCard group={group} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
