import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const decreaseValue = () => {
    if(count > 0){
      setCount(count-1)
    }
  }

  const increaseValue = () => {
    if(count < 20){
      setCount(count+1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <p>Counter Value : {count <= 0 || count >= 20 ? `😀Limit Exceeded.😀 : ${count}`: count}</p>
      <button onClick={decreaseValue}>Decrease Value</button>
      {/* <br /> */}
      <button onClick={increaseValue}>Increase Value</button>
      
    </>
  )
}

export default App
