import { isPhoneRegistered, clientById } from "../repositories/clientRepository.js";

export async function isPhoneAvaliable(request, response, next) {
    const clientInfo = request.body;

    try {
        const { rows: clientData } = await isPhoneRegistered(clientInfo.phone);
        const [client] = clientData;

        if (client) {
            return response.sendStatus(409);
        };

        return next();

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    };
};

export async function isValidClientId(request, response, next) {
    const clientInfo = request.body;

    try {
        const { rows: clientData } = await clientById(clientInfo.clientId);
        const [client] = clientData;

        if (!client) {
            return response.sendStatus(404);
        };

        return next();

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    };

};