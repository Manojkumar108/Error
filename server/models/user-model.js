import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
        

    },
    email:{
        type:String,
        required:true,

    },
    phone:{
        type:Number,
        required:true,
        

    },
    address:{
        state:{
            type:String,


        },
        city:{
            type:String,

        },
        pin:{
            type:Number,

        }
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});

//jwt


userSchema.pre("save",async function(next){
    console.log("Pre Method",this);
    const user =this;
    if(!user.isModified('password')){
        next();
    }
    try {
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password=hash_password;
        next();

    } catch (error) {
        next(error);
    }
})

//passward verification
userSchema.methods.comparepassword = async function (password) {
    return bcrypt.compare(password,this.password);
    
}

userSchema.methods.generateToken = async function (){
    try {

        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },"kkkkkk")
    } catch (error) {
        console.error(error);
        
    }

};

// define the model or the collection name
// collection name should be starts with capital name
const User =new mongoose.model("User",userSchema)
export{User};