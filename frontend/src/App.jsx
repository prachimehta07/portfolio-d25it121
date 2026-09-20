import { useState, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PageLoader from "./components/PageLoader";
import lazyWithDelay from "./utils/lazyWithDelay";


const ProjectsPage = lazyWithDelay(() => import("./pages/ProjectsPage"));
const Contact = lazyWithDelay(() => import("./pages/Contact"));
const Tasks = lazyWithDelay(() => import("./pages/Tasks"));
const Login = lazyWithDelay(() => import("./pages/Login"));
const NotFound = lazyWithDelay(() => import("./pages/NotFound"));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio"}>
      <NavBar
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
      />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer name="Prachi Mehta" />
    </div>
  );
}

export default App;