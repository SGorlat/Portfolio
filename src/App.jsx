import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactEmail from "./components/ContactEmail";
import Footer from "./components/Footer";
import BackgroundGlyphs from "./components/BackgroundGlyphs";

function App() {
  return (
    <>
      <BackgroundGlyphs />
      <div id="top" />
      <Navbar />

      <main>
        <Home />

        <div className="profile-grid">
          <AboutMe />
          <Skills />
        </div>

        <Projects />

        <ContactEmail />
      </main>

      <Footer />
    </>
  );
}

export default App;
