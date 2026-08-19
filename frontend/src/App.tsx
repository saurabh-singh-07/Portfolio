import { SpotLightBg } from "./components/SpotLightBg";
import Projects from "./pages/public/Projects";
import Contact from "./pages/public/Contact";
import About from "./pages/public/About";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home";
import Skills from "./pages/public/Skills";
import Navbar from "./layout/Navbar";
import Dashboard from "./pages/admin/Dashboard";

function App() {
  return (
    <div className="max-w-375 flex flex-col justify-center">
      <SpotLightBg />
      <Dashboard/>
      {/* <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/skills" element={<Skills/>}/>
      </Routes> */}
      
    </div>
  );
}

export default App;

// https://nidnasser.me/   https://abhishekganvir.vercel.app/
