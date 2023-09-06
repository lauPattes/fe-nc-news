import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import SingleArticle from './SingleArticle.jsx'
import Comments from './Comments'
import LogIn from './LogIn'


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
