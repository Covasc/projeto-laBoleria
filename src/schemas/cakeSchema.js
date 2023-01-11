import joi from "joi";

const cakeSchema = joi.object({
    name: joi.string().min(2).required(),
    price: joi.number().greater(0),
    description: joi.string(),
    image: joi.string().uri()
});

const orderSchema = joi.object({
    clientId: joi.number().required(),
    cakeId: joi.number().required(),
    quantity: joi.number().greater(0).less(5).required(),
    totalPrice: joi.number().required()
})

export {cakeSchema, orderSchema};