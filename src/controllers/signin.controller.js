import { v4 as uuid } from "uuid";
import insertSession from "../repositories/signin.repositories.js";

async function signIn(req, res) {
  const { email } = req.body;
  try {
    const token = uuid();
    await insertSession(email, token);
    res.status(200).send({ token: token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default signIn;
