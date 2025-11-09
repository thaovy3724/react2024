import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UserProvider} from './context/UserContext'
import UserLogin from './components/UserLogin'
import UserProfile from './components/UserProfile'

function App() {
  const [user, setUser] = useState(null)

  const login = (profile) => {
    setUser(profile)
  }

  return (
    <UserProvider value={{user, login}}>
      <UserLogin/>
      <UserProfile/>
    </UserProvider>
  )
}

export default App
