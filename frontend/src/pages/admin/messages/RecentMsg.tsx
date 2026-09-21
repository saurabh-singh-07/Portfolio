import { motion } from "motion/react";
import { useEffect, useState } from "react";
import api from "../../../api/api";
import toast from "react-hot-toast";
interface RMsgTypes {
  _id: number;
  name: string;
  message: string;
  updatedAt: string;
  subject : string;
  isRead : boolean;
}


interface ShowMessageProps {
  setMessageCount: React.Dispatch<React.SetStateAction<number>>;
}

function RecentMsg({setMessageCount} : ShowMessageProps) {
  setMessageCount(9)

  const [data, setData] = useState<RMsgTypes[]>([]);
  const [isLoading , setIsLoading] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/Contact/getContactData");
      console.log(response);
      
      toast.success(response?.data?.message || "data fetch successfully...");
      setData(response?.data?.data);
    } catch (error :any) {
      toast.error("someThing wrong...");
      console.error (error)
    }
    finally{
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchData();
  },[])
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="dark:text-white text-slate-700/90 w-full bg-blue-600/10 border-2 border-blue-500/40 rounded px-5 py-10 my-20 lg:my-10"
    >
      <div className="flex justify-between px-5">
        <h2 className="text-2xl font-bold">Recent messages</h2>
        <button>View All</button>
      </div>
      <div>
        {data.map((data) => {
          const fletter : string = data.name.slice(0,2)
        return (
          <div className="flex justify-between py-6 px-3">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500/50 text-white flex items-center justify-center">
                {fletter}
              </div>
              <div className="">
                <p className="text-xl text-blue-600 dark:text-slate-200/90">
                  {data?.name}
                </p>
                <p className="text-sm dark:text-slate-300 text-slate-500 px-3 ">
                  {data?.message}
                </p>
              </div>
            </div>
            <p>{new Date(data.updatedAt).toLocaleDateString()}</p>
          </div>
        )})}
      </div>
    </motion.div>
  );
}

export default RecentMsg;
