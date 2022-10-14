import connection from "../database/db.js";

async function showRanking(req, res) {
  try {
    const ranking = await connection.query(
      'SELECT users.id, users.name, COUNT(urls) AS "linksCount", SUM(urls."visitCount") AS "visitCount" FROM users LEFT JOIN urls ON users.id = urls."userId"  GROUP BY users.id ORDER BY "visitCount" DESC LIMIT 10'
    );

    res.status(200).send(ranking.rows);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default showRanking;
