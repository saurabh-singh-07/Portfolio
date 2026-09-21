import { useEffect, useState } from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import api from "../api/api";
import toast from "react-hot-toast";
import type { EduTypes } from "../assets/assets";

function Educations() {
  const [data, setData] = useState<EduTypes[]>([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response: any = await api.get("/Education/getEducation");
      console.log("API data:", response.data.data[0]);

      setData(response.data.data[0]);

      toast.success(response.message);
    } catch (error: any) {
      console.error(error.message);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="my-20">
      <div className="my-20 text-center ">
        <h2 className=" dark:text-slate-100 text-slate-700/90 text-3xl md:text-4xl font-bold">
          My Academic Journey
        </h2>
        <p className="dark:text-slate-300 text-slate-500 py-5">
          A glimpse into my educational background and the experiences that
          shaped my journey as a developer.
        </p>
      </div>
      <VerticalTimeline>
        {data.map((item: EduTypes) => {
          console.log(item);
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work text-slate-700 dark:text-slate-300"
              contentStyle={{ background: "rgba(59,130, 246,0.3)", color: "" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={`${item.StartYear} - ${item.endYear}`}
              iconStyle={{ background: "rgba(59, 130, 246)", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">{item?.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.institution}
              </h4>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Educations;
