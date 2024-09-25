const mongoose = require('mongoose')
const { Schema } = mongoose;

const commentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique:true,
    },
    website: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    description:{
        type:String
    }

});

const Comment = mongoose.model('comment',commentSchema)
Comment.createIndexes()

module.exports= Comment

