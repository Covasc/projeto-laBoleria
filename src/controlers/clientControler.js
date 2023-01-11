import { addClient } from "../repositories/clientRepository.js";
import { orderByClient } from "../repositories/orderRepository.js";

export async function addNewClient (request, response) {
    const clientInfo = request.body;

    try {
        await addClient(clientInfo);
        return response.sendStatus(201);

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    };
};

export async function getClientOrders(request, response) {
    const clientId = request.params.id;

    try{
        const { rows: orders } = await orderByClient(clientId);
        return response.send(orders).status(200)

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    };
};