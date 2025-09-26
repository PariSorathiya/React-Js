import React, { useState } from 'react'
import Navbar from './District By Zomato/Navbar'
import Cards from './District By Zomato/Cards'
import Home from './Pages/Home'

export default function App() {

  const [dark,setDark]=useState(false)
  return (
    <div>
      <Navbar dark={dark} setDark={setDark}/>
      <Home/>
    </div>
  )
}
