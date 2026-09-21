import express from 'express';
import { createContact, deleteContact, getContact, markAsRead } from '../controllers/contactControllers.js';

const ContactRouter = express.Router();

ContactRouter.post("/", createContact);
ContactRouter.get("/getContactData", getContact);
ContactRouter.patch('/markAsRead/:id', markAsRead)
ContactRouter.delete("/deleteContact/:id", deleteContact)
export default ContactRouter;