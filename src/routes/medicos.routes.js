import { Router } from "express";
import {
  medico,
  medicos,
} from "../controllers/medicos.controller.js";

import { validateSchema } from "../middlewares/validator.middleware.js";
import { medicoSchema } from "../schemas/medicos.schema.js";

const router = Router();

router.post("/savemedicos", validateSchema(medicoSchema), medico);

router.get("/medicos",  medicos);

export default router;


