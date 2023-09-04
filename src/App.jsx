import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'



function App() {
return(
  <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/:article_id" element={<A/>}/> */}
  </Routes>
  </>
)
}



export default App
