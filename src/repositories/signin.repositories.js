import connection from "../database/db.js";

async function insertSession(email, token) {
  const selectedUser = await connection.query("SELECT * FROM users WHERE email = $1", [email]);
  await connection.query('INSERT INTO sessions ("userId", token) VALUES ($1, $2)', [
    selectedUser.rows[0].id,
    token,
  ]);

  return;
}

export default insertSession;
