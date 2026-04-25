import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home2 from "./components/Home2";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ContactEmail from "./components/ContactEmail";
import SectionDivider from "./components/SectionDivider";

function App() {
  return (
    <>
      <div>
        <Navbar />
        {/* <Home2 /> */}
        <Home />
        <SectionDivider label="About-me" />
        <AboutMe />
        <SectionDivider label="Skills" />
        <Skills />
        <SectionDivider label="Projects" />
        <Projects />
        {/* <Contact /> */}
        <SectionDivider label="Contact" />
        <ContactEmail />
        <Footer />
      </div>
    </>
  );
}

export default App;
