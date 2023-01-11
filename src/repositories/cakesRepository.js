import { db } from "../db/db.js";

async function isCakeRegistered(cakeName) {
    return db.query(
        `SELECT * FROM cakes
        WHERE name = $1;`,
        [cakeName]
    );
};

async function cakeRegister(cakeInfo) {
    return db.query(
        `INSERT INTO cakes (name, price, image, description)
        VALUES ($1, $2, $3, $4);`,
        [cakeInfo.name, cakeInfo.price, cakeInfo.image, cakeInfo.description]
    );
};

async function cakeById(id) {
    return db.query(
        `SELECT * FROM cakes
        WHERE id = $1;`,
        [id]
    );
};

export {isCakeRegistered, cakeRegister, cakeById};
