import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SingleArticle from './SingleArticle.jsx'


function App() {
return(
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/articles/:article_id" element={<SingleArticle/>}/>
  </Routes>
)
}



export default App
