const { Router } = require("express");

const userdetails = require("../model/user");

const userRouter = Router();

userRouter.post("/postuser", async (req, res) => {
  const data = req.body;
  const userData = new userdetails(data);
  userData.save((err, success) => {
    if (err) {
      return res.status(500).send({ message: "error occureded" });
    }
    return res
      .status(201)
      .send({ message: "created successfully", userData: success });
  });
});

// get

userRouter.get("/get", async (req, res) => {
  const Data = await userdetails.find();
  res.send(Data);
});

// post

userRouter.put("/putuser/:id", async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const userData1 = await userdetails.findByIdAndUpdate({ _id: id }, payload);
  res.send(userData1);
});


// delete
userRouter.delete("/deleteuser/:id", async (req, res) => {
    const id = req.params.id;
    // const payload = req.body;
    const userData2 = await userdetails.findByIdAndDelete({ _id: id });
    res.send({message:"delete",userData2:userData2});
  });

module.exports = userRouter;
