import listRanking from "../repositories/ranking.repositories.js";

async function showRanking(req, res) {
  try {
    const result = await listRanking();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default showRanking;
