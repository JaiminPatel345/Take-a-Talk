const mongoose = require('mongoose')
const TimeStamp = require('mongoose-timestamp')
mongoose.plugin(TimeStamp)



const chatSchema = mongoose.Schema({
    chatName: {
        type: String,
    },
    isGroupChat: {
        type: Boolean,
    },
    users: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    latestMessage: {
        type: mongoose.Schema.ObjectId,
        ref: "Message"
    },
    groupAdmin: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    Timestamp: true
})

const Chat = mongoose.model("chat", ChatSchema)
module.exports = Chat; 
