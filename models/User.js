const mongoose = require("mongoose");

/*
  This line right here says the mongoose object has a property called Schema.
  Take that property and assign it to a new variable called Schema.
  Equals to:
  const Schema = mongoose.Schema;
*/
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: String,
  credits: { type: Number, default: 0 }
});

mongoose.model("users", userSchema);
