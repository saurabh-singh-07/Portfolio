import { Request, Response } from "express";
import Contact from "../models/ContactModel.js";
import sendEmail from "../utils/sendEmail.js"
export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: "please complate all details...",
    });
  }


  const contact = await Contact.create({name, email, subject, message})

  await sendEmail({name, email, subject, message});

  return res.status(201).json({
    message : "message sent successfully...",
    data : contact
  })

  } catch (error : any) {
    return res.status(500).json({
        message : error.message
    })
  }
};


export const getContact = async (req:Request , res:Response)=>{
    try {
      const Contacts = await Contact.find({}).sort({createdAt : -1})

      if(!Contacts) {
        return res.status(400).json({
          message : "No data available...."
        })
      }

      return res.status(200).json({
        message : "Data fatch successfully...",
        length : Contacts.length,
        data : Contacts
      })
    } catch (error : any) {
      return res.status(500).json({
        message : error.message
      })
    }
}

export const markAsRead = async () => {}
export const deleteContact = async () => {}