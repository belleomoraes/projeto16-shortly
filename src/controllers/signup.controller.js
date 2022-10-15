import bcrypt from "bcrypt";
import createUser from "../repositories/signup.repositories.js";

async function signUp(req, res) {
  const { name, email, password } = req.body;
  try {
    const passwordHash = bcrypt.hashSync(password, 10);
    await createUser(name, email, passwordHash);
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default signUp;
