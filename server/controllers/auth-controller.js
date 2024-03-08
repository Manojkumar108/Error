import { User } from "../models/user-model.js";

const home = async(req,res) =>{
    try {
        
        res.json({
            name:"Auth-router using extra route",
            app: "controller",
            satus:"succes"
    
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
    let userCreated
    if(userExist){
        return res.json({message:"Email already exists"});
    }
    else{
        userCreated= await User.create({name,email,phone,address,password})
    }
    res.json({
        message:userCreated
    })
    } catch (error) {
        res.status(400).json({message:"internal server error"})
    }
    
}
export {home,register};