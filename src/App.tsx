import { Route, Routes, useLocation } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import { AboutPage, HomePage, Missing, ProjectsPage } from "./pages";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<HomeLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="*" element={<Missing />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
