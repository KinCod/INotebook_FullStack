//initially using routes imported from express

const express = require('express');
const fetchuser = require('../middleware/fetchUser');
const router = express.Router()
const { body, validationResult } = require("express-validator");  //using validator

//importing the notes wala model
const Notes = require('../models/Notes');

//Route to get all the Notes.
//idhar we'll again use the MIDDLEWARE to get id of user and then use that id to get the notes
router.get('/fetchNotes',fetchuser,async (req,res)=>{

    try{
        const notes = await Notes.find({user: req.user.id}) // finding note with paticular id
        res.json(notes);          //converted into json
    }
    catch(err){
        return res.status(400).json({msg: "Error Occured"});
    }
    
})

//add notes for user
//so obv sbse pehle toh userr ko fetch krenge and then uss id k liye notes add krenge
//so joh bhi note add kra in page vo api accept kregi and phir uss user id ko dekhkar uss particular db mai store kar degi
router.post('/addNotes',fetchuser,async(req,res)=>{

    try{
        //aise apna note create hokar DB mai store hojayga and will be following the schema
        const note =await Notes.create({
            user : req.user.id,                //got from fetch user
            title : req.body.title,
            description : req.body.description
        })

        res.send({note});
    }catch(err){
        return res.status(400).json({msg:"Failed to Add Note!"})
    }
    
})

module.exports = router;