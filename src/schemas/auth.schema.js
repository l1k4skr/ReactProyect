import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "Username is required",
  }),
  email: z
    .string()
    .email({
      required_error: "Email is required",
    })
    .email({
      message: " Invalid email",
    }),
    rut: z
    .string({
      required_error: "Rut is required",
    })
    .regex(/^\d{7,8}-[0-9kK]$/, {
      message: "Invalid RUT format, should be xxxxxxxx-y or xxxxxxx-y",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password Incorrect",
    }),
});
