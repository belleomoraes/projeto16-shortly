import connection from "../database/db.js";

async function listRanking() {
    const ranking = await connection.query(
        'SELECT users.id, users.name, COUNT(urls) AS "linksCount", SUM(urls."visitCount") AS "visitCount" FROM users LEFT JOIN urls ON users.id = urls."userId"  GROUP BY users.id ORDER BY "visitCount" DESC LIMIT 10'
      );
      
      console.log(ranking.rows)
      return ranking.rows
}

export default listRanking