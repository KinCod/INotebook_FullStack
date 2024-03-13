//database se connect hone wala code

const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://kinshuksharely12:lLAP1RUwnQKBfIJb@cluster0.ae8zc3k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; //127 because node js is 18. something version

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
