import joi from "joi";

const userSchema = joi.object({
    name: joi.string().trim().required(),
    email: joi.string().trim().required(),
    password: joi.string().trim().required(),
    confirmPassword: joi.string().trim().required(),
})

function validateUserSchema(req, res, next) {
    const validation = userSchema.validate(req.body, {abortEarly: false})
    const {password, confirmPassword} = req.body

    if (validation.error) {
        return res.status(422).send({message: validation.error.message})
    }

    if (password !== confirmPassword) {
        return res.status(422).send({message: "A senha e a confirmação da senha devem ser iguais"})
    }
    next()
}

export default validateUserSchema;