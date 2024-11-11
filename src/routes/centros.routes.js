import { Router } from "express";
import {
  centro,
  centros,
} from "../controllers/centros.controller.js";

import { validateSchema } from "../middlewares/validator.middleware.js";
import { centroSchema } from "../schemas/centros.schema.js";

const router = Router();

router.post("/save", validateSchema(centroSchema), centro);

router.get("/centros",  centros);

export default router;


