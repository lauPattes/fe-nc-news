import { Link } from "react-router-dom"
import ArticleCard from "./ArticleCard"
import { useEffect, useState } from "react"
import axios from "axios"


export default function Home(){
    const [ArticleArray, setArticleArray] = useState([])

    useEffect(()=>{
        axios
        .get("https://laura-news.onrender.com/api/articles")
        .then(({data})=>{
            const {articles} = data
            console.log(data)
            setArticleArray(articles)
        })
    },[])

return(
    <>
    <header>
        <h1 className="Welcome">Welcome To Laura News</h1>
        <Link to="/home_pop-up" className="Menu_link">Menu</Link>
    </header>
    <main>
        <ul className="articleList">
            {ArticleArray.map((article)=>{
                return(
                    <ArticleCard key ={article.article_id}
                    article = {article}/>
                )
            })}
        </ul>
    </main>
    </>
)

}