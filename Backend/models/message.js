import { Timestamp } from 'bson'
import mongoose from 'mongoose'


const messageSchema = mongoose.Schema({
    chatId: {
        type: String,
    },
    senderId: {
        type: String,
    },
    text: {
        type: String,
    },
    Timestamp: true
})

const messageModel = mongoose.model("message", messageSchema)
export default messageModel
