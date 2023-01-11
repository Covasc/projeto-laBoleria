import { cakeRegister } from "../repositories/cakesRepository.js";

export async function addNewCake(request, response) {
    const cakeInfo = request.body;

    try {
        await cakeRegister(cakeInfo);
        return response.sendStatus(201);

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    };
};