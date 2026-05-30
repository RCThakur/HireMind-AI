import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">Page not found</h1>
        <p className="mt-4 text-slate-400">
          The page you are looking for does not exist in HireMind AI yet.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
