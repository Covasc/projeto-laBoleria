import { Router } from "express";
import { addNewClient } from "../controlers/clientControler.js";
import { isPhoneAvaliable } from "../middlewares/clientMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import clientSchema from "../schemas/clientSchema.js";

const router = Router();

router.post("/clients", validateSchema(clientSchema), isPhoneAvaliable, addNewClient);
router.get("/clients/:id/orders", )

export default router;