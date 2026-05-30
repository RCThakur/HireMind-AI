import InsightCard from "../components/common/InsightCard";

const strengths = [
  "Strong alignment with frontend and entry-level MERN roles.",
  "Good project direction for React, components, and UI-focused work.",
  "Potential to stand out with one polished full-stack project and better problem-solving consistency.",
];

const recommendations = [
  "Focus on 2-3 target job roles instead of applying everywhere.",
  "Strengthen JavaScript fundamentals and DSA basics for screening rounds.",
  "Showcase project features like authentication, dashboards, filters, and API integration.",
];

function AIInsightsPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 dark:bg-slate-950 dark:text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
            AI Insights
          </p>
          <h1 className="mt-3 text-3xl font-bold md:text-5xl">
            Smart career guidance for clearer job decisions
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            This frontend version shows sample AI-driven suggestions that help
            users understand role fit, strengths, weaknesses, and next actions
            before applying.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <InsightCard
            label="Suggested Direction"
            title="Frontend + MERN Roles"
            description="Your profile looks best aligned with React-focused internships, junior frontend roles, and beginner-friendly MERN positions."
            accent="cyan"
          />
          <InsightCard
            label="Main Skill Gap"
            title="DSA + Real Projects"
            description="Improving JavaScript problem-solving and shipping one polished end-to-end project can significantly improve interview confidence."
            accent="emerald"
          />
          <InsightCard
            label="Best Immediate Move"
            title="Focused Applications"
            description="Apply to roles that match your strongest stack, then tailor projects and resume bullets around that direction."
            accent="violet"
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">
              AI Summary
            </p>
            <h2 className="mt-3 text-2xl font-bold">
              You are close to being a strong applicant for junior web roles
            </h2>
            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Your current direction is strongest for frontend and
              beginner-level full-stack positions. The next improvement should
              not be learning everything at once. Instead, build a sharper
              portfolio around React, MERN, authentication, job dashboards, and
              stronger JavaScript confidence.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-cyan-500/10 p-5">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Role Match
                </p>
                <p className="mt-2 text-3xl font-bold text-cyan-600 dark:text-cyan-300">
                  84%
                </p>
              </div>
              <div className="rounded-2xl bg-emerald-500/10 p-5">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Project Strength
                </p>
                <p className="mt-2 text-3xl font-bold text-emerald-600 dark:text-emerald-300">
                  76%
                </p>
              </div>
              <div className="rounded-2xl bg-violet-500/10 p-5">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Interview Readiness
                </p>
                <p className="mt-2 text-3xl font-bold text-violet-600 dark:text-violet-300">
                  68%
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
              Strength Areas
            </p>
            <ul className="mt-6 space-y-4">
              {strengths.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-300">
            Recommended Actions
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {recommendations.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-white/10 dark:bg-slate-900/70"
              >
                <p className="text-sm font-medium text-slate-500 dark:text-slate-500">
                  Step 0{index + 1}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIInsightsPage;
