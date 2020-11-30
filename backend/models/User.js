const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:false,
    },
    lastName:{
        type:String,
        required:false,
    },
    emailAddress:{
        type:String,
        required:false,
    }
}, {timestamps:true})


module.exports = mongoose.model('User', UserSchema )