//database se connect hone wala code

const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/note"; //127 because node js is 18. something version

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
