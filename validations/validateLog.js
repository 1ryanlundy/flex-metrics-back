const Joi = require("joi");
const createValidator = require("./createValidator");

const logSchema = Joi.object({
    date: Joi.date().required(),
    exercise_id: Joi.number().required(),
    description: Joi.string(),
    sets_reps: Joi.string().required(),
    set1: Joi.number(),
    set2: Joi.number(),
    set3: Joi.number().allow(null).optional(),
    set4: Joi.number().allow(null).optional(),
    set5: Joi.number().allow(null).optional(),
    set6: Joi.number().allow(null).optional()
});

module.exports = createValidator(logSchema);