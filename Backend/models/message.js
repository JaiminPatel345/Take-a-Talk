const mongoose = require('mongoose')
const { Timestamp } = require('bson')

const messageSchema = mongoose.Schema({
    sender: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
    },
    timestamp: {
        type: Timestamp,
        default: Date.now,
    },
    contest: {
        type: String,
    },
    chat: {
        type: mongoose.Schema.ObjectId,
        ref: "Chat"
    },
})


const Message = mongoose.model("message", messageSchema)
module.exports = Message