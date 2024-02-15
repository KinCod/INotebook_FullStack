const jwt = require("jsonwebtoken");

//middleware ek func hai and it takes req,res,and next->ye directly apne baad ek next func ko run krvayega
//go to auth route and last endpoint pe jo async func hai vo hoga iska next
const fetchuser = (req, res, next) => {
  //so abhi hum token laaenge from the header (khud dalenge abhi into the header)
  const token = req.header("auth-token");

  if (!token)
    res.status(401).send({ error: "Please Authenticate using a valid token" });

  try {
    const data = jwt.verify(token, "shhhhh"); //idhar se humein id miljayegi as humne token and secret key dedi

    req.user = data;           //as humne req khudse change krdi so jaise hi ab, req.user krenge toh we get header wala data

  } catch (err) {
    return res.status(401).send({ error: "Invalid Token" });
  }

  next()
};

module.exports = fetchuser;
