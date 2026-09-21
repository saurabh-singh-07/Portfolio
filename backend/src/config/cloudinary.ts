import "dotenv/config";
import {v2 as cloudinary} from 'cloudinary'

const cloudName =process.env.CLOUDINARY_CLOUD_NAME
const apiKey = process.env.CLOUDINARY_API_KEY
const apiSecret= process.env.CLOUDINARY_API_SECRET

if (!cloudName) {
  throw new Error("CLOUDINARY_CLOUD_NAME is missing");
}
if (!apiKey) {
  throw new Error("CLOUDINARY_API_KEY is missing");
}

if (!apiSecret) {
  throw new Error("CLOUDINARY_API_SECRET is missing");
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
});

console.log("Cloudinary configured successfully");

export default cloudinary;