import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import { AboutPage, HomePage, Missing, ProjectsPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
