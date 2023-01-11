import { Router } from "express";
import { addNewCake } from "../controlers/cakeController.js";
import { isCakeAvaliable } from "../middlewares/cakesMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { cakeSchema } from "../schemas/cakeSchema.js";

const router = Router();

router.post("/cakes", validateSchema(cakeSchema), isCakeAvaliable, addNewCake);

export default router;