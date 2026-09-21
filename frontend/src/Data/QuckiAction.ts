import { BiMessage, BiPlus } from "react-icons/bi";
import { FaGraduationCap, FaStar } from "react-icons/fa";
import { GiSuitcase } from "react-icons/gi";
import type { ActionTypes } from "../assets/assets";

export const data: ActionTypes[] = [
  {
    id: 1,
    name: "Add Projects",
    Logo: BiPlus,
    style: "text-purple-500 bg-purple-500/10 border-purple-500/30",
    link:'/admin/add-projects'
  },
  {
    id: 2,
    name: "Add Experience",
    Logo: GiSuitcase,
    style: "text-green-500 bg-green-500/10 border-green-500/30",
    link:'#'
  },
  {
    id: 3,
    name: "Add Education",
    Logo: FaGraduationCap,
    style: "text-blue-500 bg-blue-500/10 border-blue-500/30",
    link:'/admin/add-educations'
  },
  {
    id: 4,
    name: "Add Skill",
    Logo: FaStar,
    style: "text-yellow-500 bg-yellow-500/10 border-yellow-500/30",
    link: '/admin/add-skills'
  },
  {
    id: 5,
    name: "View Messages",
    Logo: BiMessage,
    style: "text-purple-500 bg-purple-500/10 border-purple-500/30",
    link: '/admin/messages'
  },
];