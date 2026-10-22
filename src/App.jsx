import usePageEffects from "./hooks/usePageEffects";
import Background from "./components/Background/Background";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Certifications from "./components/Certifications/Certifications";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import BeyondCoding from "./components/BeyondCoding/BeyondCoding";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./responsive.css";

export default function App() {
  usePageEffects();
  return (
    <>
      <Background />
      <Cursor />
      <div className="page">
        <Header />
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <About />
        <BeyondCoding />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
