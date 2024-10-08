require('dotenv').config()

const express = require('express')
const chats = require('./Data/data')
const app = express()
const cors = require('cors');


const port = process.env.PORT


const corsOptions = {
    origin: 'http://localhost:5173', // Allow only your React app to access
    credentials: true, // Enable cookies or authorization headers
};

app.use(cors(corsOptions));

app.get('/', (req, res) => res.send('Hello World!'))

app.get("/api/chats", (req, res) => {
    res.json(chats)
})

app.get("/api/chats/:id", (req, res) => {
    const chat = chats.find(chat => chat._id === req.params.id)
    if (!chat) return res.status(404).send("Chat not found")
    res.json(chat)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))