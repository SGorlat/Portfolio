import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Homecopy from "./components/Homecopy";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Homecopy />
        <AboutMe />
        <Skills />
        <Contact />
      </div>
    </>
  );
}

export default App;
