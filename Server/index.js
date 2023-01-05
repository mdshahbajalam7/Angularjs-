const express = require("express");
const connection = require("./database/db");
const userRouter = require("./Router/User");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("curd operstion userdata");
});

app.use("/user", userRouter);

app.listen(3500, async () => {
  await connection;
  console.log("connction connect db");
  console.log(`server running at http://localhost:3500`);
});
