import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import Test from './components/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with Chai</h1>
      <Login/>
      <Profile/>
      <Test/>
    </UserContextProvider>
  )
}

export default App
