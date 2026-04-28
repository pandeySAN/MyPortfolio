'use client';

<<<<<<< HEAD
import { useState, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
=======
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960

const experienceData = [
  {
    role: 'Software Developer',
<<<<<<< HEAD
    company: 'Chroma-Lab Technologies',
    location: 'Lucknow, India',
    duration: 'Nov 2025 – Present',
    summary: 'Building high-performance backend systems and scalable cloud infrastructure.',
    achievements: [
      'Architected backend services managing large-scale data (250GB+) at 500+ req/sec.',
      'Reduced p99 API latency by 40% through composite indexing and layered Redis caching.',
      'Improved deployment cycles by 50% using automated CI/CD pipelines.'
    ],
    tech: ['Node.js', 'PostgreSQL', 'Redis', 'AWS', 'GitHub Actions']
  },
  {
    role: 'Summer Research Fellow',
    company: 'FOSSEE, IIT Bombay',
    location: 'Mumbai, India',
    duration: 'Aug 2025 – Oct 2025',
    summary: 'Developed open-source solutions for nationwide educational platforms.',
    achievements: [
      'Engineered an open-source platform theme adopted by major Indian institutes.',
      'Collaborated on robust Git workflows and code review processes for large-scale open-source projects.'
    ],
    tech: ['PHP', 'Drupal', 'JavaScript', 'Git']
  },
  {
    role: 'Software Engineering Intern',
    company: 'Trillion Skyline',
    location: 'Lucknow, India',
    duration: 'Jan 2025 – Mar 2025',
    summary: 'Developed full-stack features focusing on performance optimization and user engagement.',
    achievements: [
      'Built efficient microservices supporting 50K+ monthly active users.',
      'Improved database throughput by 35% via query optimization.',
      'Reduced frontend load times by 20% using lazy loading strategies.'
    ],
    tech: ['React.js', 'Node.js', 'MongoDB']
  }
];

function ExperienceCard({ exp, index }: { exp: typeof experienceData[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  
  // Track this specific card's position to light up the dot
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["end end", "start center"]
  });
  
  const dotColor = useTransform(scrollYProgress, [0, 1], ["var(--border)", "var(--accent)"]);
  const dotScale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);

  return (
    <div ref={cardRef} className="relative flex flex-col md:flex-row items-start md:items-center group">
      {/* Timeline Dot */}
      <motion.div 
        style={{ backgroundColor: dotColor, scale: dotScale }}
        className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-20 mt-6 md:mt-0 shadow-sm transition-colors duration-300"
      />

      {/* Content Container */}
      <div className={`w-full md:w-[calc(50%-2.5rem)] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-1 md:pl-12 md:text-left'}`}>
        <motion.div 
          layout
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-card/40 backdrop-blur-sm border border-border/50 rounded-xl p-6 transition-all duration-300 hover:border-accent/40 hover:bg-card/60 hover:shadow-md cursor-pointer overflow-hidden"
        >
          <motion.h3 layout="position" className="text-xl font-semibold font-headline text-foreground/90">
            {exp.role}
          </motion.h3>
          
          <motion.div layout="position" className={`flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 mb-3 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
            <span className="font-medium text-foreground/80 flex items-center">
              <Briefcase className="w-4 h-4 mr-1.5 opacity-70" />
              {exp.company}
            </span>
            <span className="flex items-center text-accent/90">
              <Calendar className="w-4 h-4 mr-1.5 opacity-70" />
              {exp.duration}
            </span>
          </motion.div>

          <motion.p layout="position" className="text-muted-foreground/90 text-sm leading-relaxed mb-2">
            {exp.summary}
          </motion.p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className={`mt-4 pt-4 border-t border-border/50 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                  <ul className="space-y-3 text-sm text-muted-foreground/90 mb-5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className={`flex items-start ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'flex-row text-left'}`}>
                        <span className={`text-accent/80 mt-1 ${index % 2 === 0 ? 'md:ml-2 md:mr-0 mr-2' : 'mr-2'}`}>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                    {exp.tech.map(tech => (
                      <Badge key={tech} variant="outline" className="bg-background/50 border-border/50 text-xs font-medium text-muted-foreground">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div layout="position" className={`mt-4 flex ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
            <span className="inline-flex items-center text-xs font-medium text-accent/80 hover:text-accent transition-colors">
              {isExpanded ? 'Show less' : 'View details'}
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="w-3 h-3 ml-1" />
              </motion.div>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-24 bg-muted/10 border-t border-border/40">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start space-y-4 mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-headline text-foreground/90">
            Professional Experience
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            A timeline of my journey building scalable systems and contributing to high-impact products.
          </p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Static Background Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-border/40 rounded-full" aria-hidden="true" />
          
          {/* Animated Fill Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-accent/60 rounded-full origin-top z-10 hidden md:block" 
            aria-hidden="true" 
          />
          
          <div className="space-y-16">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={exp.company} exp={exp} index={index} />
            ))}
          </div>
        </div>
=======
    company: 'Chromalab Technologies Pvt. Ltd.',
    duration: 'Nov 2025 – Present',
    description:
      '◦	Developing and deploying scalable web and mobile applications using Flutter and Django, leveraging AWS for cloud integration and GitHub for efficient version control in a client-driven, service-based environment.',
  },
  {
    role: 'Web Developer Intern',
    company: 'IIT Bombay',
    duration: 'May 2025 – July 2025',
    description:
      'Built a custom, production-ready Drupal theme using HTML, CSS, PHP, and Twig for the flagship IITB Hackathon site.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Trillion skyline International LLP',
    duration: 'Jan 2025 – March 2025',
    description:
      'Implemented 8+ core application features by developing over 15 RESTful API endpoints with Node.js and designing the corresponding MongoDB schemas to support new functionalities. High-fidelity UI mock-ups into responsive, pixel-perfect React.js components, which contributed to a 15% increase in user session duration and significantly enhanced the user experience.',
  },
  {
    role: 'AI Engineer Intern',
    company: 'IBM (Remote)',
    duration: 'July 2024 – Aug 2024',
    description:
      'Developed a chatbot with IBM Watsonx to provide real-time agricultural recommendations, reaching 200+ active users.',
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border/40 bg-muted/40 py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight font-headline">
              💼 Professional Experience
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-lg/relaxed">
              My internship journey and key contributions in real-world tech environments.
            </p>
          </div>
        </div>

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true" />
          <div className="space-y-16">
            {experienceData.map((exp, index) => (
              <motion.div key={exp.company} variants={cardVariants} className="relative flex items-center group">
                <div className="absolute w-12 h-12 bg-accent rounded-full left-1/2 -translate-x-1/2 -translate-y-4 flex items-center justify-center border-4 border-muted/40 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-accent-foreground transition-transform duration-300 group-hover:rotate-6" />
                </div>
                <div
                  className={`w-[calc(50%-2.5rem)] ${
                    index % 2 === 0 ? 'text-right pr-8' : 'order-1 text-left pl-8'
                  }`}
                >
                  <div className="p-6 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold font-headline">{exp.role}</h3>
                    <p className="text-muted-foreground font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                    <p className="text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
      </div>
    </section>
  );
}
