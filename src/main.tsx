import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { PageIndexProvider } from "./context/PageIndexProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageIndexProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </PageIndexProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
