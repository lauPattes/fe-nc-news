import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function ErrorPage(){
     return <section className="ErrorPage">
        <h1>404</h1>
        <Link to="/" className="homeLink">Home</Link>
     </section>
      
}