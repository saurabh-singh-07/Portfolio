import React, { useEffect, useState } from "react";
import api from "../../../api/api";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

function Addskills() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    imgUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const getDatabyId = async () => {
    const response = await api.get(`/api/Skill/getSkillById/${id}`);
    console.log(response?.data?.data);
    setFormData({
      name: response?.data?.data?.name,
      category: response?.data?.data?.category,
      imgUrl: response?.data?.data?.imgUrl,
    });
  };
  useEffect(() => {
    getDatabyId();
  }, [id]);

  const handleSubmit = async () => {
    try {
      const response = await api.post("/api/Skill/createSkill", formData);
      console.log(response);
      toast.success(response?.data?.message);
      setFormData({
        name: "",
        category: "",
        imgUrl: "",
      });
    } catch (error: any) {
      console.error(error);
      toast.error("something wrong...");
    }
  };
  const updateSkill = async () => {
    try {
      const response = await api.put(`/api/Skill/updateSkill/${id}`, formData);

      toast.success(response?.data?.data?.message || "Skill Updated successfully...");
      setFormData({
        name: "",
        category: "",
        imgUrl: "",
      });
    } catch (error : any) {
      toast.error(error?.data?.message || "something wrong...");
      console.error(error);
    }
  };
  return (
    <section>
      <div className="text-white my-20 flex justify-center items-center flex-col">
        <div className="border min-w-90 lg:min-w-130 border-blue-500 p-10 rounded-xl shadow-md shadow-sky-700 bg-blue-500/20">
          <h2 className="text-2xl font-bold text-center py-5">Add Skills</h2>
          <div className="flex flex-col text-xl ">
            <select
              className="text-slate-800/90 bg-slate-200/70 rounded-xl px-2 my-3"
              name="category"
              value={formData.category}
              onChange={handleChange}
              id=""
            >
              <option value="">Select Category</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="Languages">Languages</option>
              <option value="Tools">Tools</option>
              <option value="Other">Other</option>
            </select>
            <label htmlFor="name">Name : </label>
            <input
              className="p-1 w-full text-sm rounded-lg mb-5 active:hover:ring-blue-500 hover:border-blue-500 border-2 outline-none"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Skill Name..."
              type="text"
            />
            <label htmlFor="imgUrl">Enter image url :</label>
            <input
              value={formData.imgUrl}
              onChange={handleChange}
              className="p-1 w-full text-sm rounded-lg mb-5 active:hover:ring-blue-500 hover:border-blue-500 border-2 outline-none"
              type="text"
              name="imgUrl"
              placeholder="Enter Logo name (React-icons).. "
            />

            <button
              onClick={handleSubmit}
              className="bg-linear-120 from-blue-600 to-indigo-500 hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 rounded-xl py-1 mt-10"
            >
              Add Skill
            </button>
            <button
              onClick={updateSkill}
              className="bg-linear-120 from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 transition-all duration-300 rounded-xl py-1 my-1 mb-9"
            >
              Update Skill
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Addskills;
