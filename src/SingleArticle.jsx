import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


export default function SingleArticle(){
    const {article_id} = useParams()

    const [individualArticle, setIndividualArticle] = useState({})

    
    useEffect(()=>{
       axios
       .get(`https://laura-news.onrender.com/api/articles/${article_id}`) 
       .then(({data})=>{
        const {article} = data 
        console.log(article);
        setIndividualArticle(article)
       })
    },[])

    return (
        <>
        <header>
            <h1 className="articleTitle">{individualArticle.title}</h1>
            <h2 className="articleAuthor">{individualArticle.author}</h2>
            <Link to="/">Home</Link>
            <button>Back to topics</button>
        </header>
        <section>
            
        </section>
        </>
    )
}