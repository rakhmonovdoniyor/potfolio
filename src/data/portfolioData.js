import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import ApiRoundedIcon from "@mui/icons-material/ApiRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import PsychologyRoundedIcon from "@mui/icons-material/PsychologyRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
  SiCss,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import campingDashboardImage from "../assets/projects/photo_2026-03-16_14-50-51.png";
import crmImage from "../assets/projects/imagecrm.png";
import campImage from "../assets/projects/imagecamp.png";
import boxcarImage from "../assets/projects/boxcar.png";

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "Full Stack Web Developer",
  title: "Modern React interfaces that feel polished, fast, and ready for real users.",
  description:
    "Full Stack Web Developer specializing in JavaScript technologies including React, Next.js, Node.js and MongoDB. Experienced in building responsive web applications and REST APIs.",
  points: [
    "Builds responsive web applications with React and Next.js",
    "Creates REST APIs with Node.js, Express, MongoDB and Mongoose",
    "Open to frontend and full stack opportunities",
  ],
  focusLabel: "Current focus",
  focusValue: "React, Next.js, Node.js, MongoDB",
  availability: "Samarqand, Uzbekistan - Open to work",
  secondaryCtaLabel: "Download Resume",
  secondaryCtaHref: "/Doniyor_Rakhmonov_Modern_Linked_CV.pdf",
};

export const stats = [
  { value: "Full-Stack Development", label: "JavaScript (React, Node.js)" },
  { value: "REST API Development", label: "Node.js, Express, MongoDB" },
  { value: "Languages", label: "Uzbek, Korean, English" },
];

export const aboutContent = {
  title: "JavaScript-focused full stack developer with practical product skills.",
  description:
    "The portfolio now reflects real CV information: full stack direction, production-oriented tools, and actual project links pulled from your resume.",
  storyTitle: "Full stack web developer specializing in responsive apps and clean APIs.",
  storyParagraphs: [
    "I build with modern JavaScript tools across both frontend and backend. My core stack includes React, Next.js, Node.js, Express, MongoDB and REST API development.",
    "My current goal is to present myself as a strong junior full stack developer with real projects, clean implementation, and a portfolio that is easy for companies to review.",
  ],
  highlights: [
    "Samarqand, Uzbekistan",
    "BeCoder - Full Stack Web Development (2024 - 2025)",
    "Languages: Uzbek, Korean, English",
  ],
};

export const focusAreas = [
  {
    title: "Design-aware development",
    description:
      "I care about hierarchy, spacing, color balance, and the small details that make interfaces feel professional.",
    icon: AutoAwesomeRoundedIcon,
  },
  {
    title: "Modern frontend build",
    description:
      "My work is centered around React, reusable sections, and layouts that scale cleanly from mobile to desktop.",
    icon: CodeRoundedIcon,
  },
  {
    title: "Responsive by default",
    description:
      "I build with phones, tablets, and larger screens in mind so the experience stays sharp everywhere.",
    icon: DevicesRoundedIcon,
  },
];

export const skillsContent = {
  title: "Balanced between frontend polish, backend logic, and real project delivery.",
  description:
    "These are the technologies and capabilities listed in your CV and reflected in the portfolio content.",
};

export const skillGroups = [
  {
    title: "Frontend",
    description: "Core UI technologies from the CV.",
    items: [
      {
        label: "JavaScript (ES6+)",
        meta: "Language",
        icon: SiJavascript,
        color: "#f7df1e",
        surface: "rgba(247, 223, 30, 0.18)",
      },
      {
        label: "TypeScript",
        meta: "Typed JavaScript",
        icon: SiTypescript,
        color: "#3178c6",
        surface: "rgba(49, 120, 198, 0.16)",
      },
      {
        label: "React",
        meta: "UI Library",
        icon: SiReact,
        color: "#61dafb",
        surface: "rgba(97, 218, 251, 0.18)",
      },
      {
        label: "Next.js",
        meta: "Framework",
        icon: SiNextdotjs,
        color: "#111827",
        surface: "rgba(17, 24, 39, 0.12)",
      },
      {
        label: "HTML5",
        meta: "Markup",
        icon: SiHtml5,
        color: "#e34f26",
        surface: "rgba(227, 79, 38, 0.14)",
      },
      {
        label: "CSS3",
        meta: "Styling",
        icon: SiCss,
        color: "#1572b6",
        surface: "rgba(21, 114, 182, 0.14)",
      },
    ],
  },
  {
    title: "Backend",
    description: "Server-side and data-layer technologies used in projects.",
    items: [
      {
        label: "Node.js",
        meta: "Runtime",
        icon: SiNodedotjs,
        color: "#5fa04e",
        surface: "rgba(95, 160, 78, 0.15)",
      },
      {
        label: "Express",
        meta: "Backend Framework",
        icon: SiExpress,
        color: "#222222",
        surface: "rgba(34, 34, 34, 0.1)",
      },
      {
        label: "MongoDB",
        meta: "Database",
        icon: SiMongodb,
        color: "#47a248",
        surface: "rgba(71, 162, 72, 0.14)",
      },
      {
        label: "Mongoose",
        meta: "ODM",
        icon: SiMongoose,
        color: "#880000",
        surface: "rgba(136, 0, 0, 0.12)",
      },
      {
        label: "REST API Development",
        meta: "Service Layer",
        icon: ApiRoundedIcon,
        color: "#0f766e",
        surface: "rgba(15, 118, 110, 0.14)",
      },
      {
        label: "Authentication",
        meta: "Access Control",
        icon: AdminPanelSettingsRoundedIcon,
        color: "#8b5cf6",
        surface: "rgba(139, 92, 246, 0.14)",
      },
    ],
  },
  {
    title: "Workflow",
    description: "Supporting tools and working habits.",
    items: [
      {
        label: "Git",
        meta: "Version Control",
        icon: SiGit,
        color: "#f05032",
        surface: "rgba(240, 80, 50, 0.14)",
      },
      {
        label: "GitHub",
        meta: "Code Hosting",
        icon: SiGithub,
        color: "#111827",
        surface: "rgba(17, 24, 39, 0.1)",
      },
      {
        label: "Responsive UI",
        meta: "Cross-device Layout",
        icon: DevicesRoundedIcon,
        color: "#0f4c81",
        surface: "rgba(15, 76, 129, 0.14)",
      },
      {
        label: "Deployment",
        meta: "Shipping Projects",
        icon: RocketLaunchRoundedIcon,
        color: "#ea580c",
        surface: "rgba(234, 88, 12, 0.14)",
      },
      {
        label: "Refactoring",
        meta: "Code Cleanup",
        icon: AutoFixHighRoundedIcon,
        color: "#7c3aed",
        surface: "rgba(124, 58, 237, 0.14)",
      },
      {
        label: "Problem Solving",
        meta: "Engineering Thinking",
        icon: PsychologyRoundedIcon,
        color: "#2563eb",
        surface: "rgba(37, 99, 235, 0.14)",
      },
    ],
  },
];

export const projectsContent = {
  title: "Selected work across marketplace, dashboard, and full stack flows.",
  description:
    "These projects highlight polished React interfaces, product-style browsing flows, dashboard structure, and full stack implementation.",
};

export const projects = [
  {
    title: "BoxCar",
    eyebrow: "Car marketplace",
    description:
      "React car marketplace with inventory browsing, vehicle detail pages, shop flow, authentication screens, and dashboard sections.",
    image: boxcarImage,
    href: "https://boxcar-react-typescript.netlify.app/",
    cta: "Open project",
    sourceHref: "https://github.com/rakhmonovdoniyor/boxcar-react",
    sourceCta: "Source code",
    tags: ["React", "TypeScript", "React Router"],
  },
  {
    title: "CRM Dashboard",
    eyebrow: "Full stack CRM",
    description:
      "Full stack CRM system with authentication login, Node.js and Express REST API backend, MongoDB storage, and a React frontend interface.",
    image: crmImage,
    href: "https://crm-edu-front.netlify.app/",
    cta: "Visit live demo",
    sourceHref: "https://github.com/rakhmonovdoniyor/crm",
    sourceCta: "Source code",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Camping Cars",
    eyebrow: "Visual landing page",
    description:
      "Full stack camping car listing platform with React frontend, Express backend API, and MongoDB database integration.",
    image: campImage,
    href: "https://camping-cars.netlify.app/",
    cta: "Open project",
    sourceHref: "https://github.com/rakhmonovdoniyor/camp-car-new",
    sourceCta: "Source code",
    tags: ["React", "Express", "MongoDB"],
  },
  {
    title: "Camping Car Dashboard",
    eyebrow: "Admin dashboard",
    description:
      "A separate admin dashboard flow for the camping car project, focused on management screens, control panels, and dashboard structure.",
    image: campingDashboardImage,
    href: "https://campingcardashboard.netlify.app/",
    cta: "Open dashboard",
    sourceHref: "https://github.com/rakhmonovdoniyor/admin1",
    sourceCta: "Source code",
    tags: ["Admin Panel", "Dashboard", "Management UI"],
  },
];

export const strengthsContent = {
  title: "The kind of full stack value this portfolio now communicates.",
  description:
    "Updated from the CV to reflect technical breadth, practical project work, and a more professional presentation.",
};

export const strengths = [
  {
    number: "01",
    title: "Clear communication",
    description:
      "I aim to make interfaces easy to understand fast, with sections that are simple to scan and trust.",
  },
  {
    number: "02",
    title: "Fast iteration",
    description:
      "I can quickly turn rough ideas into presentable screens and improve them through focused refinements.",
  },
  {
    number: "03",
    title: "Clean presentation",
    description:
      "For portfolio and product work alike, I care about how code quality and visual quality support each other.",
  },
];

export const contactContent = {
  title: "Need a full stack developer with modern JavaScript skills?",
  description:
    "The contact section now reflects the real details from your CV, including email, phone, GitHub, location, and a downloadable resume.",
};

export const contactLinks = [
  {
    label: "Email",
    value: "raxmonov2019yil@gmail.com",
    href: "mailto:raxmonov2019yil@gmail.com",
    icon: AlternateEmailRoundedIcon,
  },
  {
    label: "Phone",
    value: "+998 99 172 07 42",
    href: "tel:+998991720742",
    icon: CallRoundedIcon,
  },
  {
    label: "GitHub",
    value: "github.com/rakhmonovdoniyor",
    href: "https://github.com/rakhmonovdoniyor",
    icon: GitHubIcon,
  },
  {
    label: "Resume",
    value: "Download CV",
    href: "/Doniyor_Rakhmonov_Modern_Linked_CV.pdf",
    icon: DescriptionRoundedIcon,
  },
];

export const contactMeta = [
  {
    label: "Location",
    value: "Samarqand, Uzbekistan",
    href: "#about",
    icon: PlaceRoundedIcon,
  },
  {
    label: "Telegram",
    value: "@rahmonov_doniyor",
    href: "https://t.me/rahmonov_doniyor",
    icon: TelegramIcon,
  },
];
