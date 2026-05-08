"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import profilePic from "@/assets/jonatas_img_profile.webp";

interface HeroProps {
  profile: any;
}

export function Hero({ profile }: HeroProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } },
  };

  return (
    <section className="relative flex min-h-[85vh] flex-col items-center justify-center pt-32 text-center">
      {/* Subtle architectural background detail */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,oklch(0.95_0.02_250/_0.4),transparent_60%)]" />
      
      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div variants={item} className="mb-10 group relative">
            {/* Intensified blue aura on hover */}
            <div className="absolute -inset-10 rounded-full bg-primary/0 blur-[60px] transition-all duration-1000 group-hover:bg-primary/40 group-hover:scale-125" />
            <div className="absolute -inset-4 rounded-full border border-primary/20 transition-all duration-700 group-hover:rotate-180 group-hover:border-primary/50" />
            <div className="relative h-32 w-32 overflow-hidden rounded-full border border-border bg-background p-1 shadow-lg transition-transform duration-700 group-hover:scale-110">
              <div className="h-full w-full overflow-hidden rounded-full grayscale transition-all duration-700 hover:grayscale-0">
                <Image
                  src={profilePic}
                  alt={profile.name}
                  priority
                  className="h-full w-full object-cover"
                  placeholder="blur"
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="mb-4 inline-flex items-center gap-2">
            <span className="h-[1px] w-8 bg-primary/40" />
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary/80">
              {profile.name}
            </span>
            <span className="h-[1px] w-8 bg-primary/40" />
          </motion.div>

          <motion.h1 
            variants={item} 
            className="text-balance text-5xl font-bold tracking-tight leading-[1.1] md:text-7xl lg:text-8xl text-foreground"
          >
            {profile.title}
          </motion.h1>

          <motion.p 
            variants={item} 
            className="mt-10 text-balance text-lg opacity-60 max-w-xl leading-relaxed font-light"
          >
            {profile.headline}
          </motion.p>

          <motion.div variants={item} className="mt-14 flex flex-wrap justify-center gap-8">
            <Button 
              variant="ghost" 
              className="group relative h-auto p-0 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-transparent"
              onClick={() => window.open(`mailto:${profile.contact.email}`)}
            >
              <span className="flex items-center gap-2 py-2">
                <Mail className="h-3 w-3 text-primary" /> E-mail
              </span>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </Button>
            <Button 
              variant="ghost" 
              className="group relative h-auto p-0 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-transparent"
              onClick={() => window.open(profile.contact.linkedin, '_blank')}
            >
              <span className="flex items-center gap-2 py-2">
                <Linkedin className="h-3 w-3 text-primary" /> LinkedIn
              </span>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </Button>
            <Button 
              variant="ghost" 
              className="group relative h-auto p-0 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-transparent"
              onClick={() => window.open(profile.contact.github, '_blank')}
            >
              <span className="flex items-center gap-2 py-2">
                <Github className="h-3 w-3 text-primary" /> GitHub
              </span>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
