
"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-illustration");
  const [isArrowVisible, setIsArrowVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Initial delay to show arrow
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show if user hasn't scrolled yet
      if (window.scrollY === 0 && !hasScrolled) {
        setIsArrowVisible(true);
      }
    }, 4000);
    return () => clearTimeout(timer);
  }, [hasScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsArrowVisible(false);
        setHasScrolled(true);
      } else {
        // We only want to hide it when scrolled down.
        // Once scrolled down, we don't necessarily want it to re-appear,
        // but if they scroll exactly to 0 we can show it again.
        if (window.scrollY === 0) {
          setIsArrowVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-8 pb-20 md:pt-12 md:pb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
        <Image
          src="/IMG_2653.jpg"
          alt="Henry Santesteban"
          width={600}
          height={600}
          className="relative z-10 drop-shadow-2xl rounded-3xl object-cover aspect-square"
          priority
        />
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000 flex flex-col items-center gap-2 ${isArrowVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce opacity-80" />
      </div>
    </section>
  );
}
