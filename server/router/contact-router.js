import express from'express';
import  {contactForm, contactData } from '../controllers/contact-controller.js'

const router = express.Router();

router.route("/contact").post(contactForm);
router.route("/contects").get(contactData)

export default router;
