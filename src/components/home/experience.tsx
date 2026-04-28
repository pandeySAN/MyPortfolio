'use client';

import { useState, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const experienceData = [
  {
    role: 'Software Developer',
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
      </div>
    </section>
  );
}
