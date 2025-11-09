import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './contexts/ThemeMode'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState("white")

  // define method
  const lightTheme = () => {
    setThemeMode("white")
    console.log(1)
  }

  const darkTheme = () => {
    setThemeMode("black")
  }

  useEffect(() => {
    document.querySelector('.card').classList.remove("bg-white", "bg-black")
    document.querySelector('.card').classList.add("bg-"+themeMode)
    console.log("hello")
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <ThemeBtn/>
      <Card/>
    </ThemeProvider>
  )
}

export default App
