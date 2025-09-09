import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoApp from './TodoApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <img src={reactLogo} alt="Vite Logo" width={100} height={100} />
       <img src={viteLogo} alt="Vite Logo" width={100} height={100} />
       <TodoApp/>
    </>
  )
}

export default App
