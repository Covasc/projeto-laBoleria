import { allOrders, orderById, orderRegister, ordersByDate } from "../repositories/orderRepository.js";


export async function addNewOrder (request, response) {
    const orderInfo = request.body;

    try {
        await orderRegister(orderInfo);
        return response.sendStatus(201);

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    };
}

export async function getAllOrders(request, response) {
    const date = request.query.date;

    try {
        const { rows: ordersData } = date ? await ordersByDate(date) : await allOrders();
        const orders = ordersData.map(
            (order) => (
                {client:{id: order.clientId,
                    name: order.clientName,
                    address: order.clientAdress,
                    phone: order.clientPhone},
                cake:{id: order.cakeId,
                    name: order.cakeName,
                    price: order.cakePrice,
                    description: order.cakeDescription,
                    image: order.cakeImage},
                orderId: order.orderId,
                createdAt: order.createdAt,
                quantity: order.quantity,
                totalPrice: order.totalPrice}
            )
        )
        return response.send(orders).status(200);

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    };
}

export async function getOrdersById(request, response) {
    const id = request.params.id;
    try {
        const { rows: ordersData } = await orderById(id);
        const orders = ordersData.map(
            (order) => (
                {client:{id: order.clientId,
                    name: order.clientName,
                    address: order.clientAdress,
                    phone: order.clientPhone},
                cake:{id: order.cakeId,
                    name: order.cakeName,
                    price: order.cakePrice,
                    description: order.cakeDescription,
                    image: order.cakeImage},
                orderId: order.orderId,
                createdAt: order.createdAt,
                quantity: order.quantity,
                totalPrice: order.totalPrice}
            )
        )
        return response.send(orders).status(200);

    } catch(error) {
        console.log(error);
        return response.sendStatus(500);
    };
}