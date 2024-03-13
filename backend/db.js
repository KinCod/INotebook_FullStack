//database se connect hone wala code

const mongoose = require("mongoose");

require('dotenv').config();            //used to acces the envs
const mongoURI = process.env.MONGO_URL;

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(console.error(err));
    });
};

module.exports = connectToMongo;
