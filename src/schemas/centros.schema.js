import { z } from "zod";

export const centroSchema = z.object({
  sucursal: z.string({
    required_error: "Sucursal name is required",
  }),
  nbox: z.string({
    required_error: "Number of box is required",
  }),
  direccion: z.string({
    required_error: "Direction is required",
  }),
});
