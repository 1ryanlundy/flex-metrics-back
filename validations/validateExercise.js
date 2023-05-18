const Joi = require("joi");
const createValidator = require("./createValidator");

const exerciseSchema = Joi.object({
    name: Joi.string().required(),
    exercise_type: Joi.string().required(),
    muscle_group: Joi.string().required()
});

module.exports = createValidator(exerciseSchema);