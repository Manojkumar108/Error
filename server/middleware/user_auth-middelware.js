import jwt from 'jsonwebtoken';
import { User } from '../models/user-model.js';



const userAuthMiddelware =async(req,res,next)=>{
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({msg:"unauthorized http request token not found"})
    }

    // console.log("token from middelware",token);

    const jwtToken = token.replace("Bearer", "").trim();
    console.log("token after trim ",jwtToken);

    try {
        const decoded =jwt.verify(jwtToken,"kkkkkk")
        console.log(decoded);

        const userData = await User.findOne({email:decoded.email}).select({password:0})
        req.user = userData;
        req.token=token;
        req.userId=userData._id;
        console.log("user data from model schema",userData);
        next()
    } catch (error) {
        console.log("unuthrizer access",error);
    }

}

export default userAuthMiddelware;