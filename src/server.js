import express from "express";
import cors from "cors";
import signUpRouter from "./routers/signup.router.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(signUpRouter);

const port = process.env.PORT || 4000;

server.get('/eu', async (req, res) => {
    res.sendStatus(201);
})
server.listen(port, () => {
  console.log("Server running on port " + port);
});
