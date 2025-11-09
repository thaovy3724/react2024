import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(()=>{
    let interval: number;
    if(running)
      interval = window.setInterval(()=>{
        setTime((prevTime)=> prevTime+10) 
    },10);
    return ()=>window.clearInterval(interval);
  },[running]);

  return (
    <div className='max-w flex flex-col items-center justify-center'>
    <h1 className='text-xl font-semibold pb-1 '>01-Stopwatch</h1>
    <div className='text-2xl font-bold py-3'>
      <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time/10)%100)).slice(-2)}</span>
    </div>
    <div className='w-1/3 flex flex-row justify-evenly'>
      {running ? (
        <button 
        className='border rounded-lg py-1 px-2'
        onClick={()=>{setRunning(false)}}>
          Stop
        </button>
      ) : (
        <button 
        className='border rounded-lg py-1 px-2'
        onClick={()=>{setRunning(true)}}>
          Start
        </button>
      )
      }
      <button 
      className='border rounded-lg py-1 px-2'
      onClick={()=>{setTime(0)}}>
        Reset
      </button>
    </div>
    </div>
  )
}

export default App
