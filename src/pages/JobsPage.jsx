import JobCard from "../components/jobs/JobCard";
import JobFilters from "../components/jobs/JobFilters";
import EmptyState from "../components/common/EmptyState";
import { useJobs } from "../context/JobContext";

function JobsPage() {
  const { filteredJobs } = useJobs();

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-16 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          Jobs
        </p>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">
          Discover jobs that fit your skills and career direction
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Search roles, filter opportunities, and save the most relevant jobs
          for later.
        </p>

        <div className="mt-10">
          <JobFilters />
        </div>

        <div className="mt-10">
          {filteredJobs.length > 0 ? (
            <div className="grid gap-6 lg:grid-cols-2">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No matching jobs found"
              description="Try changing your search keywords or filter options to explore more opportunities."
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default JobsPage;
