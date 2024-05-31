const { z } = require('zod');

const signupSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Name must be at least 3 characters" })
    .max(50, { message: "Name must not be more than 50 characters" })
    .nonempty({ message: "Name is required" }),

  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" })
    .nonempty({ message: "Email is required" }),

  password: z
    .string()
    .trim()
    .min(4, { message: "Password must be at least 4 characters" })
    .max(50, { message: "Password must not be more than 50 characters" })
    .nonempty({ message: "Password is required" })
});

module.exports = signupSchema;
