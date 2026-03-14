
"use client";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Terminal, 
  Atom, 
  FileCode, 
  Hash, 
  Palette, 
  GitBranch, 
  Framer, 
  Table, 
  Zap,
  Globe,
  Database,
  Languages
} from "lucide-react";

const SKILLS_DATA = {
  software: [
    { name: "JavaScript", icon: Code },
    { name: "Python", icon: Terminal },
    { name: "React", icon: Atom },
    { name: "TypeScript", icon: FileCode },
    { name: "HTML", icon: Hash },
    { name: "CSS", icon: Palette },
    { name: "Git", icon: GitBranch },
    { name: "Figma", icon: Framer },
    { name: "Google Sheets", icon: Table },
    { name: "Apps Script", icon: Zap },
  ],
  expertise: [
    { name: "Web Development", icon: Globe },
    { name: "Automation", icon: Zap },
    { name: "UI/UX Design", icon: Palette },
    { name: "Data Analysis", icon: Database },
  ],
  languages: [
    { name: "Spanish (Native)", icon: Languages },
    { name: "English (Technical)", icon: Languages },
  ]
};

export function Skills() {
  return (
    <section id="skills" className="py-20 space-y-10">
      <h2 className="text-3xl font-headline font-bold text-foreground">Skills</h2>
      <Tabs defaultValue="software" className="w-full">
        <TabsList className="bg-secondary/30 border border-border p-1 mb-8">
          <TabsTrigger value="software" className="data-[state=active]:bg-card px-8">Software</TabsTrigger>
          <TabsTrigger value="expertise" className="data-[state=active]:bg-card px-8">Expertise</TabsTrigger>
          <TabsTrigger value="languages" className="data-[state=active]:bg-card px-8">Language</TabsTrigger>
        </TabsList>

        {Object.entries(SKILLS_DATA).map(([key, skills]) => (
          <TabsContent key={key} value={key} className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <Card 
                    key={skill.name}
                    className="flex items-center gap-4 p-4 bg-card border-none hover:bg-secondary/50 transition-colors duration-200 group cursor-default"
                  >
                    <div className="p-2 rounded-md bg-secondary/50 group-hover:bg-primary/20 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                    </div>
                    <span className="font-medium text-sm text-foreground/90">{skill.name}</span>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
