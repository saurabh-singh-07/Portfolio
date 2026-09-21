import { CiSettings } from "react-icons/ci";
import { FaGraduationCap } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GoProject } from "react-icons/go";
import { GrContact, GrUser } from "react-icons/gr";
import type { datatypes } from "../assets/assets";

export const SideBarData :datatypes[]= [
    {
        id : '1',
        name : "About",
        Logo : GrUser,
        link : '/about',
    },{
        id : '2',
        name : "Skills",
        Logo : GiSkills,
        link : '/skills',
    },{
        id : '3',
        name : "Projects",
        Logo : GoProject,
        link : '/projects',
    },{
        id : '4',
        name : "Contact",
        Logo : GrContact,
        link : '/contact',
    },
    {
        id : '5',
        name : "Educations",
        Logo : FaGraduationCap,
        link : '/educations',
    },{
        id : '6',
        name : "Setting",
        Logo : CiSettings,
        link : '#',
    },
]