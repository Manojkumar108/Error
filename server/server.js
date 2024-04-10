
import express from 'express';
import authRouter from './router/auth-router.js';
import { connectDb } from './utils/db.js';
import { errorMiddleware } from './middleware/error-middleware.js';
import contactRoute from './router/contact-router.js'
import cors from 'cors'




const app = express();
const PORT = 5000;

//cors policy
const corsOptions = {
    origin:"http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
}

app.use(cors(corsOptions));
app.use(express.json());//middleware for using json paylods . use before any routes

app.use("/api/auth", authRouter);//use after initilization of app
app.use("/api/form",contactRoute);
app.use(errorMiddleware)



connectDb().then(()=>{

    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });
})

