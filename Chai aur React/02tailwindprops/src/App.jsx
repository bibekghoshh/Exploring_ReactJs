// import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='mb-4 bg-blue-800'>TailwindCSS</h1>
     <Card username="Bibek" btnText="Visit me"/>
     <Card username="Ghosh" btnText="click me"/>
    </>
  )
}

export default App
