import { Link } from "react-router-dom";
import { Bookmark, MapPin, BriefcaseBusiness, Building2 } from "lucide-react";
import { useJobs } from "../../context/JobContext";

function JobCard({ job }) {
  const { toggleSaveJob, isJobSaved } = useJobs();
  const saved = isJobSaved(job.id);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-cyan-300">{job.category}</p>
          <h3 className="mt-2 text-2xl font-bold text-white">{job.title}</h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
            <Building2 size={16} />
            {job.company}
          </p>
        </div>

        <button
          onClick={() => toggleSaveJob(job)}
          className={`rounded-xl border px-3 py-2 transition ${
            saved
              ? "border-cyan-400/30 bg-cyan-500/15 text-cyan-300"
              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
          }`}
        >
          <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
          <MapPin size={14} />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
          <BriefcaseBusiness size={14} />
          {job.type}
        </span>
        <span className="rounded-full border border-white/10 px-3 py-1">
          {job.mode}
        </span>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-400">
        {job.shortDescription}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-900/80 px-3 py-1 text-xs text-slate-300"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-500">Salary</p>
          <p className="font-semibold text-white">{job.salary}</p>
        </div>

        <Link
          to={`/jobs/${job.id}`}
          className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
