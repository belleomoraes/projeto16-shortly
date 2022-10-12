import connection from "../database/db.js";
import { v4 as uuid } from "uuid";

async function signIn(req, res) {
  const { email } = req.body;
  const selectedUser = await connection.query("SELECT * FROM users WHERE email = $1", [email]);
  try {
    const token = uuid();
    await connection.query('INSERT INTO sessions ("userId", token) VALUES ($1, $2)', [
      selectedUser.rows[0].id,
      token,
    ]);
    res.status(200).send({ token: token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default signIn;
