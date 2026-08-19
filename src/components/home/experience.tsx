'use client';

import { useState, useRef } from 'react';
import { Briefcase, Calendar, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const experienceData = [
  {
    role: 'Software Engineer (Promoted from Intern via PPO)',
    company: 'Chroma-Lab Technologies Pvt. Ltd.',
    location: 'Lucknow, India',
    duration: 'May 2026 – Present',
    summary: 'Sole engineer owning end-to-end development and deployment of a telehealth platform serving 100+ healthcare providers.',
    achievements: [
      'Sole engineer owning end-to-end development and deployment of a telehealth platform (3 Flutter apps + Django REST API) on AWS EC2, serving 100+ healthcare providers.',
      'Shipped 2 Android apps to Google Play Console, handling release signing, store listings, and content-rating approval.',
      'Diagnosed and fixed cascading native build failures (Gradle JVM heap exhaustion, R8/ProGuard over-stripping), restoring reliable CI builds.',
      'Built a Razorpay Route payment-splitting service (195 LOC) automating split transfers to provider accounts.',
      'Led a 300+ function code review of a partner codebase; findings were adopted into the engineering cleanup roadmap.'
    ],
    tech: ['Flutter', 'Django REST Framework', 'AWS EC2', 'Razorpay', 'CI/CD']
  },
  {
    role: 'Software Development Intern',
    company: 'Chroma-Lab Technologies Pvt. Ltd.',
    location: 'Lucknow, India',
    duration: 'Nov 2025 – May 2026',
    summary: 'Founding engineer building 3 Flutter apps and a Django REST API from scratch, following Agile practices.',
    achievements: [
      'Built 3 Flutter apps and a Django REST API from scratch as founding engineer, following Agile practices.',
      'Set up GitHub Actions CI/CD for automated build-and-deploy (SSH/rsync) on every push to main.',
      'Implemented a Celery + Redis background task pipeline for FCM push notifications and async processing.',
      'Added SQL indexes across 12+ high-traffic query paths and wrote unit/integration tests for core Django apps.'
    ],
    tech: ['Flutter', 'Django REST Framework', 'Celery', 'Redis', 'GitHub Actions']
  },
  {
    role: 'Summer Research Fellow, Open Source',
    company: 'IIT Bombay (FOSSEE)',
    location: 'Mumbai, India',
    duration: 'Aug 2025 – Oct 2025',
    summary: 'Led a cross-institutional team building a responsive, accessibility-focused Drupal 10 theme for the Mapathon initiative.',
    achievements: [
      'Led a cross-institutional team of 5+ contributors to build a responsive, accessibility-focused Drupal 10 theme for the Mapathon initiative, adopted across a few IIT portals.',
      'Automated the build and release pipeline, cutting deployment time by 60%.'
    ],
    tech: ['Drupal 10', 'PHP', 'JavaScript', 'CI/CD']
  }
];

function ExperienceCard({ exp, index }: { exp: typeof experienceData[0], index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["end end", "start center"]
  });
  
  const dotColor = useTransform(scrollYProgress, [0, 1], ["hsl(var(--border))", "hsl(var(--accent))"]);
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
