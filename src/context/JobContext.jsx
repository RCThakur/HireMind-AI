import { createContext, useContext, useEffect, useMemo, useState } from "react";
import jobsData from "../data/jobsData";

const JobContext = createContext();

export function JobProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState(() => {
    const storedJobs = localStorage.getItem("savedJobs");
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedMode, setSelectedMode] = useState("All");

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  }, [savedJobs]);

  const toggleSaveJob = (job) => {
    const exists = savedJobs.some((item) => item.id === job.id);

    if (exists) {
      setSavedJobs((prev) => prev.filter((item) => item.id !== job.id));
    } else {
      setSavedJobs((prev) => [...prev, job]);
    }
  };

  const isJobSaved = (id) => savedJobs.some((item) => item.id === id);

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.skills.join(" ").toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "All" || job.category === selectedCategory;

      const matchesMode = selectedMode === "All" || job.mode === selectedMode;

      return matchesSearch && matchesCategory && matchesMode;
    });
  }, [searchTerm, selectedCategory, selectedMode]);

  return (
    <JobContext.Provider
      value={{
        jobs: jobsData,
        filteredJobs,
        savedJobs,
        searchTerm,
        selectedCategory,
        selectedMode,
        setSearchTerm,
        setSelectedCategory,
        setSelectedMode,
        toggleSaveJob,
        isJobSaved,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  return useContext(JobContext);
}
