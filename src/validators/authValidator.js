const Joi = require('joi');

const authSchema = Joi.object({
    email: Joi.string().email().required().label("Email"),

    password: Joi.string()
        .min(8)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/)
        .required()
        .label("Password")
        .messages({
            "string.min": "Password, Must have at least 8 characters",
            "string.pattern.base": "Must include at least one uppercase letter, one lowercase letter, one number, and one special character"
        }),

    phoneNumber: Joi.string().pattern(/^[0-9+]+$/).required().label("Phone Number")
        .messages({
            "string.pattern.base": "Phone number must contain only digits or '+'"
    }),

    lastName: Joi.string().min(3).max(50).required().label("Last Name"),

    firstName: Joi.string().min(3).max(50).optional().label("First Name"),

    sex: Joi.string().valid('Male', 'Female').required().label("Sex"),

    address: Joi.string().min(5).max(255).optional().label("Address"),

    country: Joi.string().min(2).max(50).required().label("Country"),
    
    birthDate: Joi.string().required().label("Birth Date"),


})
module.exports = {
    authSchema,
};