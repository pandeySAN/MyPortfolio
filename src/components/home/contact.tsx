<<<<<<< HEAD
=======

>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
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
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
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
=======
import { Send, Mail, Phone, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  { icon: <Mail className="w-6 h-6 text-accent" />, text: 'sancpan02@gmail.com' },
  { icon: <Phone className="w-6 h-6 text-accent" />, text: '+91 9161727561' },
  { icon: <MapPin className="w-6 h-6 text-accent" />, text: 'Lucknow, India' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: 'Message Sent!',
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (error) {
      toast({
        title: 'Uh oh!',
        description: 'There was a problem sending your message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-border/40">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold tracking-tight font-headline"
          >
            📬 Get in Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-[900px] text-muted-foreground md:text-lg/relaxed"
          >
            Have a question, a project idea, or just want to say hi? My inbox is always open.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold font-headline">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  {info.icon}
                  <span className="text-lg text-muted-foreground">{info.text}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              Feel free to reach out through the form or directly via email. I'm looking forward to hearing from you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-lg shadow-lg border border-border/50">
              <div className="space-y-2">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-background/80"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-background/80"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background/80"
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
      </div>
    </section>
  );
}
