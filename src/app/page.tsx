import HeroSection from '@/components/home/hero';
import SkillsSection from '@/components/home/skills';
import ProjectsSection from '@/components/home/projects';
import ExperienceSection from '@/components/home/experience';
import AchievementsSection from '@/components/home/achievements';
import ContactSection from '@/components/home/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
