const mongoose = require('mongoose')


const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:false,
        maxlength:200,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    description:{
        type:String,
    },
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ]
})


module.exports = mongoose.model('Post', PostSchema)