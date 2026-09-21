import mongoose, { Document, mongo } from "mongoose";


interface IContact extends Document{
    name : string,
    email : string,
    subject : string,
    message : string,
    isRead? : boolean,
    createdAt?: Date

}

const ContactSchema = new mongoose.Schema<IContact>({
    name : {
        type : String,
        trim : true,
        lowercase : true,
        required : true,
    },
    email : {
        type : String,
        trim : true, 
        required : true,
    },
    subject : {
        type : String,
        trim : true, 
        required : true,
    },
    message : {
        type : String,
        trim : true,
        required : true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
},{
    timestamps : true,
})

const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;