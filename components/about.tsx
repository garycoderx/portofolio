"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="text-lg leading-relaxed">
        Hi, I’m <strong>Gary Williams</strong> — a Full-Stack Developer based in Los Angeles with 8+ years of experience building modern, scalable web applications.
        I specialize in backend development using <strong>Python (Django)</strong> and <strong>PHP (Laravel)</strong>, and I’m also proficient with <strong>React</strong>, <strong>Vue</strong>,
        and mobile frameworks like <strong>React Native</strong> and <strong>Flutter</strong>.
      </p>

      <p className="text-lg leading-relaxed mt-4">
        I’m passionate about solving real-world problems through code, especially in emerging fields like <strong>AI</strong> and <strong>blockchain</strong>.
        I've collaborated with international teams such as <strong>TG Coders (Poland)</strong>, contributing to platforms like
        <a href="https://3dprintshelf.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
          3dprintshelf
        </a>
         &nbsp;and
        <a href="https://immobooking.pl/noclegi/strona-glowna/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
          Immo booking
        </a>.
      </p>

      <p className="text-lg leading-relaxed mt-4">
        Whether it's building robust APIs, integrating AI features, or deploying full-stack apps, I combine technical skill with business insight to deliver results.
      </p>

      <p className="text-lg italic mt-6">
        Let’s build something meaningful together.
      </p>

    </motion.section>
  );
}
