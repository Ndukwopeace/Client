import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import {  ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChakraProvider>
      {/* <h1>Home pages</h1> */}
        <Outlet/> 
    </ChakraProvider>

   
    
    </>
  )
}

export default App
