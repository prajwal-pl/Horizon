import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.ts";

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/api/v1/user", userRouter);

app.listen(4000, () => {
  console.log("Server running on port:4000");
});
