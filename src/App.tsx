import { Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import HomePage from "./HomePage";
import Missing from "./Missing";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
