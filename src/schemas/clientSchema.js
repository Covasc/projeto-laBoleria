import joi from "joi";

const clientSchema = joi.object({
    name: joi.string().required(),
    address: joi.string().required(),
    phone: joi.string().pattern(new RegExp(`[0-9]{10,11}`)).min(10).max(11).required()
});

export default clientSchema;