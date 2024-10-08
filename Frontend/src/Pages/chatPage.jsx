/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ChatPage = () => {

    const [chats, setChats] = useState([])

    const fatchChat = async () => {
        try {
            const { data } = await axios.get('/api/chats');
            setChats(data)
        } catch (error) {
            console.error('Error fetching chat data:', error.response ? error.response.data : error.message);
        }

    }

    useEffect(() => {
        fatchChat()
    }, [])

    return (
        <div>
            {chats.map((chat) => (
                <div key={chat._id}>
                    <p>{chat.chatName}</p>
                </div>
            ))}
        </div>
    )
}


export default ChatPage
