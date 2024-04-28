import express from'express';
import * as authcontoller from '../controllers/auth-controller.js'; //when are using ECMA6 we have to write the extantinon after path
import { signupSchema } from '../validators/auth-validator.js';
import validate from '../middleware/auth-middleware.js';
import userAuthMiddelware from '../middleware/user_auth-middelware.js'
const router = express.Router();



// router.get("/",(req,res)=>{
//     res.json({
//         name:"Auth-router",
//         satus:"succes"

//     })
// })

router.route("/").get(authcontoller.home)

router.route("/register").get(authcontoller.register).post(validate(signupSchema) ,authcontoller.register);
router.route("/login").post(authcontoller.login);
router.route("/users").get(authcontoller.getUsers);
router.route("/user").get(userAuthMiddelware,authcontoller.user)
export default router;