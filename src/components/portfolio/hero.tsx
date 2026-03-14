
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-illustration");

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-primary font-headline text-lg font-medium tracking-wide">Portfolio</h1>
        <h2 className="text-4xl md:text-6xl font-headline font-bold leading-tight">
          Hello, I'm <span className="text-foreground">Henry Santesteban</span>.
        </h2>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed max-w-lg">
          <p>
            I'm a systems engineering student and web developer focused on building modern, functional web applications.
          </p>
          <p>
            I work mainly with JavaScript, Python and modern frontend technologies. I enjoy creating tools, automation systems and websites that solve real problems for businesses and professionals.
          </p>
          <p>
            Recently I co-founded <span className="text-foreground font-medium">Zonodev</span>, a small development studio where we build websites and software solutions for companies.
          </p>
          <p>
            I'm also currently developing <span className="text-foreground font-medium">Aera</span>, a management platform designed for aviation operations.
          </p>
        </div>
        <Button 
          size="lg" 
          onClick={scrollToWork}
          className="bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300 font-semibold px-8"
        >
          View my work
        </Button>
      </div>
      <div className="hidden md:flex justify-center relative">
        <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full" />
        {heroImg && (
          <Image
            src={heroImg.imageUrl}
            alt={heroImg.description}
            width={600}
            height={400}
            className="relative z-10 opacity-90 drop-shadow-2xl grayscale"
            data-ai-hint={heroImg.imageHint}
          />
        )}
      </div>
    </section>
  );
}
