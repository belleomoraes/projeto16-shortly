import connection from "../../database/db.js";

async function isUserExists(req, res, next) {
  const { email } = req.body;

  const selectedUser = await connection.query('SELECT * FROM users WHERE email = $1', [email]);

  if (selectedUser.rows.length !== 0) {
    return res.status(409).send({ message: "Este usuário já existe" });
  }
  next();
}

export default isUserExists;
