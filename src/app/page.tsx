import { Header } from "@/sections/Header"
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
    </div>
  );
}
