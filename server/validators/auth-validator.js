import z from "zod";

// creating an object Schema

const signupSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "name muast be atleast 3 character" })
    .max(255, { message: "name should not be more than 255 character" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({message:"invalid email address"})
    .min(3, { message: "email must be at least 3 characters" })
    .max(255, { message: "email should not be more than 255 character" }),
  phone: z
    .string({ required_error: "phone  is required" })
    .trim()
    .min(10, { message: "phone must be at least 10 characters" })
    .max(10, { message: "phone should not be more than 10 character" }),
    address: z.object({
        state: z.string(),
        city: z.string(),
        pin: z.string(),
      }),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password must be at least of 6 characters" })
    .max(1024, { message: "password can't be greater than 1024 characters" }),
});

export {signupSchema};