import { useState, useEffect, useRef, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [password, setPassword] = useState("")
  // const [length, setLength] = useState(8)
  // const [numberAllowed, setNumberAllowed] = useState(false)
  // const [charAllowed, setCharAllowed] = useState(false)

  // const generatePassword = () =>{
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  //   let pass = ""

  //   if(numberAllowed) str+="1234567890"
  //   if(charAllowed) str+="!@#$%^&*()_+"

  //   for(let i=1; i<=length; i++){
  //     const char = Math.floor(Math.random() * str.length +1)
  //     pass+=str.charAt(char)
  //   }
  //   setPassword(pass)
  // }

  // useEffect(() => {
  //   // password generator function here
  //   generatePassword()
  // },[length, numberAllowed, charAllowed])

  // // passwordRef is a reference (address of the password variable) 
  // // address dont change -> use const
  // const passwordRef = useRef(null)

  // const copyPasswordToClipboard = () => {
  //   window.navigator.clipboard.writeText(password)
  //   // This line selects the text in the input field referenced by passwordRef.
  //   // This is useful for providing user feedback that the password has been copied
  //   passwordRef.current.select() // optional but important UX
  // }

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const generatePassword = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+"

    for(let i=1; i<=length; i++){
      const char = Math.floor(Math.random() * str.length)
      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed])

  useEffect(() =>{
    generatePassword()
  },[length, numberAllowed, charAllowed])

  const passwordRef = useRef(null)
  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
  }
  return (
    // <div className='w-full h-screen mx-auto bg-black py-5 flex flex-col items-center gap-3'>
    //   <h1 className='text-white'>Password Generator</h1> 
    //   <div className='inline-block shadow rounded-lg overflow-hidden mb-4'>
    //     <input 
    //     type="text" 
    //     value = {password}
    //     ref = {passwordRef}
    //     readOnly
    //     className='px-3 py-2 text-orange-500'/>
    //     <button 
    //     onClick={copyPasswordToClipboard}
    //     className='bg-blue-400 text-white px-3 py-2 shrink-0'>copy</button>
    //   </div>
    //   <div className='flex flex-wrap text-white'>
    //     <div className='flex gap-2 px-3'>
    //       <input
    //       type="range"
    //       min={8}
    //       max={100}
    //       value={length} 
    //       onChange={(e) => setLength(e.target.value)}/>
    //       <label htmlFor="length">Length: {length}</label>
    //     </div>

    //     <div className='flex gap-2 px-3'>
    //     <input
    //       type="checkbox" 
    //       checked={numberAllowed}
    //       onChange={() => {setNumberAllowed((prev) => !prev)}}/>
    //       <label htmlFor="number">Numbers </label>
    //     </div>

    //     <div className='flex gap-2 px-3'>
    //     <input
    //       type="checkbox"
    //       checked={charAllowed}
    //       onChange={() => setCharAllowed((prev) => !prev)}/>
    //       <label htmlFor="character" >Characters </label>
    //     </div>
    //   </div>
    // </div>
    
    <div className='w-full h-screen bg-gray-300 text-orange'>
      <h1>Password Generator</h1>
      <div>
        <input 
        type="text"
        ref={passwordRef}
        value={password}
        className='text-orange'
        readOnly
         />
        <button 
        onClick={copyPasswordToClipboard}
        className='bg-blue-500'>copy</button>
      </div>
      <div>
        <div>
          <input type="range"
          min={8}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)} />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div>
          <input 
          type="checkbox"
          checked={numberAllowed}
          onChange={()=>setNumberAllowed((prev) => !prev)}/>
          <label htmlFor="number">Numbers</label>
        </div>
        <div>
          <input type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}/>
          <label htmlFor="character">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
