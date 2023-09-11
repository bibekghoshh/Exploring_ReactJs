import { useState } from 'react'

function App() {
  const [color, setColor] = useState("purple");

  return (
    <div className='flex justify-center w-full h-screen duration-200' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap gap-8 px-4 py-3 duration-200 bg-white bottom-12 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='px-2 py-1 text-white bg-red-600 outline-none rounded-2xl '>Red</button>
          <button onClick={()=>setColor("green")} className='px-2 py-1 text-white bg-green-600 outline-none rounded-2xl'>Green</button>
          <button onClick={()=>setColor("yellow")} className='px-2 py-1 text-white bg-yellow-600 outline-none rounded-2xl'>Yellow</button>
          <button onClick={()=>setColor("black")} className='px-2 py-1 text-white bg-black outline-none rounded-2xl'>black</button>
          <button onClick={()=>setColor("grey")} className='px-2 py-1 text-white bg-gray-600 outline-none rounded-2xl'>grey</button>
          <button onClick={()=>setColor("pink")} className='px-2 py-1 text-white bg-pink-600 outline-none rounded-2xl'>pink</button>
        </div>
    </div>
  )
}

export default App
