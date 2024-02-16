const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchema = new Schema({
    user :{
        type: Schema.Types.ObjectId,            //ab idhar directly user store hojayega
        ref:'user'                      //dusre model ka naam
    },
    title :{
        type: String,
        required: true
    },
    description:{
        type:String,
        unique:true,
        required : true
    },
    date:{
        type : Date,
        default : Date.now
    }
  });

  module.exports = mongoose.model('notes',NotesSchema); //export a mongoose model as name user