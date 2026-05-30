import { Search } from "lucide-react";
import { useJobs } from "../../context/JobContext";

function JobFilters() {
  const {
    searchTerm,
    selectedCategory,
    selectedMode,
    setSearchTerm,
    setSelectedCategory,
    setSelectedMode,
  } = useJobs();

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="grid gap-4 md:grid-cols-3">
        <div className="relative md:col-span-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />
          <input
            type="text"
            placeholder="Search by role, company, or skill"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/70 py-3 pl-11 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />
        </div>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-cyan-400"
        >
          <option value="All">All Categories</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Full Stack">Full Stack</option>
          <option value="AI">AI</option>
          <option value="General">General</option>
        </select>

        <select
          value={selectedMode}
          onChange={(e) => setSelectedMode(e.target.value)}
          className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none focus:border-cyan-400"
        >
          <option value="All">All Modes</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Onsite">Onsite</option>
        </select>
      </div>
    </div>
  );
}

export default JobFilters;
