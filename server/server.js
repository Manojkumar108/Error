import { configDotenv } from 'dotenv';
import express from 'express';
import router from './router/auth-router.js';
import { connectDb } from './utils/db.js';


const app = express();
const PORT = 5000;

app.use(express.json());//middleware for using json paylods . use before any routes

app.use("/api/auth", router);//use after initilization of app



connectDb().then(()=>{

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });
})

