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
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } },
  };

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center pt-20 text-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" 
      />

      <Container>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div variants={item} className="relative mb-12 h-40 w-40 overflow-hidden rounded-full border-2 border-primary/20 p-1">
            <div className="h-full w-full overflow-hidden rounded-full grayscale hover:grayscale-0 transition-all duration-500">
              <Image
                src={profilePic}
                alt={profile.name}
                priority
                className="h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          </motion.div>

          <motion.h1 variants={item} className="text-balance text-6xl font-bold tracking-tighter leading-[1.1] md:text-8xl">
            {profile.title}
          </motion.h1>

          <motion.p variants={item} className="mt-8 text-balance text-xl opacity-80 max-w-2xl leading-relaxed">
            {profile.headline}
          </motion.p>

          <motion.div variants={item} className="mt-12 flex flex-wrap justify-center gap-4">
            <Button variant="primary" onClick={() => window.open(`mailto:${profile.contact.email}`)}>
              <Mail className="mr-2 h-4 w-4" />
              E-mail
            </Button>
            <Button variant="outline" onClick={() => window.open(profile.contact.linkedin, '_blank')}>
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" onClick={() => window.open(profile.contact.github, '_blank')}>
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
