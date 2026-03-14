
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    id: "project-aera",
    title: "Aera",
    description: "A web-based management platform designed for aviation operations. It helps organizations manage fleets, operations and documentation from a single dashboard.",
    category: "SaaS Platform",
    featured: true,
  },
  {
    id: "project-zonodev",
    title: "Zonodev",
    description: "Development studio focused on building websites and digital tools for companies, professionals and organizations.",
    category: "Web Development",
    featured: true,
  },
  {
    id: "project-automation",
    title: "Automation Tools",
    description: "A collection of automation scripts built with Google Apps Script to streamline workflows, generate reports and send automated emails.",
    category: "Automation",
    featured: true,
  },
  {
    id: "project-portfolio",
    title: "Personal Portfolio",
    description: "My personal developer portfolio built with React and TypeScript to showcase projects and technical skills.",
    category: "Frontend",
    featured: true,
  }
];

export function Projects() {
  const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

  return (
    <section id="projects" className="py-20 space-y-10">
      <h2 className="text-3xl font-headline font-bold text-foreground">Projects</h2>
      <Tabs defaultValue="featured" className="w-full">
        <TabsList className="bg-secondary/30 border border-border p-1 mb-8">
          <TabsTrigger value="featured" className="data-[state=active]:bg-card px-8">Featured</TabsTrigger>
          <TabsTrigger value="all" className="data-[state=active]:bg-card px-8">All Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="featured" className="mt-0">
          <ProjectGrid projects={PROJECTS.filter(p => p.featured)} getImage={getImage} />
        </TabsContent>
        <TabsContent value="all" className="mt-0">
          <ProjectGrid projects={PROJECTS} getImage={getImage} />
        </TabsContent>
      </Tabs>
    </section>
  );
}

function ProjectGrid({ projects, getImage }: { projects: typeof PROJECTS, getImage: (id: string) => any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => {
        const imgData = getImage(project.id);
        return (
          <Card key={project.id} className="bg-card border-none overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
            <div className="relative h-56 w-full overflow-hidden">
              {imgData && (
                <Image
                  src={imgData.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
            </div>
            <CardContent className="p-8 space-y-4">
              <Badge variant="secondary" className="bg-secondary/50 text-muted-foreground font-normal rounded-md px-3">
                {project.category}
              </Badge>
              <h3 className="text-2xl font-headline font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
