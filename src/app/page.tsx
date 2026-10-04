"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone, MapPin, Mail,
  ChevronDown, ExternalLink, Code2, Brain, BarChart3, Globe,
  GraduationCap, Briefcase, PenLine, Copy, Check, Menu, X,
  Coffee, Sparkles, Database, Cpu,
} from "lucide-react";

/* Brand icons (lucide ne remove kar diye — inline SVG) */
function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

/* ---------------------------------- data ---------------------------------- */

const ROLES = [
  "Full Stack Developer",
  "Data Scientist",
  "Machine Learning Engineer",
  "Founder — Shery Cafe",
];

const SKILLS = [
  { icon: Code2, name: "Python", level: 90, desc: "Scripting, automation, backends" },
  { icon: Brain, name: "Machine Learning", level: 85, desc: "Scikit-learn, TensorFlow" },
  { icon: Cpu, name: "Deep Learning", level: 80, desc: "Neural networks, NLP basics" },
  { icon: Database, name: "Data Analysis", level: 88, desc: "Pandas, NumPy, SQL" },
  { icon: BarChart3, name: "Power BI", level: 85, desc: "Dashboards & reporting" },
  { icon: Globe, name: "Full Stack Web", level: 90, desc: "Next.js, TypeScript, Prisma" },
];

const EDUCATION = [
  {
    period: "2025 — Present",
    title: "PGD in Data Science",
    place: "NED University of Engineering & Technology",
    desc: "Post Graduate Diploma — advanced machine learning, big data & analytics.",
    current: true,
  },
  {
    period: "2020 — 2024",
    title: "BS Software Engineering",
    place: "Sir Syed University of Engineering & Technology",
    desc: "Graduated with a focus on full stack development, databases & software design.",
    current: false,
  },
  {
    period: "2018 — 2020",
    title: "Intermediate — Pre-Engineering",
    place: "Iqra Huffaz Boys College",
    desc: "Mathematics, Physics & Chemistry foundation.",
    current: false,
  },
  {
    period: "2016 — 2018",
    title: "Matric — Bio Science",
    place: "Mama Baby Care School",
    desc: "Science group with biology.",
    current: false,
  },
];

const PROJECTS = [
  {
    title: "Shery Cafe — Website & Business Platform",
    tagline: "Full stack cafe & lounge platform — live in production",
    link: "https://shery-cafe.vercel.app",
    linkLabel: "Visit Live Site",
    badge: "Flagship Project",
    stack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Online menu with cart & WhatsApp ordering",
      "Table reservations & party bookings",
      "Live order tracking for customers",
      "Admin dashboard with sales analytics",
      "Spin & Win, loyalty rewards & gift cards",
      "Happy Hours with time-locked promo codes",
    ],
  },
  {
    title: "Face Mask Detection — AI Web App",
    tagline: "Deep learning CNN model with 98.99% accuracy — live in production",
    link: "https://face-mask-detection-iumysnykxrf6auqnvn2xxt.streamlit.app/",
    linkLabel: "Try Live Demo",
    badge: "AI / Deep Learning",
    stack: ["Python", "TensorFlow", "OpenCV", "CNN", "Streamlit"],
    features: [
      "CNN trained on 12,000 images using Google Colab GPU",
      "98.99% test accuracy on unseen data",
      "Real-time webcam detection with DNN face detector",
      "Web app: upload a photo for instant mask prediction",
      "Deployed live on Streamlit Cloud",
    ],
  },
  {
    title: "YOLO Vision AI — Object Detection",
    tagline: "Real-time object detection web app — 80 classes, live in production",
    link: "https://44jtbcb9zsvvrucb94utyi.streamlit.app/",
    linkLabel: "Try Live Demo",
    badge: "AI / Computer Vision",
    stack: ["Python", "YOLOv8", "Ultralytics", "OpenCV", "Streamlit"],
    features: [
      "Real-time detection across 80 object classes",
      "Photo upload with instant annotated results",
      "Stylish dark-neon UI with detection chips",
      "Deployed live on Streamlit Cloud",
    ],
  },
  {
    title: "E-commerce Sales Dashboard — Power BI",
    tagline: "Interactive sales analytics — 3,000 orders across Pakistan",
    link: "",
    linkLabel: "",
    badge: "Data Analytics",
    stack: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    features: [
      "5 KPI cards: sales, profit, orders, margin & avg order value",
      "Sales trends with year → quarter → month drill-down",
      "Category, city & segment breakdowns with interactive slicers",
      "5 custom DAX measures (SUM, COUNTROWS, DIVIDE)",
      "Custom JSON theme for a polished dark look",
    ],
  },
];

const POSTS = [
  {
    date: "Oct 2026",
    title: "How I Built a Full Stack Cafe Website Solo",
    desc: "Next.js, Prisma & Neon — from zero to a live production site serving a real business.",
  },
  {
    date: "Sep 2026",
    title: "From Software Engineering to Data Science",
    desc: "Why I chose a PGD in Data Science at NED and how it connects to my dev journey.",
  },
  {
    date: "Aug 2026",
    title: "Power BI Dashboards That People Actually Use",
    desc: "Lessons from building dashboards — clarity beats complexity, every time.",
  },
];

const SOCIALS = [
  { icon: GithubIcon, href: "https://github.com/sheharyarshahid009", label: "GitHub" },
  { icon: InstagramIcon, href: "https://instagram.com/sherrry_10", label: "Instagram" },
  { icon: XIcon, href: "https://twitter.com/sherrry_10", label: "X (Twitter)" },
  { icon: FacebookIcon, href: "https://facebook.com/muhammadshehryarkhan", label: "Facebook" },
];

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#work", label: "Work" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

/* ------------------------------- typing hook ------------------------------ */

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi % words.length];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1600);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWi((v) => v + 1);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, wi, words]);

  return text;
}

/* --------------------------------- section -------------------------------- */

function SectionHead({ kicker, title, desc }: { kicker: string; title: string; desc?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-10 text-center"
    >
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">{kicker}</p>
      <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {desc && <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-400">{desc}</p>}
    </motion.div>
  );
}

/* ---------------------------------- page ---------------------------------- */

export default function Portfolio() {
  const typed = useTypewriter(ROLES);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState("");

  const copy = (val: string, key: string) => {
    navigator.clipboard.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-[#0a0a0f]">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="text-lg font-extrabold tracking-tight">
            MSK<span className="gold-text">.</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="rounded-lg px-3.5 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-xl bg-amber-500 px-4 py-2 text-sm font-bold text-black transition hover:bg-amber-400 md:block">
            Hire Me
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 md:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/5 px-4 py-3 md:hidden">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/5">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="bg-grid relative flex min-h-screen items-center pt-16">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold text-amber-400">
              <Sparkles className="h-3.5 w-3.5" /> Welcome to my portfolio
            </p>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <br />
              <span className="gold-text">Muhammad Shehryar Khan</span>
            </h1>
            <p className="mt-4 h-8 text-xl font-semibold text-zinc-300">
              {typed}<span className="cursor-blink text-amber-400">|</span>
            </p>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
              Engineer by degree, builder by passion. I craft full stack web apps,
              machine learning models and data dashboards — and I run{" "}
              <span className="font-semibold text-zinc-200">Shery Cafe</span>, a cafe
              & lounge in Karachi, with its entire digital platform built by me.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-400">
                View My Work
              </a>
              <a href="#contact" className="rounded-xl border border-white/15 px-6 py-3 text-sm font-bold text-zinc-200 transition hover:border-amber-500/50 hover:text-amber-400">
                Get In Touch
              </a>
            </div>
            <div className="mt-8 flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-amber-500/50 hover:text-amber-400">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-72 sm:w-80 lg:w-96"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-500/30 via-transparent to-amber-500/10 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-amber-500/30">
              <Image src="/profile.jpg" alt="Engineer Muhammad Shehryar Khan" fill className="object-cover" priority sizes="400px" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 via-transparent to-transparent" />
            </div>
            <div className="glass absolute -bottom-5 -left-5 flex items-center gap-3 px-4 py-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-500"><Coffee className="h-5 w-5 text-black" /></span>
              <div>
                <p className="text-sm font-bold">Founder & CEO</p>
                <p className="text-xs text-zinc-400">Shery Cafe, Karachi</p>
              </div>
            </div>
          </motion.div>
        </div>
        <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 transition hover:text-amber-400" aria-label="Scroll down">
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </section>

      {/* Stats */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {[
            { n: "6+", l: "Core Skills" },
            { n: "4", l: "Degrees & Diplomas" },
            { n: "1", l: "Business Founded" },
            { n: "15+", l: "Site Features Shipped" },
          ].map((s, i) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center">
              <p className="gold-text text-4xl font-extrabold">{s.n}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-widest text-zinc-500">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHead kicker="About Me" title="Engineer, Developer & Entrepreneur" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass mx-auto max-w-3xl p-8 sm:p-10">
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
            I&apos;m <span className="font-bold text-white">Engineer Muhammad Shehryar Khan</span>,
            a software engineer turned data scientist based in Karachi, Pakistan. My journey
            started with a BS in Software Engineering, and today I&apos;m pursuing a{" "}
            <span className="font-semibold text-amber-400">Post Graduate Diploma in Data Science</span>{" "}
            at NED University — while running my own business.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            I love building things end-to-end: from Python machine learning models and Power BI
            dashboards to full stack web apps with Next.js and TypeScript. My proudest build so far
            is the complete digital platform for{" "}
            <span className="font-semibold text-zinc-200">Shery Cafe</span> — menu, ordering,
            reservations, loyalty, analytics and more, all live in production.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Karachi, Pakistan", "Open to Work", "English / Urdu"].map((t) => (
              <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-300">{t}</span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHead kicker="What I Do" title="Skills & Expertise" desc="A blend of software engineering, data science and product thinking." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.1 }} className="glass group p-6 transition hover:border-amber-500/30">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-500/15 text-amber-400 transition group-hover:bg-amber-500 group-hover:text-black">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="font-bold">{s.name}</p>
                      <p className="text-xs text-zinc-500">{s.desc}</p>
                    </div>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="h-full rounded-full bg-gradient-to-r from-amber-600 to-amber-400" />
                  </div>
                  <p className="mt-1.5 text-right text-xs font-bold text-amber-400">{s.level}%</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        <SectionHead kicker="Journey" title="Education" />
        <div className="relative ml-3 space-y-8 border-l-2 border-white/10 pl-8">
          {EDUCATION.map((e, i) => (
            <motion.div key={e.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="relative">
              <span className={`absolute -left-[41px] top-1 grid h-6 w-6 place-items-center rounded-full border-2 ${e.current ? "border-amber-400 bg-amber-400/20" : "border-zinc-700 bg-[#0a0a0f]"}`}>
                {e.current && <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />}
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500">{e.period}{e.current && " · Ongoing"}</p>
              <h3 className="mt-1 flex items-center gap-2 text-lg font-bold">
                <GraduationCap className="h-5 w-5 text-amber-400" /> {e.title}
              </h3>
              <p className="text-sm font-medium text-zinc-300">{e.place}</p>
              <p className="mt-1 text-sm text-zinc-500">{e.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <SectionHead kicker="Featured Projects" title="My Work" desc="Real products, live in production — web platforms, AI applications and data dashboards." />
          <div className="space-y-8">
            {PROJECTS.map((project) => (
              <motion.div key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-72 bg-gradient-to-br from-amber-500/20 via-[#0a0a0f] to-[#0a0a0f] p-8 sm:p-10">
                    <span className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-3.5 py-1.5 text-xs font-bold text-black">
                      <Briefcase className="h-3.5 w-3.5" /> {project.badge}
                    </span>
                    <h3 className="mt-5 text-2xl font-extrabold sm:text-3xl">{project.title}</h3>
                    <p className="mt-2 text-sm text-zinc-400">{project.tagline}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((t) => (
                        <span key={t} className="rounded-lg border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300">{t}</span>
                      ))}
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-400">
                        {project.linkLabel} <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <div className="p-8 sm:p-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">What I built</p>
                    <ul className="mt-4 space-y-3">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHead kicker="Thoughts" title="Blog" desc="Notes on building, data and business." />
        <div className="grid gap-5 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass group cursor-pointer p-6 transition hover:border-amber-500/30">
              <p className="flex items-center gap-2 text-xs font-semibold text-amber-500"><PenLine className="h-3.5 w-3.5" /> {p.date}</p>
              <h3 className="mt-3 text-lg font-bold leading-snug transition group-hover:text-amber-300">{p.title}</h3>
              <p className="mt-2 text-sm text-zinc-500">{p.desc}</p>
              <p className="mt-4 text-sm font-semibold text-amber-400 opacity-0 transition group-hover:opacity-100">Read more →</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
          <SectionHead kicker="Get In Touch" title="Let's Work Together" desc="Have a project in mind? My inbox is always open." />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass mx-auto max-w-2xl space-y-3 p-6 sm:p-8">
            {[
              { icon: Phone, label: "Phone", value: "03396030012", href: "tel:03396030012" },
              { icon: MapPin, label: "Location", value: "Defence Phase II, Karachi, Pakistan", href: undefined },
              { icon: Mail, label: "GitHub", value: "github.com/sheharyarshahid009", href: "https://github.com/sheharyarshahid009" },
            ].map((c) => {
              const Icon = c.icon;
              const inner = (
                <>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-amber-500/15 text-amber-400"><Icon className="h-5 w-5" /></span>
                  <span className="flex-1 text-left">
                    <span className="block text-xs uppercase tracking-widest text-zinc-500">{c.label}</span>
                    <span className="block text-sm font-semibold">{c.value}</span>
                  </span>
                  <button
                    onClick={(e) => { e.preventDefault(); copy(c.value, c.label); }}
                    className="text-zinc-500 transition hover:text-amber-400" aria-label={`Copy ${c.label}`}
                  >
                    {copied === c.label ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-amber-500/30">
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4">{inner}</div>
              );
            })}
            <div className="flex justify-center gap-3 pt-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:border-amber-500/50 hover:text-amber-400">
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center">
        <p className="text-sm text-zinc-500">© {new Date().getFullYear()} <span className="font-bold text-zinc-300">Engineer Muhammad Shehryar Khan</span></p>
        <p className="mt-1 text-xs text-zinc-600">Built with Next.js, TypeScript & Tailwind CSS</p>
      </footer>
    </div>
  );
}
