import connection from "../../database/db.js";

async function checkUrlOwner(req, res, next) {
  const { authorization } = req.headers;
  const { id } = req.params;
  const token = authorization?.replace("Bearer ", "");

  const selectedSession = await connection.query(
    'SELECT * FROM urls JOIN sessions ON urls."userId" = sessions."userId" WHERE urls.id = $1 AND sessions.token = $2',
    [id, token]
  );

  if (selectedSession.rows.length === 0) {
    return res.sendStatus(401);
  }

  next();
}

export default checkUrlOwner;
