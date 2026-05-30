import JobCard from "../components/jobs/JobCard";
import EmptyState from "../components/common/EmptyState";
import { useJobs } from "../context/JobContext";

function SavedJobsPage() {
  const { savedJobs } = useJobs();

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">
          Saved Jobs
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">
          Your shortlisted opportunities
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Revisit and manage the jobs you saved while planning your next
          applications.
        </p>

        <div className="mt-10">
          {savedJobs.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {savedJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No saved jobs yet"
              description="Start exploring opportunities and save the roles you want to revisit later."
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SavedJobsPage;
