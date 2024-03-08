//initially using routes imported from express

const express = require("express");
const fetchuser = require("../middleware/fetchUser");
const router = express.Router();
const {
  body,
  validationResult,
  ExpressValidator,
} = require("express-validator"); //using validator

//importing the notes wala model
const Notes = require("../models/Notes");

//Route to get all the Notes.
//idhar we'll again use the MIDDLEWARE to get id of user and then use that id to get the notes
router.get("/fetchNotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id }); // finding note with paticular id
    res.json(notes); //converted into json
  } catch (err) {
    return res.status(400).json({ msg: "Error Occured" });
  }
});

//add notes for user
//so obv sbse pehle toh userr ko fetch krenge and then uss id k liye notes add krenge
//so joh bhi note add kra in page vo api accept kregi and phir uss user id ko dekhkar uss particular db mai store kar degi
router.post(
  "/addNotes",
  fetchuser,
  [body("title", "Add title").notEmpty()],
  async (req, res) => {
    const result = validationResult(req); //validating and requesting results

    if (!result.isEmpty()) return res.status(400).json(result.array());

    try {
      //aise apna note create hokar DB mai store hojayga and will be following the schema

      const { tag, title, description } = req.body;
      const note = await Notes.create({
        title: title,
        description: description,
        user: req.user.id, //got from fetch user
        tag: tag,
      });

      res.json(note);
    } catch (err) {
      return res.status(400).json({ msg: err });
    }
  }
);

//Route to update a note
//so Obv jis node ko update krre uski id deni pdegi
//we use put for this
router.post("/update/:id", fetchuser, async (req, res) => {
  //ye id baad mai provide hogi of particular note
  const { title, description, tag } = req.body;

  //now what we do is make an object and phir check if upar wala koi bhi component user add krra
  //iff add kra then store that component in the object

  const newNote = {};
  if (title) {
    newNote.title = title;
  }
  if (description) {
    newNote.description = description;
  }
  if (tag) {
    newNote.tag = tag;
  }

  //idhar tak humne new Note mai sab rakha hai ab check if joh user ne data enter kra is that the valid user
  let note = await Notes.findById(req.params.id); //getting data of which note we are updating

  if (!note) return res.status(404).send("Not Found"); //agar note hai hi ni tab error

  //if note milgya then check whether jo user access krra is he authorised
  if (note.user.toString() !== req.user.id)
    return res.status(401).send("Not allowed");

  //ab we are sure ki user hi hai so updating using methods for DB

  note = await Notes.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  ); //this will give updated record
  //$set : newNote is basically mongo db ka ek operation

  res.json(note);
});

//Route to delete a Note entry (Method nhi delete use kra hai)
router.delete("/deleteNotes/:id", fetchuser, async (req, res) => {
  //sbse pehle toh note ko access kro
  try {
    let note = await Notes.findById(req.params.id);

    if (!note) return res.status(404).send("Not Found");

    if (note.user.toString() !== req.user.id)
      return res.status(404).send("Not allowed");

    //user sahi hai and not bhi exist karta so kro phir delete
    //ismai bas id use hoti and usse delete krte hai file ko
    let del = await Notes.findByIdAndDelete(req.params.id);

    res.send({del});
  } catch (err) {
    console.log({ err });
    return res.status(401).send("Internal Server Error!!! Sorry");
  }
});

module.exports = router;
