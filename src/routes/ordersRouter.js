import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidator.js";
import { isValidCakeId } from "../middlewares/cakesMiddleware.js";
import { isValidClientId } from "../middlewares/clientMiddleware.js";
import { orderSchema } from "../schemas/cakeSchema.js";
import { addNewOrder, getAllOrders, getOrdersById } from "../controlers/orderController.js";
import { isOrderIdValid } from "../middlewares/ordersMiddlewares.js";

const router = Router();

router.post("/order", validateSchema(orderSchema), isValidCakeId, isValidClientId, addNewOrder)
router.get("/orders", getAllOrders);
router.get("/orders/:id", isOrderIdValid, getOrdersById);

export default router;