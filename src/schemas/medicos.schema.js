import { z } from "zod";

export const medicoSchema = z.object({
  rut: z
    .string({
      required_error: "Rut is required",
    })
    .regex(/^\d{7,8}-[0-9kK]$/, {
      message: "Invalid RUT format, should be xxxxxxxx-y or xxxxxxx-y",
    }),
  apellido: z.string({
    required_error: "apellido is required",
  }),
  nombre: z.string({
    required_error: "Nombre is required",
  }),
  especialidad: z.string({
    required_error: "Especialidad is required",
  }),
  email: z
    .string()
    .email({
      required_error: "Email is required",
    })
    .email({
      message: " Invalid email",
    }),
});
