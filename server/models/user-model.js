import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name :{
        type:String,
        require:true,

    },
    email:{
        type:String,
        require:true,

    },
    phone:{
        type:Number,
        require:true,

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
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
});

//jwt


// define the model or the collection name
// collection name should be starts with capital name
const User =new mongoose.model("User",userSchema)
export{User};