
import { Hero } from "@/components/portfolio/hero";
import { Skills } from "@/components/portfolio/skills";
import { Services } from "@/components/portfolio/services";
import { Projects } from "@/components/portfolio/projects";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary selection:text-primary-foreground">
      <main className="max-w-[900px] mx-auto px-6 lg:px-0">
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="max-w-[900px] mx-auto px-6 py-12 border-t border-border flex justify-between items-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Henry Santesteban</p>
        <p>Built with React & TypeScript</p>
      </footer>
    </div>
  );
}
