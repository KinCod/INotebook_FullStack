const mongoose = require("mongoose");
const { Schema } = mongoose;

const NotesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, //ab idhar directly user store hojayega (foreign key bnri hai ye ⁡⁢⁣⁣𝕕𝕠𝕞𝕒𝕚𝕟/𝕔𝕠𝕝𝕦𝕞𝕟⁡)
    ref: "user", //dusre model ka naam
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tag: {
    type : String,
    required : true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("notes", NotesSchema); //export a mongoose model as name user
