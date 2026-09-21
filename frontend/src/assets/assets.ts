import type { Dispatch, SetStateAction } from "react";
import type { IconType } from "react-icons";

export interface IUser{
    email: string;
    password?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface EduTypes {
  _id: string;
  name: string,
  institution : string,
  StartYear : number | '',
  endYear : number | ''
}

export type Skill = {
  _id: string;
  name: string;
  category: string;
  imgUrl: string;
  createdAt: string;
  updatedAt: string;
};

export interface Project {
  _id : string;
  name: string;
  description: string;
  liveLink: string;
  githubLink: string;
  imgUrl: string;
  skills: string[];
}


export interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export interface datatypes {
  id: string;
  name: string;
  Logo: IconType;
  link: string;
}

export interface propsTypes {
  toggleSideBar: boolean;
  setToggleSideBar: Dispatch<SetStateAction<boolean>>;
}

export interface ActionTypes {
  id: number;
  name: string;
  Logo: IconType;
  style: string;
  link: string;
}

export interface Detailtype {
  id: string;
  name: string;
  total: number;
  description: string;
  style: string;
  Logo: IconType;
}
