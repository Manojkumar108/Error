import { z } from "zod";

// Define Zod schema for the model
const signupSchema = z.object({
  name: z.string()
    .trim()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(255, { message: "Name should not be more than 255 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email should not be more than 255 characters" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Phone must be at least 10 characters" }),
  address: z.object({
    state: z.string(),
    city: z.string(),
    pin: z.string(),
  }),
  password: z.string()
    .trim()
    .min(7, { message: "Password must be at least 7 characters" })
    .max(1024, { message: "Password can't be greater than 1024 characters" }),
});

export { signupSchema };
