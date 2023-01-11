import { Router } from "express";
import { addNewClient, getClientOrders } from "../controlers/clientControler.js";
import { isPhoneAvaliable, isValidClientId } from "../middlewares/clientMiddleware.js";
import { validateSchema } from "../middlewares/schemaValidator.js";
import clientSchema from "../schemas/clientSchema.js";

const router = Router();

router.post("/clients", validateSchema(clientSchema), isPhoneAvaliable, addNewClient);
router.get("/clients/:id/orders", isValidClientId, getClientOrders)

export default router;