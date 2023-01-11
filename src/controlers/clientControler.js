import { addClient } from "../repositories/clientRepository.js";

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