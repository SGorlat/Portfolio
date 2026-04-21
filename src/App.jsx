import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home2 from "./components/Home2";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div>
        <Navbar />
        {/* <Home2 /> */}
        <Home />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
