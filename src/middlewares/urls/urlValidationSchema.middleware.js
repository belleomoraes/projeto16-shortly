import joi from "joi";

const userSchema = joi.object({
  url: joi.string().uri().required(),
});

function validateUrlSchema(req, res, next) {
  const validation = userSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    return res.status(422).send({ message: validation.error.message });
  }

  next();
}

export default validateUrlSchema;
