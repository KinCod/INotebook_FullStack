//initially using routes imported from express
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const express = require("express");
//input the User.js schema from the models of mongoose to use it here
const User = require("../models/User");
const router = express.Router();
const fetchUser = require("../middleware/fetchUser");

//using validation
const { body, validationResult } = require("express-validator");

//Creating a user using : POST "/api/auth/". Doesn't require any authorisation
//so as making using so see the format from user schema in "./model/user.js"

// Without Validation
// router.post("/",(req, res) => {
//                //will send this body using thunderclient
//   //res.json([]);          //converted into json

//   //Way 1 to create a collection in db
//     // User.create({               //jo bhi aaya api se usko store kro as json into db following the user schema
//     //   name: req.body.name,
//     //   email: req.body.email,
//     //   password: req.body.password,
//     // }).then((user) => res.json(user));     //jo bhi data hai user mai stored vo sidha respond kro back to api

//   //Way 2 to create a collection in db
//     const user = User(req.body);       //schema ko follow krte huye api ki body ka data req krke store kro user mai
//     user.save();        //save in db
//     console.log(req.body)
//   });

//With validation
//iss post request ka naam hi LOGIN hai
router.post(
  "/signin",
  [body("name").notEmpty(), body("password").exists()],
  async (req, res) => {
    const success = false;
    const result = validationResult(req);

    // const email = req.body.email;
    // const name = req.body.name;
    // const pass = req.body.password;
    // return res.json({name,email,pass})

    if (result.isEmpty()) {
      // agar api ne jo diya vo validation ko follow krra tab enter kro
      // store to db

      try {
        //finding if particular email is already in database
        let us = await User.findOne({ email: req.body.email }); //finding User model vich ki if jo input body mai hai api k vih same db mai hai k nhi
        //jo ye User hai this is the DB and ismai hum dhundrhe if email exists or no

        //agar hai db mai tab we send a bad request to the backend
        if (us) {
          return res
            .status(400)
            .json({success, error: "Email already exists." });
        }
        //agar nhi hai db mai toh store krlo

        //idhar were using the hasing of bycryptjs
        // 1. added salt
        // 2.Merged salt with the password that was sent from the body of server and then together hashed
        const salt = bcrypt.genSaltSync(10);
        console.log(salt);
        secPass = await bcrypt.hash(req.body.password, salt); //password with added salt and then hashed, returns a promise that used await

        //3. This hashed password is now sent to db(ab authentication k time again same process hogi and db wala hashed and jo user ne pass bhara uska has compare hoga and then theyll login only if both hashes are identical)
        us = await User.create({
          //jo bhi aaya api se usko store kro as json into db following the user schema
          name: req.body.name,
          email: req.body.email,
          password: secPass,
        });

        const data = {
          //this is data that stores and object named user and is sent to jwt
          user: {
            id: us.id, //this id is the id for the user created in the data base
          },
        };
        const authtoken = jwt.sign(data, "shhhhh"); //webtoken from data and secret m(returns a promise)
        //ab as token will be provided to the user so s/he dont have to login again and again

        //res to api
        return res.send({success:true, authtoken }); //responding authorisation token id to the server
        //ye upar as an object return kra but aise kyu ni likhe --> {authtoken : authtoken} (in json format)
        //this is because as ES6 use krre so directly the js knows ki agar koi var daala hai toh same name k liye data daalo {name} = {name : "data inside name"}
      } catch (err) {
        return res.json({success,err});
      }
    }

    return res.send({success, errors: result.array() });
  }
);

//authenticating a user
router.post(
  "/login",
  [
    body("password", "Add Password of size atleast 6char").exists(),
    body("email", "Email Does not Exist").isEmail(),
  ], //name not needed as obv user login hi krra (sign up nhi)
  async (req, res) => {
    let success = false;
    const result = validationResult(req);
    if (!result.isEmpty()) return res.json({ success, error: result.array() });

    const { email, password } = req.body; //data request kra from api (imagined ki joh data page pe user ne input kra to login vohi req kra backend ne from the page)

    try {
      let user = await User.findOne({ email: email }); //ye db mai pass find krke puri row return krdega
      if (!user)
        return res
          .status(400)
          .json({ success, error: "Please enter Correct Credentials" }); //ye toh if galat input daala

      //if user exist krta tab we check ki password sahi ya nhi
      //sos ye bhi pehle hash hoga salt dlega phir db mai cmpare hoga and then btaega if correct or not
      const pass = user.password;
      const wpass = password[0];
      let passCompare = await bcrypt.compare(wpass, pass);

      //comparing jo entered pass tha and jo DB mai password hai

      if (!passCompare)
        return res
          .status(400)
          .json({ success, error: "Please enter Correct Credentials" });

      //ifpass bhi sahi hogya tab bas token phirse bhej denge
      const data = {
        user: { id: user._id },
      };

      const authToken = jwt.sign(data, "shhhhh");
      return res.send({ success: true, authToken });
    } catch {
      return res
        .status(400)
        .json({ success, error: `Some Internal Error Occured` }); //works on time like when database mai data ho hi naa etc etc
    }
  }
);

//Get logged in user detail
//so basically using authtoken hum user id nikal lenge and then uske baad uss id se user ka data find kar lenge except pass and then
// show kardenge user ko

router.post("/getuser", fetchUser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findOne(userId).select("-password"); //password k alawa sab select karna

    res.send(user);
  } catch (err) {
    return res.json({ err });
  }
});

module.exports = router;
