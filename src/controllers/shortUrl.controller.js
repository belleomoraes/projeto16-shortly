import connection from "../database/db.js";
import { nanoid } from "nanoid";
async function shortenUrl(req, res) {
  const { url } = req.body;
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  const selectedSession = await connection.query("SELECT * FROM sessions WHERE token = $1", [
    token,
  ]);
  const shortUrl = nanoid();

  try {
    await connection.query('INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3)', [
      url,
      shortUrl,
      selectedSession.rows[0].userId,
    ]);
    res.status(201).send({ shortUrl: shortUrl });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default shortenUrl;
