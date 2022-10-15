import connection from "../database/db.js";

async function createUser(name, email, passwordHash) {
  await connection.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [
    name,
    email,
    passwordHash,
  ]);

  return;
}

export default createUser;
