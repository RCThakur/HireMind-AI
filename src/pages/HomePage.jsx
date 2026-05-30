import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: "🔍",
    color: "cyan",
    title: "Explore real opportunities",
    description:
      "Browse listings with a clean, focused interface designed around roles that match your actual goals — not just keywords.",
  },
  {
    icon: "🔖",
    color: "emerald",
    title: "Save jobs that matter",
    description:
      "Keep important opportunities in one place. Revisit, compare, and apply without ever losing track of what caught your eye.",
  },
  {
    icon: "🧠",
    color: "violet",
    title: "AI career guidance",
    description:
      "Smart skill suggestions, AI-powered job-fit scores, and actionable advice tailored to your profile — before you apply.",
  },
  {
    icon: "📈",
    color: "orange",
    title: "Track your journey",
    description:
      "Build a smarter workflow by managing saved roles, application statuses, decisions, and next steps in one view.",
  },
];

const steps = [
  {
    title: "Search with intent",
    desc: "Search jobs by interest, role, or keyword using smart filters that understand what you're actually looking for.",
  },
  {
    title: "Understand the opportunity",
    desc: "Open detailed job pages with AI-generated summaries, skill breakdowns, and fit analysis for each role.",
  },
  {
    title: "Save and organize",
    desc: "Save useful jobs, add notes, set status labels, and build your personal shortlist with one click.",
  },
  {
    title: "Act with confidence",
    desc: "Use AI insights to improve decisions, close skill gaps, and apply knowing exactly where you stand.",
  },
];

const stats = [
  { value: "50K+", label: "Active Job Listings", color: "text-cyan-400" },
  { value: "12K+", label: "Users Placed", color: "text-emerald-400" },
  { value: "98%", label: "AI Match Accuracy", color: "text-violet-400" },
  { value: "4.9★", label: "Average User Rating", color: "text-orange-400" },
];

const skills = [
  {
    tag: "High Demand",
    tagColor: "cyan",
    name: "React.js",
    note: "Required in 87% of saved frontend roles",
    pct: 87,
    barColor: "bg-cyan-400",
  },
  {
    tag: "Skill Gap",
    tagColor: "orange",
    name: "Data Structures & Algorithms",
    note: "Focus area — boosts offer rate by ~40%",
    pct: 45,
    barColor: "bg-amber-400",
  },
  {
    tag: "On Track",
    tagColor: "emerald",
    name: "Node.js & REST APIs",
    note: "Solid foundation — add auth project to stand out",
    pct: 60,
    barColor: "bg-emerald-400",
  },
  {
    tag: "Trending",
    tagColor: "violet",
    name: "TypeScript",
    note: "Growing fast across MERN job descriptions",
    pct: 74,
    barColor: "bg-violet-400",
  },
  {
    tag: "High Demand",
    tagColor: "cyan",
    name: "System Design Basics",
    note: "Expected in mid-level & senior interviews",
    pct: 55,
    barColor: "bg-cyan-400",
  },
  {
    tag: "Skill Gap",
    tagColor: "orange",
    name: "Docker & CI/CD",
    note: "Key differentiator for full-stack roles",
    pct: 32,
    barColor: "bg-amber-400",
  },
];

const testimonials = [
  {
    stars: 5,
    text: "The AI insight told me exactly which skills I was missing for the roles I wanted. Got my first dev job in 6 weeks.",
    name: "Aarav Kumar",
    role: "Frontend Dev · Bangalore",
    initials: "AK",
    avatarBg: "bg-cyan-900/60",
    avatarText: "text-cyan-300",
  },
  {
    stars: 5,
    text: "I used to lose track of every application. HireMind's tracker changed my whole job search. The fit score is scarily accurate.",
    name: "Priya Mehta",
    role: "CS Student · Pune",
    initials: "PM",
    avatarBg: "bg-emerald-900/60",
    avatarText: "text-emerald-300",
  },
  {
    stars: 4,
    text: "Switching from marketing to product. The AI career companion made the transition feel way less overwhelming.",
    name: "Rohan Shah",
    role: "Career Switcher · Mumbai",
    initials: "RS",
    avatarBg: "bg-violet-900/60",
    avatarText: "text-violet-300",
  },
];

const tagColorMap = {
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  violet: "border-violet-400/20 bg-violet-400/10 text-violet-300",
  orange: "border-orange-400/20 bg-orange-400/10 text-orange-300",
};

function Card3D({ children, className = "" }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    el.style.transform = `perspective(600px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px) scale(1.02)`;
  };

  const handleLeave = (e) => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transition:
          "transform 0.35s cubic-bezier(.17,.67,.37,1.1), box-shadow 0.35s",
      }}
    >
      {children}
    </div>
  );
}

function MatchBar({ target = 84 }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(target), 600);
    return () => clearTimeout(t);
  }, [target]);
  return (
    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden mt-2 w-44">
      <div
        className="h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
        style={{ width: `${width}%`, transition: "width 1.5s ease" }}
      />
    </div>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex gap-1 ml-1">
      {[0, 200, 400].map((d) => (
        <span
          key={d}
          className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400"
          style={{ animation: `blink 1.2s ${d}ms infinite` }}
        />
      ))}
      <style>{`@keyframes blink{0%,80%,100%{opacity:.2}40%{opacity:1}}`}</style>
    </span>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_20%,rgba(56,189,248,0.12),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_10%,rgba(168,85,247,0.12),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_50%_100%,rgba(16,185,129,0.08),transparent_60%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left copy */}
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Smart Job Tracker & AI Career Assistant
              </div>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
                Find better jobs. Make smarter career moves with{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                  HireMind AI
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 md:text-lg">
                Explore opportunities, track your search, and receive AI-powered
                insights that help you understand where you fit, what to
                improve, and how to move forward — all in one platform.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/jobs"
                  className="rounded-xl bg-cyan-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
                >
                  Explore Jobs
                </Link>
                <Link
                  to="/register"
                  className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Get Started Free
                </Link>
                <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                    ▶
                  </span>
                  Watch Demo
                </button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {[
                  {
                    val: "Search",
                    desc: "Discover by role, skill & interest",
                    color: "text-cyan-300",
                  },
                  {
                    val: "Save",
                    desc: "Track shortlisted opportunities",
                    color: "text-emerald-300",
                  },
                  {
                    val: "Improve",
                    desc: "AI guidance for your next move",
                    color: "text-violet-300",
                  },
                ].map((s) => (
                  <div
                    key={s.val}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <p className={`text-xl font-bold ${s.color}`}>{s.val}</p>
                    <p className="mt-1 text-xs text-slate-500 leading-5">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Dashboard preview */}
            <Card3D className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl ring-1 ring-inset ring-white/5 hover:shadow-cyan-500/10">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 pointer-events-none" />
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Dashboard Preview</p>
                    <h3 className="text-lg font-semibold">
                      Career Assistant Overview
                    </h3>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />{" "}
                    Live AI
                  </span>
                </div>

                {/* Role card */}
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 mb-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">
                        Top Recommended Role
                      </p>
                      <h4 className="text-base font-semibold">
                        Frontend Developer Intern
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        TechCorp · Remote · ₹8–12 LPA
                      </p>
                      <MatchBar />
                      <p className="text-xs text-cyan-400 mt-1.5">
                        84% match based on your profile
                      </p>
                    </div>
                    <span className="shrink-0 rounded-xl bg-cyan-500/15 px-3 py-1 text-xs text-cyan-300 border border-cyan-500/20">
                      Strong Fit
                    </span>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {[
                    { label: "Saved Jobs", val: "12", sub: "3 new this week" },
                    { label: "Applications", val: "5", sub: "2 in review" },
                  ].map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl border border-white/10 bg-slate-900/80 p-4"
                    >
                      <p className="text-xs text-slate-500">{m.label}</p>
                      <p className="mt-1 text-2xl font-bold">{m.val}</p>
                      <p className="mt-1 text-xs text-slate-600">{m.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Skill bars */}
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 mb-3">
                  <p className="text-xs text-slate-500 mb-3">
                    Skill Gap Analysis
                  </p>
                  {[
                    { name: "React", pct: 72, color: "bg-cyan-400" },
                    { name: "DSA", pct: 45, color: "bg-amber-400" },
                    { name: "Node.js", pct: 60, color: "bg-violet-400" },
                  ].map((sk) => (
                    <div
                      key={sk.name}
                      className="flex items-center gap-3 text-xs mb-2 last:mb-0"
                    >
                      <span className="w-12 text-slate-400">{sk.name}</span>
                      <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className={`h-1 rounded-full ${sk.color}`}
                          style={{ width: `${sk.pct}%` }}
                        />
                      </div>
                      <span className="text-slate-400 w-8 text-right">
                        {sk.pct}%
                      </span>
                    </div>
                  ))}
                </div>

                {/* AI Insight */}
                <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs text-slate-500">AI Insight</p>
                    <TypingDots />
                  </div>
                  <p className="text-sm leading-6 text-slate-400">
                    You're a strong fit for frontend &amp; MERN roles. Improve
                    JavaScript problem-solving and add an auth project to boost
                    interview chances by ~30%.
                  </p>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/6 border-y border-white/8 bg-white/[0.01]">
        {stats.map((s) => (
          <div key={s.label} className="py-7 text-center">
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="mt-1 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── FEATURES ── */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3">
          Why HireMind AI
        </p>
        <h2 className="text-3xl font-bold md:text-4xl mb-4">
          A job platform built for clarity, not chaos
        </h2>
        <p className="text-slate-500 max-w-xl leading-7">
          Instead of only showing jobs, HireMind AI helps you understand what to
          do next — combining discovery, tracking, and AI-powered career support
          in one focused experience.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {features.map((f) => (
            <Card3D
              key={f.title}
              className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 cursor-default hover:bg-white/[0.07] hover:border-white/15 transition-colors"
            >
              <div
                className={`mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border ${tagColorMap[f.color]}`}
              >
                <span className="text-xl">{f.icon}</span>
              </div>
              <h3 className="text-base font-semibold mb-2">{f.title}</h3>
              <p className="text-sm leading-6 text-slate-500">
                {f.description}
              </p>
            </Card3D>
          ))}
        </div>
      </section>

      {/* ── SKILL ANALYSIS ── */}
      <section className="border-y border-white/8 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-400 mb-3">
            AI-Powered Analysis
          </p>
          <h2 className="text-3xl font-bold md:text-4xl mb-4">
            Know exactly what to build next
          </h2>
          <p className="text-slate-500 max-w-xl leading-7 mb-10">
            HireMind AI scans job descriptions and matches them to your profile,
            pinpointing the skills that will make the biggest difference in
            landing offers.
          </p>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((sk) => (
              <Card3D
                key={sk.name}
                className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 hover:bg-white/[0.06] hover:border-white/14 transition-colors cursor-default"
              >
                <span
                  className={`inline-block mb-3 rounded-full border px-3 py-0.5 text-xs font-semibold ${tagColorMap[sk.tagColor]}`}
                >
                  {sk.tag}
                </span>
                <p className="text-sm font-semibold mb-1">{sk.name}</p>
                <p className="text-xs text-slate-500 leading-5 mb-3">
                  {sk.note}
                </p>
                <div className="h-1 rounded-full bg-white/8 overflow-hidden">
                  <div
                    className={`h-1 rounded-full ${sk.barColor}`}
                    style={{ width: `${sk.pct}%` }}
                  />
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
              How it works
            </p>
            <h2 className="text-3xl font-bold md:text-4xl mb-4">
              A simple flow for a smarter job search
            </h2>
            <p className="text-slate-500 max-w-sm leading-7 mb-8">
              Designed for users who want clarity — from discovering jobs to
              becoming a stronger applicant at every step.
            </p>
            <div className="flex flex-col gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 text-xs">
                  ⏱
                </span>
                Average setup time:{" "}
                <span className="text-cyan-400 font-semibold">
                  under 2 minutes
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-400 text-xs">
                  ✓
                </span>
                Free to start, no credit card required
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-2xl border border-white/8 bg-slate-900/60 p-5 transition-all hover:border-cyan-500/30 hover:translate-x-1"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-500/10 text-xs font-bold text-cyan-300">
                  0{i + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    {step.title}
                  </p>
                  <p className="text-sm text-slate-500 leading-6">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400 mb-3">
            Real stories
          </p>
          <h2 className="text-3xl font-bold md:text-4xl mb-10">
            What users are saying
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card3D
                key={t.name}
                className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 cursor-default hover:bg-white/[0.06] transition-colors"
              >
                <div className="text-amber-400 text-sm mb-3">
                  {"★".repeat(t.stars)}
                  {"☆".repeat(5 - t.stars)}
                </div>
                <p className="text-sm leading-6 text-slate-400 mb-5">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${t.avatarBg} ${t.avatarText}`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-slate-600">{t.role}</p>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROMISE CARDS ── */}
      <section className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
          <div className="grid gap-5 lg:grid-cols-2">
            <Card3D className="rounded-3xl border border-white/8 bg-gradient-to-br from-cyan-500/8 to-slate-900 p-8 cursor-default">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400 mb-3">
                Built for
              </p>
              <h3 className="text-xl font-bold mb-3">
                Students, freshers, developers &amp; career switchers
              </h3>
              <p className="text-sm text-slate-500 leading-7">
                HireMind AI is especially useful for people who need direction,
                organization, and confidence while navigating the job market —
                whether you're just starting out or pivoting entirely.
              </p>
            </Card3D>
            <Card3D className="rounded-3xl border border-white/8 bg-gradient-to-br from-emerald-500/8 to-slate-900 p-8 cursor-default">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-3">
                Core promise
              </p>
              <h3 className="text-xl font-bold mb-3">
                More than a job board — a career decision companion
              </h3>
              <p className="text-sm text-slate-500 leading-7">
                You don't just browse roles here. You understand where you fit,
                what to improve, and how to move forward with more clarity,
                purpose, and confidence every time.
              </p>
            </Card3D>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl md:p-14">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-1.5 text-sm text-violet-300 mb-5">
              🚀 Start now — it's free
            </span>
            <h2 className="text-3xl font-bold md:text-5xl mb-4">
              Build a smarter job search
              <br />
              with{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                HireMind AI
              </span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-500 leading-7">
              Explore jobs, save the right opportunities, and get practical AI
              insights that help you apply with confidence and clarity —
              completely free to start.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/ai-insights"
                className="rounded-xl bg-cyan-500 px-7 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-400"
              >
                View AI Insights
              </Link>
              <Link
                to="/jobs"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Browse Jobs
              </Link>
            </div>
            <p className="mt-5 text-xs text-slate-600">
              No credit card · Free forever plan · AI-powered matching
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
