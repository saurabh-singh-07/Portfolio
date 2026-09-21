import { BsSuitcase } from "react-icons/bs";
import { FaGift, FaGraduationCap, FaStar } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import type { datatypes } from "../assets/assets";

export const data: datatypes[] = [
  {
    id: "1",
    name: "Add Projects",
    Logo: BsSuitcase,
    link: "/admin/add-projects",
  },
  {
    id: "2",
    name: "Add Education",
    Logo: FaGraduationCap,
    link: "/admin/add-educations",
  },
  {
    id: "3",
    name: "Add Skills",
    Logo: FaStar,
    link: "/admin/add-skills",
  },
  {
    id: "4",
    name: "Add Services",
    Logo: FaGift,
    link: "/admin/add-services",
  },
  {
    id: "5",
    name: "View Messages",
    Logo: FaMessage,
    link: "/admin/messages",
  },
];