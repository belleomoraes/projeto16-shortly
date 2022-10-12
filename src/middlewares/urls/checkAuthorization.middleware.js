import connection from "../../database/db.js";

async function checkAuthorization(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  const selectedSession = await connection.query("SELECT * FROM sessions WHERE token = $1", [
    token,
  ]);

  if (selectedSession.rows.length === 0 || !token) {
    return res.sendStatus(401);
  }

  next();
}

export default checkAuthorization;
