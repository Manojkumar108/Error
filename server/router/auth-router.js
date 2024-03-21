import express from'express';
import * as authcontoller from '../controllers/auth-controller.js'; //when are using ECMA6 we have to write the extantinon after path
const router = express.Router();


// router.get("/",(req,res)=>{
//     res.json({
//         name:"Auth-router",
//         satus:"succes"

//     })
// })

router.route("/").get(authcontoller.home)

router.route("/register").get(authcontoller.register).post(authcontoller.register);
router.route("/login").post(authcontoller.login);
export default router;