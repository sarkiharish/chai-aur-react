import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null);

  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password)
  }, [password]) 

  const passwordGenerator = useCallback(() => {
    let pwd = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += '0123456789'
    if (characterAllowed) str += '!@#$%^&*-_+=[]{}~`'

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pwd += str.charAt(char)

    }

    setPassword(pwd)


  }, [length, characterAllowed, numberAllowed, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, characterAllowed, numberAllowed, passwordGenerator])

  return (


    <div className="w-full max-w-md mx-auto shadow-md rounded-lg 
      px-4 py-3 my-8 text-orange-500 bg-gray-800">
      <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='copyBtn outline-none bg-blue-700 text-white
        px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
           type="range"
           min={6}
           max={100}
           value={length}
           className='cursor-pointer'
           onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={numberAllowed}
           id='numberInput'
           onChange={() => {
            setNumberAllowed((prev) => !prev)
           }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
           type="checkbox"
           defaultChecked={characterAllowed}
           id='characterInput'
           onChange={() => {
            setCharacterAllowed((prev) => !prev)
           }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
