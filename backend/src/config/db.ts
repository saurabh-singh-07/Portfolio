import mongoose from "mongoose"

const connectDB = async () : Promise<void>=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL as string);
        console.log("mongodb connected...");
        
    } catch (error : any) {
        console.error(error);
        process.exit(1);

    }
}
export default connectDB;
