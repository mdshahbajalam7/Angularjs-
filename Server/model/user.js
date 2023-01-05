const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  city: String,
  state: String,
  phone: Number,
});


const userdetails = model("users",UserSchema)

module.exports = userdetails