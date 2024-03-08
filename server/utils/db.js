import mongoose from "mongoose";

const URI = "mongodb://localhost:27017/donation"
// mongoose.connect(URL);
const connectDb = async()=>{
    // console.log(`${URI}`)
try {
    await mongoose.connect(URI);
    console.log("connection Succesfull to Db");
} catch (error) {
    console.error("db not connect");
    process.exit(0);
}

}

export {connectDb};