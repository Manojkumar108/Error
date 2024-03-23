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
        const user = await userExist.comparepassword(password);

        if (user) {
            res.status(200).json({
                msg:"login Successful",
                token:await userExist.generateToken(),
                userId:userExist._id.toString(),
                
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
export {home,register,login};