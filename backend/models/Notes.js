const mongoose = require('mongoose');
const {Schema} = mongoose;

const NotesSchema = new Schema({
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