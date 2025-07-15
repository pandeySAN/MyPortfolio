'use client';

import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    role: 'Web Developer Intern',
    company: 'IIT Bombay',
    duration: 'May 2025 – June 2025',
    description:
      'Built a custom, production-ready Drupal theme using HTML, CSS, PHP, and Twig for the flagship IITB Hackathon site.',
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
      </div>
    </section>
  );
}
