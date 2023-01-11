import { orderById, ordersByDate } from "../repositories/orderRepository.js";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
dayjs.extend(customParseFormat);


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

export async function isDateValid (request, response, next) {
    const date = request.query.date;
    
    if (!dayjs(date, 'YYYY-MM-DD', true).isValid() && date) {
        return response.status(400).send("Invalid date time. Expect YYYY-MM-DD")
    }

    return next();
}

export async function isAnyOrderAvaliable (request, response, next) {
    const date = request.query.date;

    try {
        const { rows: dayInfo } = await ordersByDate(date);
        const [ day ] = dayInfo;

        if (!day) {
            return response.sendStatus(404);
        }
        return next();
        
    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    }
}