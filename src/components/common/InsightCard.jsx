function InsightCard({ label, title, description, accent = "cyan" }) {
  const accentStyles = {
    cyan: "text-cyan-600 dark:text-cyan-300",
    emerald: "text-emerald-600 dark:text-emerald-300",
    violet: "text-violet-600 dark:text-violet-300",
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 dark:border-white/10 dark:bg-white/5">
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <h3 className={`mt-2 text-xl font-semibold ${accentStyles[accent]}`}>
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
}

export default InsightCard;
