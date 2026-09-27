import { lazy } from "react";
import { SpotLightBg } from "./components/SpotLightBg";
import Projects from "./pages/public/Projects";
import Contact from "./pages/public/Contact";
import About from "./pages/public/About";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/public/Home";
import Skills from "./pages/public/Skills";
import Navbar from "./layout/Navbar";
import ScrollToTop from "react-scroll-to-top";
import { FaArrowUp } from "react-icons/fa";
const AddProject = lazy (()=>import("./pages/admin/Projects/AddProjects"))
const Addskills = lazy (()=>import("./pages/admin/skills/Addskills"))
const Messages = lazy (()=>import("./pages/admin/messages/Messages"))
const Dashboard = lazy (()=>import("./pages/admin/Dashboard"))
const AdminLayout = lazy (()=>import("./pages/admin/Ad-layout/AdminLayout"))
const AddEducations = lazy (()=> import("./pages/admin/Educations/AddEducations"));
const AdminLogin = lazy (()=> import("./pages/admin/Ad-component.tsx/AdminLogin"))
import { Toaster } from "react-hot-toast";
import Educations from "./components/Educations";
import Protected from "./context/Protected";

function App() {
  return (
    <div className="w-full mx-auto max-w-375">
    <div className=" flex flex-col ">
      <Toaster/>
      <SpotLightBg />

      <Routes>
        {/* public routes  */}
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/Educations" element={<Educations />} />
        </Route>

        {/* ======== login routes ======  */}
       <Route path="/admin/aj/login" element={<AdminLogin/>}/>

        {/* ====== Admin Routes ===== */}
        <Route element={<Protected/>}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="messages" element={<Messages />} />
          <Route path="add-projects" element={<AddProject />} />
          <Route path="updateProject/:id" element={<AddProject />} />
          <Route path="add-skills" element={<Addskills />} />
          <Route path="updateSkill/:id" element={<Addskills/>}/>
          <Route path="add-educations" element={<AddEducations />} />
          <Route path="updateEducations/:id" element={<AddEducations />} />
          <Route path="add-Services" element={"#"} />
          
        </Route>
        </Route>
      </Routes>
      <ScrollToTop
        smooth
        component={<FaArrowUp className="text-white font-bold" />}
        style={{ color: "white" }}
        className="!bg-gradient-to-r !from-blue-700 !to-violet-800 hover:!from-blue-800 hover:!to-violet-900 !rounded-full !p-1.5 !shadow-lg flex justify-center items-center "
      />
    </div>
        
    </div>
  );
}

export default App;

