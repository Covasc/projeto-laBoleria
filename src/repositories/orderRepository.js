import { db } from "../db/db.js";

async function orderRegister (orderInfo) {
    return db.query(
        `INSERT INTO orders ( "clientId", "cakeId", quantity, "totalPrice")
        VALUES ($1, $2, $3, $4);`,
        [orderInfo.clientId, orderInfo.cakeId, orderInfo.quantity, orderInfo.totalPrice]
    );
}

async function allOrders () {
    return db.query(
        `SELECT orders.id as "orderId", orders."createdAt", orders.quantity, orders."totalPrice",
        orders."clientId", clients.name as "clientName", clients.address as "clientAdress", 
        clients.phone as "clientPhone", orders."cakeId", cakes.name as "cakeName", cakes.price as "cakePrice",
        cakes.description as "cakeDescription", cakes.image as "cakeImage"
        FROM orders
        JOIN clients ON orders."clientId" = clients.id
        JOIN cakes ON orders."cakeId" = cakes.id`
    );
}

async function orderById (id) {
    return db.query(
        `SELECT orders.id as "orderId", orders."createdAt", orders.quantity, orders."totalPrice",
        orders."clientId", clients.name as "clientName", clients.address as "clientAdress", 
        clients.phone as "clientPhone", orders."cakeId", cakes.name as "cakeName", cakes.price as "cakePrice",
        cakes.description as "cakeDescription", cakes.image as "cakeImage"
        FROM orders
        JOIN clients ON orders."clientId" = clients.id
        JOIN cakes ON orders."cakeId" = cakes.id
        WHERE orders.id = $1`,
        [id]
    )
}

async function orderByClient (id) {
    return db.query(
        `SELECT orders.id as "orderId", orders.quantity, orders."createdAt", orders."totalPrice",
        cakes.name as "cakeName"
        FROM orders
        JOIN cakes ON orders."cakeId" = cakes.id
        WHERE orders."clientId" = $1;`,
        [id]
    )
}

async function ordersByDate (date) {
    return db.query(
        `SELECT orders.id as "orderId", orders."createdAt", orders.quantity, orders."totalPrice",
        orders."clientId", clients.name as "clientName", clients.address as "clientAdress", 
        clients.phone as "clientPhone", orders."cakeId", cakes.name as "cakeName", cakes.price as "cakePrice",
        cakes.description as "cakeDescription", cakes.image as "cakeImage"
        FROM orders
        JOIN clients ON orders."clientId" = clients.id
        JOIN cakes ON orders."cakeId" = cakes.id
        WHERE orders."createdAt"::date = $1`,
        [date]
    )
}

export {orderRegister, allOrders, orderById, orderByClient, ordersByDate};