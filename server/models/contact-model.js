import { Schema,model } from "mongoose";

const contactSchema =new  Schema({
    name:{
        type:String,
        required :true,
    },

    email:{
        type:String,
        required:true,
    },
    message:{
        type:String,
        required:true,
    },

});

const Contact = new model("contact",contactSchema);
export{Contact};