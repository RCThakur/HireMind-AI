import { Link, NavLink } from "react-router-dom";
import {
  BriefcaseBusiness,
  BrainCircuit,
  Bookmark,
  Sparkles,
} from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-cyan-600 dark:text-cyan-300"
        : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
    }`;

  const mobileNavClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 transition ${
      isActive
        ? "text-cyan-600 dark:text-cyan-300"
        : "text-slate-500 dark:text-slate-400"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-300">
            <Sparkles size={18} />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
              HireMind AI
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500">
              Smart Job Tracker
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/jobs" className={navLinkClass}>
            Jobs
          </NavLink>
          <NavLink to="/saved-jobs" className={navLinkClass}>
            Saved Jobs
          </NavLink>
          <NavLink to="/ai-insights" className={navLinkClass}>
            AI Insights
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/jobs"
            className="hidden rounded-xl bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:inline-flex"
          >
            Explore
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-white/10 md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-4 px-4 py-3 text-xs">
          <NavLink to="/" className={mobileNavClass}>
            <Sparkles size={16} />
            <span>Home</span>
          </NavLink>
          <NavLink to="/jobs" className={mobileNavClass}>
            <BriefcaseBusiness size={16} />
            <span>Jobs</span>
          </NavLink>
          <NavLink to="/saved-jobs" className={mobileNavClass}>
            <Bookmark size={16} />
            <span>Saved</span>
          </NavLink>
          <NavLink to="/ai-insights" className={mobileNavClass}>
            <BrainCircuit size={16} />
            <span>Insights</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
