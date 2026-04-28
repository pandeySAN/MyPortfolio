import HeroSection from '@/components/home/hero';
import SkillsSection from '@/components/home/skills';
import ProjectsSection from '@/components/home/projects';
import ExperienceSection from '@/components/home/experience';
<<<<<<< HEAD
import AchievementsSection from '@/components/home/achievements';
=======
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
import ContactSection from '@/components/home/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <HeroSection />
<<<<<<< HEAD
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
=======
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
>>>>>>> e8c70d90289f57a10c6a5cdf5c181af3f735b960
      <ContactSection />
    </div>
  );
}
