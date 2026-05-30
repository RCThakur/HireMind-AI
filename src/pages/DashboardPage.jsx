import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function DashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:flex-row md:items-center">
          <div>
            <p className="text-sm text-cyan-300">Dashboard</p>
            <h1 className="mt-1 text-3xl font-bold">Welcome, {user?.name}</h1>
            <p className="mt-2 text-slate-400">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Logout
          </button>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Saved Jobs</p>
            <h2 className="mt-2 text-3xl font-bold text-cyan-300">0</h2>
            <p className="mt-2 text-sm text-slate-500">
              Jobs saved by the user will appear here next.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">AI Insights</p>
            <h2 className="mt-2 text-3xl font-bold text-emerald-300">0</h2>
            <p className="mt-2 text-sm text-slate-500">
              Career guidance results will be shown here.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-400">Applications</p>
            <h2 className="mt-2 text-3xl font-bold text-violet-300">0</h2>
            <p className="mt-2 text-sm text-slate-500">
              Track application progress in upcoming steps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
