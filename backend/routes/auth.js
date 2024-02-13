//initially using routes imported from express

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const express = require("express");
//input the User.js schema from the models of mongoose to use it here
const User = require("../models/User");
const router = express.Router();

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
  "/login",
  [body("name").notEmpty(), body("password").isLength({ min: 6 })],
  async (req, res) => {
    const result = validationResult(req);

    if (result.isEmpty()) {
      //agar api ne jo diya vo validation ko follow krra tab enter kro
      //store to db

      try{
        //finding if particular email is already in database
          let us = await User.findOne({ email: req.body.email }); //finding User model vich ki if jo input body mai hai api k vih same db mai hai k nhi
          //jo ye User hai this is the DB and ismai hum dhundrhe if email exists or no

          //agar hai db mai tab we send a bad request to the backend
          if (us) {
            return res
              .status(400)
              .json({ errors: { msg: "Email already exists." } });
          }
          //agar nhi hai db mai toh store krlo

          //idhar were using the hasing of bycryptjs
          // 1. added salt
          // 2.Merged salt with the password that was sent from the body of server and then together hashed
          const salt = await bcrypt.genSaltSync(10);
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
          var authtoken = jwt.sign(data, "shhhhh"); //webtoken from data and secret

          //res to api
          return res.send(secPass); //responding authorisation token id to the server
      }catch(err){
          console.log(err);
      }
      
    }

    res.send({ errors: result.array() });
  }
);

module.exports = router;
