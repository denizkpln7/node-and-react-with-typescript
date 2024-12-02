import Joi from "joi"

export const createValidation=Joi.object({
    name:Joi.string().required().min(3).message("Name must be at least 3 characters"),
    title:Joi.string().required().min(3).message("Title must be at least 3 characters"),
    message:Joi.string().required().min(25).message("Message must be at least 25 characters"),
    email:Joi.string().email().required().min(8).message("Email must be valid"),
})


