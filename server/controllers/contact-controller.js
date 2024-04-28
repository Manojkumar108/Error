import { Contact } from "../models/contact-model.js";


const contactForm = async(req,res)=>{
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({
            message:"message sent successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message:"message not sent",
        });
    }
}

const contactData = async(req,res)=>{
    try {
        const messages = await Contact.find();
        res.json({messages})
    } catch (error) {
        console.error("error while featching data",error);
        res.sendStatus(500)
    }
}

export  {contactForm,contactData};