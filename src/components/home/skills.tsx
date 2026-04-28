'use client';

<<<<<<< HEAD
import { MouseEvent } from 'react';
=======
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
<<<<<<< HEAD
  Code2,
  Server,
  Database,
  Cloud,
  BrainCircuit
} from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
=======
  Code,
  Database,
  Rocket,
  Settings,
  Brain
} from 'lucide-react';
import { motion } from 'framer-motion';
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960

const skillsData = [
  {
    category: 'Languages',
<<<<<<< HEAD
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
=======
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
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
<<<<<<< HEAD
      staggerChildren: 0.1
=======
      staggerChildren: 0.15
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
    }
  }
};

const cardVariants = {
<<<<<<< HEAD
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
=======
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
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
<<<<<<< HEAD
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsData.map((group) => (
            <motion.div key={group.category} variants={cardVariants} className="h-full">
              <SkillCard group={group} />
=======
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
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
