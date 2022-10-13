import connection from "../database/db.js";
import { nanoid } from "nanoid";
async function createShortUrl(req, res) {
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

async function showFilteredUrl(req, res) {
  const { id } = req.params;
  try {
    const selectedUrl = await connection.query(
      'SELECT id, "shortUrl", url  FROM urls WHERE id = $1',
      [id]
    );
    res.status(200).send(selectedUrl.rows);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

async function openUrl(req, res) {
  const { shortUrl } = req.params;
  const selectedUrl = await connection.query('SELECT * FROM urls WHERE "shortUrl" = $1', [
    shortUrl,
  ]);

  const increasedVisitCount = Number(selectedUrl.rows[0].visitCount) + 1;
  const idUrl = selectedUrl.rows[0].id
  try {
    await connection.query('UPDATE urls SET "visitCount" = $1 WHERE "shortUrl" = $2', [
      increasedVisitCount,
      shortUrl,
    ]);
    res.redirect(`/urls/${idUrl}`)
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export { createShortUrl, showFilteredUrl, openUrl };
