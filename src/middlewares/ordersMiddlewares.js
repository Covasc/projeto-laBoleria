import { orderById } from "../repositories/orderRepository.js";

export async function isOrderIdValid (request, response, next) {
    const id = request.params.id;

    try {
        const { rows: orderData } = await orderById(id);
        const [order] = orderData;

        if (!order) {
            return response.sendStatus(404);
        }
        return next();

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    }
}