import immobookingImg from "@/public/immobooking.png";
import testyImg from "@/public/testy.png";
import printImg from "@/public/3dprint.png";

import { CgWorkAlt } from "react-icons/cg";
import { FaAws, FaReact, FaRaspberryPi } from "react-icons/fa";
import {
  RiCss3Line,
  RiDatabase2Line,
  RiGatsbyLine,
  RiGitBranchLine,
  RiJavascriptLine,
  RiNextjsLine,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import {
  TbBrandFramerMotion,
  TbBrandGraphql,
  TbBrandMongodb,
  TbBrandNodejs,
  TbBrandPython,
  TbBrandDjango,
  TbPhotoAi,
  TbBrandReactNative,
  TbBrandRedux,
  TbBrandSocketIo,
  TbBrandTypescript, TbCoinBitcoin, TbFileTextAi, TbBrandTorchain, TbBrandFlutter, TbBrandGolang, TbBrandDrupal,
} from "react-icons/tb";

import React from "react";

const experienceInYears = new Date().getFullYear() - 2017;

export const profile = {
  avatar: "https://avatars.githubusercontent.com/u/224489801?u=533a33f69dad228d2df2f4b1a5f3780f0ab2fce7&v=4",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  name: "Gary Williams",
  title: "Full Stack Developer",
  experience: `${experienceInYears} years`,
  likes: "building web and mobile apps",
  resumeLink: `https://www.uvic.ca/career-services/_assets/docs/resume-computer-engineering.pdf`,
  linkedInLink: "https://www.linkedin.com/in/ktanpatel",
  githubLink: "https://github.com/KtanPatel",
} as const;

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "Greenleaf Solutions",
    description:
      "Built Drupal 8 websites for clients in education and nonprofit sectors",
    icon: React.createElement(CgWorkAlt),
    date: "2015 – 2017",
  },
  {
    title: "Full Stack Developer",
    location: "TG Coders",
    description:
      "Built and maintained multiple web platforms using Django and React for European clients",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - present",
  },

  {
    title: "Lead Drupal Developer",
    location: "CivicTech",
    description:
      "Led development of Drupal 9/10 multisite platform for a state government agency, improving accessibility and reducing maintenance costs by 40%",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Immobooking",
    description:
      "Real estate booking and listing app.",
    tags: ["Django", "PostgreSQL", "Bootstrap", "Facebook API"],
    imageUrl: immobookingImg,
    url: "https://immobooking.pl/",
  },
  {
    title: "3D Print Shelf",
    description:
      "E-commerce platform for 3D-printed products. ",
    tags: ["Django", "PostgreSQL", "Bootstrap", "Channel"],
    imageUrl: printImg,
    url: "https://3dprintshelf.com/search-engine/",
  },
  {
    title: "Testy Iusvitae",
    description:
      "Legal exam prep platform with dynamic questions. ",
    tags: ["Laravel", "Vue", "MySQL", "SocketIO", "PWA"],
    imageUrl: testyImg,
    url: "https://testy.iusvitae.pl/",
  },
] as const;

export const skillsData = [
  { name: "Python", icon: TbBrandPython },
  { name: "Django", icon: TbBrandDjango },
  { name: "Golang", icon: TbBrandGolang },
  { name: "Flask", icon: TbBrandPython },
  { name: "FastAPI", icon: TbBrandPython },
  { name: "PostgreSQL", icon: RiDatabase2Line },
  { name: "OpenAI", icon: TbFileTextAi },
  { name: "Ethereum", icon: TbCoinBitcoin },
  { name: "LangChain", icon: TbBrandTorchain },
  { name: "TypeScript", icon: TbBrandTypescript },
  { name: "React", icon: RiReactjsLine },
  { name: "Next.js", icon: RiNextjsLine },
  { name: "NodeJS", icon: RiNodejsLine },
  { name: "Electron.js", icon: TbBrandTypescript },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Flutter", icon: TbBrandFlutter },
  { name: "Git", icon: RiGitBranchLine },
  { name: "Drupal", icon: TbBrandDrupal },
  { name: "Redux", icon: TbBrandRedux },
  { name: "Gatsby", icon: RiGatsbyLine },
  { name: "GraphQL", icon: TbBrandGraphql },
  { name: "Express", icon: TbBrandNodejs },
  { name: "Socket IO", icon: TbBrandSocketIo },
  { name: "AWS", icon: FaAws },
  { name: "Raspberry Pi", icon: FaRaspberryPi },
  { name: "...and more", icon: React.Fragment },
] as const;
