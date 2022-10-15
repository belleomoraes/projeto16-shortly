import listUserData from "../repositories/user.repositories.js";
async function showUserData(req, res) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  try {
    const result = await listUserData(token);

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}

export default showUserData;
