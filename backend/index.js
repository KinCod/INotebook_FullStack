const connectToMongo = require("./db.js");

connectToMongo();

const express = require("express");
const app = express();
const port = 5000;

app.use(express.json())       //this acts as middleware bw the api and our application

app.get("/", (req, res) => {
  res.send("Hello Sir!");
});

//available routes
app.use('/api/notes' , require('./routes/notes'));   //idhar /api/notes se hum is json ko access kar skte
app.use('/api/auth' ,require('./routes/auth'))  //inko endpoint bolte (eg. ye hai ep for ./routes/auth.js)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}/`);
});
 