import connection from "../database/db.js";
import bcrypt from "bcrypt";

async function signUp(req, res) {
  const { name, email, password } = req.body;
  try {
    const passwordHash = bcrypt.hashSync(password, 10);
    await connection.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [
      name,
      email,
      passwordHash,
    ]);

    console.log(passwordHash)
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default signUp;
