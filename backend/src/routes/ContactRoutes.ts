import express from 'express';
import { createContact, deleteContact, getContact, markAsRead } from '../controllers/contactControllers.js';
import protect from '../middleware/protect.js';

const ContactRouter = express.Router();

ContactRouter.post("/", createContact);
ContactRouter.get("/getContactData", getContact);
ContactRouter.patch('/markAsRead/:id',protect, markAsRead)
ContactRouter.delete("/deleteContact/:id",protect, deleteContact)
export default ContactRouter;