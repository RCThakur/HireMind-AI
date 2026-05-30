import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import { JobProvider } from "./context/JobContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <JobProvider>
        <RouterProvider router={router} />
      </JobProvider>
    </ThemeProvider>
  );
}

export default App;
