import HeroSection from '@/components/home/hero';
import SkillsSection from '@/components/home/skills';
import ProjectsSection from '@/components/home/projects';
import ExperienceSection from '@/components/home/experience';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
    </div>
  );
}
