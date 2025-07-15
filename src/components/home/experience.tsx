import { Briefcase } from 'lucide-react';

const experienceData = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    duration: '2020 - Present',
    description: 'Led the development of a scalable microservices architecture. Mentored junior engineers and improved code quality through CI/CD pipelines and automated testing.',
  },
  {
    role: 'Software Engineer',
    company: 'Innovate Co.',
    duration: '2018 - 2020',
    description: 'Developed and maintained client-facing web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software products.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Digital Start LLC',
    duration: '2016 - 2018',
    description: 'Assisted in building responsive websites and e-commerce solutions. Gained foundational experience in full-stack development and agile methodologies.',
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="border-t border-border/40 bg-muted/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Professional Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My career journey and key contributions in the tech industry.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" aria-hidden="true" />
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={exp.company} className="relative flex items-center group">
                <div className="absolute w-12 h-12 bg-accent rounded-full left-1/2 -translate-x-1/2 -translate-y-4 flex items-center justify-center border-4 border-muted/40 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className={`w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'text-right pr-8' : 'order-1 text-left pl-8'}`}>
                  <div className="p-4 bg-card rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-xl font-bold font-headline">{exp.role}</h3>
                    <p className="text-muted-foreground font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
