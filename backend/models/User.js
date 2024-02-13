const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required : true 
    },
    password:{
        type: String,
        required : true
    },
    date:{
        type : Date,
        default : Date.now
    }
  });

  const User = mongoose.model('user',UserSchema); //export a mongoose model as name user
  //User.createIndexes()             //ab directly router(auth) mai krenge
  module.exports = User 