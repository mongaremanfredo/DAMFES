"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  GraduationCap,
  MessageCircle,
  MonitorCheck,
  PlayCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UsersRound,
  Instagram
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const navLinks = ["Home", "Programs", "Results", "Community", "FAQ", "Contact"];

const links = {
  enrollment:
    "https://wa.me/2349158561146?text=Hi%20DAMFES%2C%20I%20want%20to%20join%20the%20BJOT%20Post%20UTME%20Class",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb5zmA2EwEk2zFN3vr3H",
  telegram: "https://t.me/DAMFESFORUM",
  contact:
    "https://wa.me/2349158561146?text=Hi%20DAMFES.%20I%27m%20interested%20in%20the%20Edu.%20updates.%20My%20name%20is____",
  testimonies: "https://wa.me/p/24182034248135377/2349158561146",
  instagram: "https://www.instagram.com/damfes_forum/"
};

const images = {
  hero:
    "https://images.pexels.com/photos/34211750/pexels-photo-34211750.jpeg?auto=compress&cs=tinysrgb&w=1800",
  results:
    "https://images.pexels.com/photos/34162714/pexels-photo-34162714.jpeg?auto=compress&cs=tinysrgb&w=1400",
  community:
    "https://images.pexels.com/photos/11025059/pexels-photo-11025059.jpeg?auto=compress&cs=tinysrgb&w=1400",
  cbt:
    "https://images.pexels.com/photos/11025059/pexels-photo-11025059.jpeg?auto=compress&cs=tinysrgb&w=1400",
  final:
    "https://images.pexels.com/photos/34162714/pexels-photo-34162714.jpeg?auto=compress&cs=tinysrgb&w=1800"
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

function Reveal({
  children,
  delay = 0,
  className = ""
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy/92 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="DAMFES FORUM home">
          <span className="grid h-11 w-11 place-items-center rounded-md border border-gold/40 bg-gold/15 text-gold shadow-glow">
            <GraduationCap size={23} />
          </span>
          <span>
            <span className="block font-display text-lg font-bold tracking-wide">DAMFES FORUM</span>
            <span className="block text-[11px] uppercase tracking-[0.28em] text-white/52">B.J.O.T</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-white/72 transition hover:text-gold"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href={links.enrollment}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-gold px-3 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-[#e9bc41] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy sm:px-4"
        >
          <span className="sm:hidden">Apply</span>
          <span className="hidden sm:inline">Apply for 2026 Cohort</span>
          <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, 130]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy pt-28 hero-mask">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={images.hero}
          alt="African students studying together in a classroom"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,32,.96),rgba(8,17,32,.68),rgba(8,17,32,.88))]" />
      <div className="absolute inset-0 bg-gold-radial opacity-60 blur-3xl" />
      <div className="noise absolute inset-0" />

      <div className="section-shell relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          className="min-w-0 max-w-[calc(100vw-32px)]"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold">
            <Sparkles size={16} /> CBT mastery, score growth, and admission readiness
          </div>
          <h1 className="max-w-[11ch] break-words font-display text-4xl font-black leading-[1.08] text-white sm:max-w-4xl sm:text-6xl sm:leading-[1.02] lg:text-7xl">
            Build the JAMB Score Plan That Gets You Exam-Ready
          </h1>
          <p className="mt-7 max-w-[calc(100vw-32px)] text-lg leading-8 text-white/72 sm:max-w-2xl sm:text-xl">
            DAMFES B.J.O.T trains UTME students with CBT simulation loops, weekly performance
            tracking, mentor accountability, and admission guidance from preparation to screening.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={links.enrollment}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 font-bold text-navy transition hover:-translate-y-1 hover:bg-[#efc75a] sm:w-auto"
            >
              Get Your JAMB Score Plan <ArrowRight size={18} />
            </a>
            <a
              href={links.contact}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/18 bg-white/8 px-6 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-gold/45 hover:text-gold sm:w-auto"
            >
              Check Admission Readiness <Trophy size={18} />
            </a>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-4">
            {["CAC Registered", "2025 Top Score: 368/400", "Weekly CBT Tracking", "Admission Mentorship"].map(
              (item) => (
                <div key={item} className="glass rounded-lg px-4 py-3 text-sm font-semibold text-white/86">
                  <Check className="mb-2 text-gold" size={16} />
                  {item}
                </div>
              )
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative hidden lg:block"
        >
          <div className="absolute -left-8 top-8 h-48 w-48 rounded-full bg-gold/20 blur-3xl" />
          <div className="glass relative rounded-2xl p-5">
            <div className="relative h-[500px] overflow-hidden rounded-xl">
              <Image
                src={images.cbt}
                alt="Students preparing for computer based exams"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
            </div>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-7 left-8 right-8 rounded-xl border border-gold/25 bg-navy/88 p-5 shadow-premium backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">DAMFES Pulse</span>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-300">
                  Live support
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["125+ Study Posts", "Mentor Accountability", "CBT Pressure Drills", "Telegram + WhatsApp Support"].map(
                  (stat) => (
                    <div key={stat} className="rounded-lg bg-white/8 p-4">
                      <p className="text-sm font-semibold text-white/84">{stat}</p>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemAgitation() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Random reading creates false confidence",
      text: "Many students cover topics without knowing which subjects are costing them marks or how their timing will hold up in CBT."
    },
    {
      icon: Clock3,
      title: "CBT pressure exposes weak preparation",
      text: "A student can know a topic and still lose marks when speed, screen navigation, and exam pressure are not trained together."
    },
    {
      icon: Target,
      title: "Admission choices need strategy",
      text: "Score targets, subject combinations, course fit, and post-UTME decisions all affect the admission outcome after the exam."
    }
  ];

  return (
    <section className="bg-[#f7f8fb] py-24 text-navy">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.28em] text-gold">Why students miss their target</p>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">
            Hard work is not enough when preparation is not measured.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            DAMFES is built for students who need a clear score plan, not another pile of notes.
            The goal is to find weak points early, train under CBT pressure, and keep students
            accountable before registration and exam day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 0.08}>
              <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(8,17,32,.08)]">
                <problem.icon className="text-gold" size={30} />
                <h3 className="mt-5 font-display text-2xl font-bold">{problem.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{problem.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const cards = [
    { icon: Trophy, title: "Outcome trust", text: "A 368/400 top score shows the standard students are trained toward through focused practice and exam conditioning." },
    { icon: BarChart3, title: "System trust", text: "Weekly checks help students see what is improving, what is still weak, and what should be revised before the next drill." },
    { icon: UsersRound, title: "Activity trust", text: "WhatsApp and Telegram communities keep students close to updates, practice prompts, mentor replies, and cohort momentum." }
  ];

  return (
    <section id="results" className="bg-[#f7f8fb] py-24 text-navy">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.28em] text-gold">Proof with context</p>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">Results matter most when the process is visible.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Parents and students need more than motivation. DAMFES combines institutional trust,
            measurable practice, student community, and admission mentorship into one preparation path.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <Reveal className="relative min-h-[440px] overflow-hidden rounded-2xl shadow-premium">
            <Image src={images.results} alt="African students celebrating academic progress" fill className="object-cover" sizes="(min-width: 1024px) 44vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/20 to-transparent" />
            <div className="absolute bottom-0 p-7">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-gold">2025 highlight</p>
              <p className="mt-2 font-display text-6xl font-black text-white">368/400</p>
              <p className="mt-3 max-w-md text-white/75">A visible performance benchmark tied to consistent drills, subject focus, and exam-readiness training.</p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {cards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-xl border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(8,17,32,.08)] transition"
                >
                  <card.icon className="text-gold" size={28} />
                  <h3 className="mt-5 font-display text-2xl font-bold">{card.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {["CAC registered platform", "Weekly CBT readiness checks", "Mentorship through admission decisions"].map((metric) => (
            <Reveal key={metric}>
              <div className="rounded-lg border border-slate-200 bg-white px-5 py-6 text-center font-bold shadow-sm">
                {metric}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: ClipboardCheck, title: "Placement and score plan", text: "Students enter with a goal, current subject gaps, and a clear plan for what must improve before the exam window." },
    { icon: MonitorCheck, title: "CBT simulation training loops", text: "Classes, revision, timed drills, and mock-style practice train knowledge, speed, and confidence together." },
    { icon: GraduationCap, title: "Mentorship until admission decisions", text: "Students get guidance on subject strategy, course choice, screening, and the next move after UTME." }
  ];

  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="absolute inset-0 bg-navy-grid bg-[size:42px_42px] opacity-25" />
      <motion.div
        animate={{ x: [0, 40, 0], y: [0, -28, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-16 h-64 w-64 rounded-full bg-gold/12 blur-3xl"
      />
      <div className="section-shell relative">
        <Reveal className="max-w-2xl">
          <p className="font-bold uppercase tracking-[0.28em] text-gold">The DAMFES performance system</p>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">A preparation loop built around marks, timing, and admission decisions.</h2>
        </Reveal>

        <div className="relative mt-16 grid gap-6 lg:grid-cols-3">
          <div className="timeline-line absolute left-1/2 top-10 hidden h-1 w-[70%] -translate-x-1/2 rotate-90 lg:block lg:h-px lg:rotate-0" />
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.1}>
              <motion.div whileHover={{ y: -8 }} className="glass relative rounded-xl p-7">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-md bg-gold text-navy shadow-glow">
                  <step.icon size={27} />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-gold">Step {index + 1}</span>
                <h3 className="mt-3 font-display text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 leading-7 text-white/66">{step.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Programs() {
  const programs = [
    {
      title: "UTME Score Growth Track",
      icon: BookOpenCheck,
      features: ["Subject gap diagnosis", "Live exam-focused classes", "CBT mock practice", "Weekly performance checks", "WhatsApp accountability", "Exam strategy coaching"],
      featured: true
    },
    {
      title: "Admission Readiness Track",
      icon: ShieldCheck,
      features: ["DE and post-UTME guidance", "Course and school fit support", "Admission timeline reminders", "University application assistance"]
    },
    {
      title: "Revision Resource Track",
      icon: PlayCircle,
      features: ["Past questions", "PDF materials", "Revision packs", "Study timetables", "Guided topic priorities"]
    }
  ];

  return (
    <section id="programs" className="bg-[#f7f8fb] py-24 text-navy">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.28em] text-gold">Enrollment paths</p>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">Choose based on the outcome you need next.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Students can start with score improvement, admission guidance, or focused revision
            resources depending on their current readiness level.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                className={`relative h-full rounded-xl border p-7 shadow-[0_22px_70px_rgba(8,17,32,.08)] ${
                  program.featured ? "border-gold bg-navy text-white shadow-glow" : "border-slate-200 bg-white"
                }`}
              >
                {program.featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-wider text-navy">
                    Popular
                  </span>
                )}
                <div className={`grid h-14 w-14 place-items-center rounded-md ${program.featured ? "bg-gold text-navy" : "bg-gold/14 text-gold"}`}>
                  <program.icon size={27} />
                </div>
                <h3 className="mt-7 font-display text-2xl font-bold">{program.title}</h3>
                <ul className="mt-6 space-y-4">
                  {program.features.map((feature) => (
                    <li key={feature} className={`flex gap-3 ${program.featured ? "text-white/78" : "text-slate-600"}`}>
                      <Check className="mt-0.5 shrink-0 text-gold" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={program.featured ? links.enrollment : links.contact}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-4 font-bold transition ${
                    program.featured
                      ? "bg-gold text-navy hover:bg-[#efc75a]"
                      : "border border-slate-200 bg-slate-950 text-white hover:border-gold hover:bg-navy"
                  }`}
                >
                  {program.featured ? "Book Placement Assessment" : "Check Fit on WhatsApp"} <ArrowRight size={17} />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Countdown() {
  const target = useMemo(() => new Date("2026-01-19T00:00:00+01:00").getTime(), []);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [elapsed, setElapsed] = useState(false);

  useEffect(() => {
    const tick = () => {
      const rawDiff = target - Date.now();
      const diff = Math.max(0, rawDiff);
      setElapsed(rawDiff <= 0);
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    };
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [target]);

  const schedule = [
    "Sales of UTME Forms: 19th January - 26th February 2026",
    "UTME Registration: 26th January - 28th February 2026",
    "Mock Examination: 28th March 2026",
    "Main UTME Examination: 16th - 25th April 2026"
  ];

  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_10%,rgba(212,160,23,.24),transparent_38%)]" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="font-bold uppercase tracking-[0.28em] text-gold">JAMB timeline pressure</p>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">Every missed week reduces the time available to fix weak subjects.</h2>
          <p className="mt-5 leading-8 text-white/68">
            Registration, mock exams, and the main UTME window create fixed deadlines. DAMFES helps
            students convert the remaining weeks into CBT practice, revision targets, and admission
            planning.
          </p>
          <a href={links.enrollment} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-4 font-bold text-navy transition hover:-translate-y-1 hover:bg-[#efc75a]">
            Apply for 2026 Cohort <ArrowRight size={18} />
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-6">
            <div className="grid grid-cols-4 gap-3">
              {Object.entries(timeLeft).map(([label, value]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/8 p-4 text-center">
                  <div className="font-display text-3xl font-black text-white sm:text-5xl">{String(value).padStart(2, "0")}</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-wider text-gold">{label}</div>
                </div>
              ))}
            </div>
            {elapsed && (
              <div className="mt-5 rounded-lg border border-gold/25 bg-gold/10 p-4 text-sm font-semibold leading-6 text-gold">
                The official 2026 registration start date has passed. Contact DAMFES to confirm the
                current cohort, post-UTME support, and admission guidance options.
              </div>
            )}
            <div className="mt-6 grid gap-3">
              {schedule.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg bg-white/7 p-4 text-white/78">
                  <Clock3 className="mt-0.5 shrink-0 text-gold" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="bg-[#f7f8fb] py-24 text-navy">
      <div className="section-shell grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-center">
        <Reveal>
          <p className="font-bold uppercase tracking-[0.28em] text-gold">Activity proof</p>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">Stay inside an active exam-prep environment.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            WhatsApp and Telegram keep students close to revision prompts, education updates,
            mentor direction, and cohort reminders when deadlines are moving fast.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={links.whatsappChannel} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-500 px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-600">
              <MessageCircle size={18} /> Join WhatsApp Channel
            </a>
            <a href={links.telegram} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-6 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-sky-600">
              <Send size={18} /> Join Telegram Group
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl shadow-premium">
              <Image src={images.community} alt="African teenagers collaborating with laptops" width={900} height={680} className="h-[520px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 grid gap-3">
                {["CBT drill reminder drops by 7 PM", "Biology weak-area revision is live", "Mentor note: review course choices before screening"].map((message, index) => (
                  <motion.div
                    key={message}
                    initial={{ opacity: 0, x: 22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.16 }}
                    className="rounded-lg border border-white/12 bg-white/12 p-4 text-sm font-semibold text-white backdrop-blur-xl"
                  >
                    {message}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { name: "Aisha Bello", text: "DAMFES helped me stop reading blindly. The CBT drills showed me where I was losing marks, so I knew what to fix each week.", result: "Score plan completed" },
    { name: "Chinedu Okafor", text: "The mentorship after UTME helped me make better course and screening decisions. It was not just exam teaching.", result: "Admission guided" },
    { name: "Mariam Adeyemi", text: "The weekly pressure made me more serious. I revised with a timetable and used recordings to catch up before the next assessment.", result: "Consistent weekly growth" }
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setActive((current) => (current + 1) % testimonials.length), 4500);
    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-navy py-24">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.28em] text-gold">Student voices</p>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">Students remember the system that made them consistent.</h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-4xl">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 text-center sm:p-12"
          >
            <div className="mx-auto flex justify-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} size={20} fill="currentColor" />
              ))}
            </div>
            <p className="mt-7 text-2xl font-semibold leading-10 text-white/88">
              &quot;{testimonials[active].text}&quot;
            </p>
            <div className="mt-7">
              <p className="font-display text-xl font-bold">{testimonials[active].name}</p>
              <p className="mt-1 text-gold">{testimonials[active].result}</p>
            </div>
          </motion.div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActive(index)}
                className={`h-2.5 rounded-full transition-all ${active === index ? "w-10 bg-gold" : "w-2.5 bg-white/24"}`}
                aria-label={`Show testimonial from ${item.name}`}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={links.testimonies} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-gold/35 px-5 py-3 font-bold text-gold transition hover:-translate-y-1 hover:bg-gold hover:text-navy">
              View More Testimonies <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["Is this online or physical?", "DAMFES B.J.O.T is designed for online preparation, with live support, community updates, and CBT-focused practice students can follow from anywhere."],
    ["Will recordings be available?", "Yes. Recordings help students catch up, repeat difficult explanations, and prepare for the next performance check."],
    ["Do you help after UTME?", "Yes. DAMFES supports students with admission guidance, course decisions, screening direction, and next-step planning after the exam."],
    ["How do I register?", "Use the application button to open WhatsApp, send the enrollment message, and confirm the current cohort or placement assessment details."],
    ["Is mentorship included?", "Yes. Mentorship is part of the system because students need accountability, strategy, and admission guidance, not only classes."],
    ["Can parents monitor progress?", "Parents can contact DAMFES to understand the preparation structure and request updates on how their child is responding to the plan."]
  ];
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-[#f7f8fb] py-24 text-navy">
      <div className="section-shell grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <Reveal>
          <p className="font-bold uppercase tracking-[0.28em] text-gold">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">Questions parents and students ask before enrollment.</h2>
        </Reveal>
        <div className="space-y-3">
          {faqs.map(([question, answer], index) => (
            <Reveal key={question} delay={index * 0.04}>
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full rounded-lg border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-gold/55"
                aria-expanded={open === index}
              >
                <span className="flex items-center justify-between gap-4 font-display text-lg font-bold">
                  {question}
                  <ChevronDown className={`shrink-0 text-gold transition ${open === index ? "rotate-180" : ""}`} />
                </span>
                {open === index && <span className="mt-4 block leading-7 text-slate-600">{answer}</span>}
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-28">
      <Image src={images.final} alt="Students focused on academic work" fill className="object-cover opacity-42" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,32,.96),rgba(8,17,32,.76))]" />
      <div className="section-shell relative z-10 max-w-4xl">
        <Reveal>
          <p className="font-bold uppercase tracking-[0.28em] text-gold">Take the next step</p>
          <h2 className="mt-4 font-display text-5xl font-black leading-tight sm:text-6xl">Do not wait until mock scores expose the gaps.</h2>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/72">
            Apply for the current DAMFES cohort, get a score plan, and start training with a
            system built around CBT readiness and admission decisions.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={links.enrollment} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-4 font-bold text-navy transition hover:-translate-y-1 hover:bg-[#efc75a]">
              Apply for 2026 Cohort <ArrowRight size={18} />
            </a>
            <a href={links.contact} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/18 bg-white/8 px-6 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:border-gold/45 hover:text-gold">
              Contact DAMFES on WhatsApp <MessageCircle size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050b14] py-12">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md border border-gold/40 bg-gold/15 text-gold">
                <GraduationCap size={23} />
              </span>
              <div>
                <p className="font-display text-lg font-bold">DAMFES FORUM</p>
                <p className="text-sm text-white/52">CAC Registered educational platform</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-white/66">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="transition hover:text-gold">
                {link}
              </a>
            ))}
            <a href={links.whatsappChannel} target="_blank" rel="noreferrer" className="transition hover:text-gold">WhatsApp</a>
            <a href={links.telegram} target="_blank" rel="noreferrer" className="transition hover:text-gold">Telegram</a>
            <a href={links.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-gold">
              Instagram <Instagram size={15} />
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 DAMFES FORUM. All rights reserved.</p>
          <p>DAMFES B.J.O.T - Blast Jamb Online Tutorials</p>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={links.contact}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with DAMFES on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-[0_18px_48px_rgba(16,185,129,.4)] transition hover:-translate-y-1 hover:bg-emerald-600"
    >
      <MessageCircle size={25} />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProblemAgitation />
      <HowItWorks />
      <Results />
      <Programs />
      <Countdown />
      <Community />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
