import { cakeById, isCakeRegistered } from "../repositories/cakesRepository.js";

export async function isCakeAvaliable(request, response, next) {
    const cakeInfo = request.body;

    try {
        const { rows: cakeData } = await isCakeRegistered(cakeInfo.name);
        const [cake] = cakeData;

        if (cake) {
            return response.sendStatus(409);
        }
        return next();

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    }
}

export async function isValidCakeId(request, response, next) {
    const cakeInfo = request.body;

    try {
        const { rows: cakeData } = await cakeById(cakeInfo.cakeId);
        const [cake] = cakeData;

        if (!cake) {
            return response.sendStatus(404);
        }
        return next();

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    };

};