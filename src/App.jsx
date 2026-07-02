import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Timeline from "./components/Timeline";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Background />
      <ScrollProgress />
      <Navbar />
      <main style={{ position: "relative", zIndex: 2 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Timeline />
        <Certificates />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;