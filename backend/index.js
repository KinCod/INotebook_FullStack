const connectToMongo = require("./db.js");

connectToMongo();

const express = require("express");
const app = express();
const port = 5000;

var cors = require('cors')
app.use(cors(
))

app.use(express.json())       //this acts as middleware bw the api and our application

app.get("/", (req, res) => {
  res.status(200).json({message:"Hello Doston!"});
});

//available routes
app.use('/api/notes' , require('./routes/notes.js'));   //idhar /api/notes se hum is json ko access kar skte
app.use('/api/auth' ,require('./routes/auth.js'))  //inko endpoint bolte (eg. ye hai ep for ./routes/auth.js)

app.listen(port, () => {
  console.log(`iNotebook Backend listening on port ** http://localhost:${port}/ **`);
});
 