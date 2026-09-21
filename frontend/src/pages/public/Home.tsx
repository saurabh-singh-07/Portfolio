import Footer from "../../layout/Footer";
import HeroSection from "../../components/HeroSection";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Educations from "../../components/Educations";

function Home() {
  return (
    <>     

      <HeroSection />
      <Educations/>
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
