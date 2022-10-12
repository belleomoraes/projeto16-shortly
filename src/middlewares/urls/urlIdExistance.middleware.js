import connection from "../../database/db.js";

async function isUrlExists(req, res, next) {
  const { id } = req.params;

  const selectedUrl = await connection.query('SELECT * FROM urls WHERE id = $1', [id]);

  if (selectedUrl.rows.length === 0) {
    return res.status(404).send({ message: "Esta url não existe" });
  }
  next();
}

export default isUrlExists;
