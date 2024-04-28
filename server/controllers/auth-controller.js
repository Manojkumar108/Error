import { User } from "../models/user-model.js";
// import bcrypt from 'bcryptjs'


const home = async(req,res) =>{
    try {
        
        res.json({
            name:"Auth-router using extra route",
            app: "controller",
            satus:"succes",
    
        })
    } catch (error) {
        console.log(error);
    }


}

const register = async(req,res)=>{
    try {
        console.log(req.body)
    const {name,email,phone,address,password} =req.body;
    const userExist=await User.findOne({email:email})
    
    if(userExist){
        return res.json({message:"Email already exists"});
    }
    //hashing password using bcrypt



   
       const userCreated= await User.create({name,email,phone,address,password})
    
    res.status(201).json({
        message:userCreated,token:await userCreated.generateToken(),userId:userCreated._id.toString(),
    })
    } catch (error) {
        res.status(400).json({message:"internal server error"})
    }
    
}

const login = async (req,res) =>{
    try {
        const {email,password}=req.body;

        const userExist = await User.findOne({email})
        if(!userExist){
            return res.status(400).json({
                massage:"invalid data"
            })
        }
        //compareing the password
        const user = await userExist.comparepassword(password);
        const userName= userExist.name;

        if (user) {
            res.status(200).json({
                msg:"login Successful",
                token:await userExist.generateToken(),
                userId:userExist._id.toString(),
                userName,
                
                
                
            })
        }
        else{
            res.json({
                msg:"invalid password"
            })
        }

    } catch (error) {
       next(error)
    }
}

//get all registers users details
const getUsers = async(req,res)=>{
    try {
        const user = await User.find().lean();
        res.json({user})
    } catch (error) {
        console.error("error while finding users",error);
        res.sendStatus(500)
    }
}

//get user details
const user = async(req,res)=>{
    try {
        const userData = await req.user;
        console.log(userData);
        res.status(200).json(userData)
        
    } catch (error) {
        console.log(`error whil geting user detail ${error}`);
    }
}


//verify the user email with nodemailer

export {home,register,login,getUsers,user};