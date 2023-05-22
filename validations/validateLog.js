const Joi = require("joi");
const createValidator = require("./createValidator");

const logSchema = Joi.object({
    date: Joi.date().required(),
    exercise_name: Joi.string().required(),
    description: Joi.string().allow("").optional(),
    sets_reps: Joi.string().required(),
    set1: Joi.allow(""),
    set2: Joi.allow(""),
    set3: Joi.allow(""),
    set4: Joi.allow(""),
    set5: Joi.allow(""),
    set6: Joi.allow("")
});

module.exports = createValidator(logSchema);