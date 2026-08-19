import Footer from "../../layout/Footer";
import HeroSection from "../../components/HeroSection";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <HeroSection />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
