function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-10 dark:text-slate-400">
        <div>
          <p className="font-medium text-slate-800 dark:text-slate-200">
            HireMind AI
          </p>
          <p className="mt-1">
            A smart frontend-first job tracker and career assistant experience.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-slate-500 dark:text-slate-500">
          <span>Explore jobs</span>
          <span>Save favourites</span>
          <span>Get AI guidance</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
