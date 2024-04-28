import mongoose from "mongoose";
import dotenv from 'dotenv'
import path, { dirname } from 'path';
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url)
const __dirName = dirname(__fileName)

//finding the absolute path
const envPath =path.resolve(__dirName,'.env')
dotenv.config({path:envPath})


const URI = process.env.MONGODB_URI //|| "mongodb://localhost:27017/donation"
// mongoose.connect(URL);
const connectDb = async()=>{
    // console.log(`${URI}`)
try {
    await mongoose.connect(URI);
    console.log("connection Succesfull to Db");
    console.log("path of env file is=>",envPath);
} catch (error) {
    console.error("db not connect",error);
    console.log("mongodb_uri=>",URI);
    console.log("process.env.MONGODB_URI",process.env.MONGODB_URI);
    process.exit(0);
}

}

export {connectDb};