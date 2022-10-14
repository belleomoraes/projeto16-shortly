import express from "express";
import cors from "cors";
import signUpRouter from "./routers/signup.router.js";
import signInRouter from "./routers/signin.router.js";
import urlRouter from "./routers/url.router.js";
import userRouter from "./routers/user.router.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(signUpRouter);
server.use(signInRouter);
server.use(urlRouter);
server.use(userRouter);

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log("Server running on port " + port);
});
