import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex justify-center bottom-12 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow rounded-3xl px-3 py-2 bg-white'>
          <button onClick={() => setColor("red")} className='rounded-full bg-red-400 text-black outline-none px-2 py-1'>Red</button>
          <button onClick={() => setColor("blue")} className='rounded-full bg-blue-400 text-black outline-none px-2 py-1'>Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
