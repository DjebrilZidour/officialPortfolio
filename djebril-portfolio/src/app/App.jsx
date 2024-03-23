import { useState } from 'react'
import Navbar from '../components/Navbar'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <h1>app home</h1>
     </>
  )
}

export default App
