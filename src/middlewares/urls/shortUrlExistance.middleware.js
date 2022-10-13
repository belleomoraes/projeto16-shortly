import connection from "../../database/db.js";

async function isShortUrlExists(req, res, next) {
  const { shortUrl } = req.params;

  const selectedUrl = await connection.query('SELECT * FROM urls WHERE "shortUrl" = $1', [
    shortUrl,
  ]);
  if (selectedUrl.rows.length === 0) {
    return res.status(404).send({ message: "Esta url encurtada não existe" });
  }
  next();
}

export default isShortUrlExists;
