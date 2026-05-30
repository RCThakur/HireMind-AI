import { createBrowserRouter, Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HomePage from "../pages/HomePage";
import JobsPage from "../pages/JobsPage";
import JobDetailsPage from "../pages/JobDetailsPage";
import SavedJobsPage from "../pages/SavedJobsPage";
import AIInsightsPage from "../pages/AIInsightsPage";
import NotFoundPage from "../pages/NotFoundPage";

function MainLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "jobs",
        element: <JobsPage />,
      },
      {
        path: "jobs/:id",
        element: <JobDetailsPage />,
      },
      {
        path: "saved-jobs",
        element: <SavedJobsPage />,
      },
      {
        path: "ai-insights",
        element: <AIInsightsPage />,
      },
    ],
  },
]);

export default router;
