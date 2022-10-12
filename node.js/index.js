const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//  app.use()
app.use("/", (req, res) => {
  res.send("Hello World !");
});

app.listen(8080, () => {
  console.log("http://localhost:8080");
});
