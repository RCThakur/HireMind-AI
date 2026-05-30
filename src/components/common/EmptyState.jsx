function EmptyState({ title, description }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-10 text-center">
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-xl text-slate-400">{description}</p>
    </div>
  );
}

export default EmptyState;
