import { motion } from "motion/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../../api/api";
import type { Project } from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

interface ShowProjectProps {
  setProjectCount: React.Dispatch<React.SetStateAction<number>>;
}


export default function AllProjects({setProjectCount} :ShowProjectProps ) {
  const nevigate = useNavigate();
  const [data, setData] = useState<Project[] | []>([]);
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    getData();
  },[])

  const getData = async () => {
    try {
      const response = await api.get("/api/Project/getProject");
      setData(response?.data?.projects);
      console.log(response?.data?.projects);
      setProjectCount(response?.data?.count)
      toast.success("data fetch successfully...")
      
    } catch (error : any) {
      toast.error("Something wrong...")
      console.error(error)
    }
  }

  
  const handleUpdate = (id :string)=> {
   nevigate(`/admin/updateProject/${id}`)
  }

   const handledelete = async(id : string)=> {
    try {
      const confirm = window.confirm(
        "Are you sure you want to delete this skill ?",
      );
      if(!confirm)return;
    const response = await api.delete(`/api/Project/deleteProject/${id}`)
    toast.success(response.data?.message || "Project deleted succuessfully...");
    setData((prev)=> prev.filter((project)=> project._id !== id))
    } catch (error : any) {
      toast.error("something wrong...");
      console.error(error)
    }
   }
   const visibleProjects = showAll
  ? data
  : data.slice(0, 3);
  return (
    <motion.section
    initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
       className="my-10 w-full bg-green-500/10 border border-green-500/60 ">
      <div className="dark:text-slate-50 text-slate-700/90 mt-5 py-5 flex justify-between mx-8">
        <h1 className="text-2xl md:text-3xl font-bold">Recont Projects</h1>

        <button onClick={()=> setShowAll(!showAll)} className="px-2 py-1 bg-blue-500/30 rounded border border-blue-500 ">
          {showAll ? "show less" : "view ALL"}
        </button>
      </div>

      <div>
        {visibleProjects.map((project:Project) => (
          <div key={project._id} className="dark:text-white  text-slate-700/90 flex md:justify-start gap-4 mx-6 my-10">
            <div className="flex gap-5 bg-yellow-600/10 border border-yellow-400/60 p-3 w-full ">
              <div className="">
                <img
                  className="md:w-25 md:h-15 w-35 h-25 rounded-md bg-black"
                  src={project.imgUrl}
                  alt="project image"
                />
              </div>

              <div className="flex md:flex-row flex-col gap-x-10">
                <div className="md:w-75">
                  <h2 className="font-bold">{project.name}</h2>
                  
                </div>
                <div>
                  <p>Publihed</p>
                  <p>{new Date(project.updatedAt ?? Date.now()).toLocaleDateString()}</p>
                </div>
                <div className="flex items-center gap-x-4">
                  <button onClick={()=> handleUpdate(project._id)} className="bg-blue-500 text-white px-3 py-1 rounded-bl rounded-tr hover:scale-105 shadow hover:shadow-blue-400 transition-all duration-300">Update</button>
                  <button onClick={()=> handledelete(project._id)} className="bg-red-500 text-white px-3 py-1 rounded-bl rounded-tr hover:scale-105 shadow hover:shadow-red-400 transition-all duration-300">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

