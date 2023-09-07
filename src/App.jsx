import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from "./Home/Home.jsx"
import SingleArticle from "./SingleArticle/SingleArticle"

import Comments from './Comments/Comments.jsx'
import LogIn from './LogIn/LogIn.jsx'



function App() {
return(
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/articles/:article_id" element={<SingleArticle/>}/>
    <Route path="/articles/:article_id/comments" element={<Comments/>}></Route>
    <Route path="/log_in" element={<LogIn/>}></Route>
  </Routes>
)
}



export default App
