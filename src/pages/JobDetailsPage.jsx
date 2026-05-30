import { Link, useParams } from "react-router-dom";
import { MapPin, BriefcaseBusiness, Building2, Bookmark } from "lucide-react";
import jobsData from "../data/jobsData";
import { useJobs } from "../context/JobContext";
import EmptyState from "../components/common/EmptyState";

function JobDetailsPage() {
  const { id } = useParams();
  const { toggleSaveJob, isJobSaved } = useJobs();

  const job = jobsData.find((item) => item.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-16 text-white md:px-10">
        <div className="mx-auto max-w-5xl">
          <EmptyState
            title="Job not found"
            description="The selected job does not exist or may have been removed from the mock dataset."
          />
        </div>
      </div>
    );
  }

  const saved = isJobSaved(job.id);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/jobs"
          className="inline-flex rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10"
        >
          Back to Jobs
        </Link>

        <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
            {job.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-5xl">{job.title}</h1>

          <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1">
              <Building2 size={14} />
              {job.company}
            </span>
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
            <span className="rounded-full border border-white/10 px-3 py-1">
              {job.experience}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5">
            <div>
              <p className="text-sm text-slate-500">Salary Range</p>
              <p className="mt-1 text-xl font-semibold text-white">
                {job.salary}
              </p>
            </div>

            <button
              onClick={() => toggleSaveJob(job)}
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
                saved
                  ? "bg-cyan-500/15 text-cyan-300"
                  : "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
              }`}
            >
              <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
              {saved ? "Saved" : "Save Job"}
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">About this role</h2>
            <p className="mt-4 leading-7 text-slate-400">{job.description}</p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-white">
                Responsibilities
              </h3>
              <ul className="mt-4 space-y-3 text-slate-400">
                {job.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white">Requirements</h3>
              <ul className="mt-4 space-y-3 text-slate-400">
                {job.requirements.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-white">Skills</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
