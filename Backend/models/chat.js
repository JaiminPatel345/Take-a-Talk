import { Timestamp } from 'bson'
import mongoose from 'mongoose'


const ChatSchema = mongoose.Schema({
    members: {
        type: Array
    },
    Timestamp: true
})

const chatModel = mongoose.model("chat", ChatSchema)
export default chatModel