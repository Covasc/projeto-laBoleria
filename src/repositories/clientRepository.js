import { db } from "../db/db.js";

async function isPhoneRegistered (phone) {
    return db.query(
        `SELECT * FROM clients
        WHERE phone = $1;`,
        [phone]
    );
};

async function addClient (clientData) {
    return db.query(
        `INSERT INTO clients (name, address, phone)
        VALUES ($1, $2, $3);`,
        [clientData.name, clientData.address, clientData.phone]
    );
};

async function clientById (id) {
    return db.query(
        `SELECT * FROM clients
        WHERE id = $1;`,
        [id]
    );
};

export {isPhoneRegistered, addClient, clientById} ;