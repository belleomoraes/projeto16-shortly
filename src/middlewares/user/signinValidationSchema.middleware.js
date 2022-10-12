import joi from "joi";
import bcrypt from "bcrypt";
import connection from "../../database/db.js";

const userSchema = joi.object({
  email: joi.string().trim().required(),
  password: joi.string().trim().required(),
});

async function validateUserSchema(req, res, next) {
  const validation = userSchema.validate(req.body, { abortEarly: false });
  const { email, password } = req.body;
  const selectedUser = await connection.query("SELECT * FROM users WHERE email = $1", [email]);

  if (validation.error) {
    return res.status(422).send({ message: validation.error.message });
  }

  if (
    selectedUser.rows.length === 0 ||
    !bcrypt.compareSync(password, selectedUser.rows[0].password)
  ) {
    return res.status(401).send({ message: "E-mail ou senha incorretos" });
  }

  next();
}

export default validateUserSchema;
