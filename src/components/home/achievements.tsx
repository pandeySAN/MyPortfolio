'use client';

import { Trophy, Code, Medal, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const achievements = [
  {
    title: 'LeetCode Knight',
    description: '1900+ Rating (Top 4% globally), 550+ problems solved',
    icon: <Trophy className="w-8 h-8 text-yellow-500/80" />,
    color: 'from-yellow-500/10 to-orange-500/5'
  },
  {
    title: 'IIT Bombay FOSSEE',
    description: 'Open-source contributor; deployed theme used nationwide',
    icon: <Code className="w-8 h-8 text-blue-500/80" />,
    color: 'from-blue-500/10 to-cyan-500/5'
  },
  {
    title: 'Top 5% on GitHub',
    description: 'Active contributor with consistent green squares',
    icon: <Star className="w-8 h-8 text-green-500/80" />,
    color: 'from-green-500/10 to-emerald-500/5'
  }
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-background">
      <div className="container px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col items-start space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-headline text-foreground/90">
            Achievements & Stats
          </h2>
          <p className="max-w-2xl text-muted-foreground md:text-lg">
            Competitive programming milestones and open-source contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-card/40 backdrop-blur-sm border-border/60 hover:border-accent/30 transition-all duration-300 overflow-hidden group relative shadow-sm hover:shadow-md">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <CardContent className="p-8 relative z-10 flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-background/80 rounded-full shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-headline mb-2 text-foreground/90">{item.title}</h3>
                    <p className="text-muted-foreground/90 font-medium text-sm">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-6 justify-center items-center opacity-90 hover:opacity-100 transition-opacity duration-300"
        >
          <img 
            src="https://github-readme-stats.vercel.app/api?username=pandeySAN&show_icons=true&theme=transparent&hide_border=true&title_color=6366f1&icon_color=6366f1&text_color=9ca3af" 
            alt="GitHub Stats" 
            className="w-full lg:w-1/2 max-w-md bg-card/20 backdrop-blur-sm rounded-xl border border-border/40 p-4"
          />
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=pandeySAN&layout=compact&theme=transparent&hide_border=true&title_color=6366f1&text_color=9ca3af" 
            alt="Top Languages" 
            className="w-full lg:w-1/2 max-w-md bg-card/20 backdrop-blur-sm rounded-xl border border-border/40 p-4"
          />
        </motion.div>
      </div>
    </section>
  );
}
