import { useState } from 'react'
import api from '../../../api/api'
import toast from 'react-hot-toast';

interface IeduType {
  name : string,
  institution : string,
  StartYear : number | '',
  endYear : number | '';
}
function AddEducations() {
  const [formData, setFormData] = useState<IeduType>({
    name : '',
    institution : '',
    StartYear : '',
    endYear : '',
  });
  const handleEdu = async ()=>{
    try {
      const response:any = await api.post('/education/createEducation', formData);
      toast.success(response.data.message)
    } catch (error :any) {
      toast.error(error.response?.data?.message || "Something went wrong")
      console.error(error?.data?.message)

    }
  }

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData(prev => ({...prev,[name] : value}))
  }
  return (
    <div>
      <div>
        <div className="text-white my-20 flex justify-center items-center flex-col">
        <div className="border min-w-90 lg:min-w-130 border-blue-500 p-10 rounded-xl shadow-md shadow-sky-700 bg-blue-500/20">
          <h2 className="text-2xl font-bold text-center py-5">Add Edcations</h2>
          <div className="flex flex-col text-xl ">
            <label htmlFor="name">Course : </label>
            <input className="p-1 w-full text-sm rounded-lg mb-5 active:hover:ring-blue-500 hover:border-blue-500 border-2 outline-none" 
            name="name" 
            placeholder="Enter Course Name..."
            value={formData.name}
            onChange={handleChange}
            required
            type="text" />
            <label htmlFor="institution">institution :</label>
            <input
              className="p-1 w-full text-sm rounded-lg mb-5 active:hover:ring-blue-500 hover:border-blue-500 border-2 outline-none" 
              type="text"
              value={formData.institution}
              onChange={handleChange}
              required
              name="institution"
              placeholder="Enter college, Coaching etc... "
            />
            <label htmlFor="StartYear">Starting year :</label>
            <input
              className="p-1 w-full text-sm rounded-lg mb-5 active:hover:ring-blue-500 hover:border-blue-500 border-2 outline-none" 
              type="number"
              value={formData?.StartYear}
              onChange={handleChange}
              name="StartYear"
              placeholder="ex 2020 ..."
            />
            <label htmlFor="endYear">Ending year :</label>
            <input
              className="p-1 w-full text-sm rounded-lg mb-5 active:hover:ring-blue-500 hover:border-blue-500 border-2 outline-none" 
              type="number"
              name="endYear"
              value={formData.endYear}
              onChange={handleChange}
              placeholder="ex 2022 ..."
            />
            <button onClick={handleEdu} className="bg-linear-120 from-blue-600 to-indigo-500 hover:from-indigo-500 hover:to-blue-600 transition-all duration-300 rounded-xl py-1 my-10">Submit</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AddEducations
