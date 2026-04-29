'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, text: 'sancpan02@gmail.com', label: 'Email' },
  { icon: <Linkedin className="w-5 h-5" />, text: 'linkedin.com/in/pandeysanc', href: 'https://www.linkedin.com/in/pandeysanc', label: 'LinkedIn' },
  { icon: <Github className="w-5 h-5" />, text: 'github.com/pandeySAN', href: 'https://github.com/pandeySAN', label: 'GitHub' },
  { icon: <MapPin className="w-5 h-5" />, text: 'Lucknow, India', label: 'Location' },
];

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('sancpan02@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/10 border-t border-border/40">
      <div className="container px-4 md:px-8 max-w-screen-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center text-center space-y-6"
        >
          <div className="p-3 bg-accent/5 border border-accent/10 rounded-full mb-2">
            <Mail className="w-8 h-8 text-accent/80" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight font-headline text-foreground/90">
            Get in Touch
          </h2>
          <p className="max-w-[600px] text-muted-foreground/90 md:text-lg">
            I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="w-full max-w-md mt-8 space-y-4 bg-card/40 backdrop-blur-sm border border-border/50 p-6 rounded-2xl shadow-sm">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 rounded-xl hover:bg-muted/30 transition-colors group">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-background/80 rounded-lg shadow-sm border border-border/40 text-muted-foreground group-hover:text-foreground/90 transition-colors">
                    {info.icon}
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-muted-foreground/80">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-foreground/90 font-medium hover:text-accent transition-colors">
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-foreground/90 font-medium">{info.text}</span>
                    )}
                  </div>
                </div>
                {info.label === 'Email' && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={copyToClipboard}
                    className="h-8 w-8 text-muted-foreground hover:text-foreground/90 hover:bg-muted/50"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500/80" /> : <Copy className="w-4 h-4" />}
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button asChild size="lg" className="mt-8 rounded-full h-12 px-8 font-medium bg-foreground/90 hover:bg-foreground transition-all shadow-sm">
            <a href="mailto:sancpan02@gmail.com">Say Hello</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
