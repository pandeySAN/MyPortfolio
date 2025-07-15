import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Database, Rocket, Settings } from 'lucide-react';

const skillsData = [
  {
    category: 'Languages',
    icon: <Code className="w-8 h-8 text-accent" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: <Rocket className="w-8 h-8 text-accent" />,
    skills: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS'],
  },
  {
    category: 'Databases & ORMs',
    icon: <Database className="w-8 h-8 text-accent" />,
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Prisma', 'SQLAlchemy'],
  },
  {
    category: 'Tools & Platforms',
    icon: <Settings className="w-8 h-8 text-accent" />,
    skills: ['Docker', 'Git & GitHub', 'Vercel', 'AWS', 'Figma'],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-border/40 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Tech Stack</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of technologies I use to build robust and scalable applications.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillsData.map((group) => (
            <Card key={group.category} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-col items-center text-center gap-4">
                {group.icon}
                <CardTitle className="font-headline">{group.category}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-center gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
