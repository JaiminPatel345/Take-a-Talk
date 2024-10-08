import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/homePage'
import ChatPage from './Pages/chatPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/chats' Component={ChatPage} />
      </Routes>
    </>
  )
}

export default App
