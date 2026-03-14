
"use client";

import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 md:py-32 border-t border-border mt-20">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-headline font-bold text-foreground">Let's Work Together</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          If you're interested in working together, building a website, or developing a custom system for your business, feel free to contact me.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:scale-105 transition-transform font-bold px-8 h-14"
            asChild
          >
            <a href="mailto:henrysantesteban@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Send me an email
            </a>
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-primary/20 text-foreground hover:bg-secondary/50 hover:scale-105 transition-transform font-bold px-8 h-14"
            asChild
          >
            <a href="https://wa.me/5493412542412" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Message me on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
