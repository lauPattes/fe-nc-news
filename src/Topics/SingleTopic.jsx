import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleCard from "../Home/ArticleCard";

export default function SingleTopic(){

const {topic_name} = useParams() 

const [articlesOnTopic, setArticlesOnTopic] = useState([])
const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    axios
    .get("https://laura-news.onrender.com/api/articles")
    .then(({data})=>{
        const {articles} = data
        let releaventArticles = []
        articles.forEach((article)=>{
            if(article.topic === topic_name){
                return releaventArticles.push(article)
            }
        })
        setArticlesOnTopic(releaventArticles)
        setIsLoading(false)
        console.log(releaventArticles);
    
    })
},[])


return(
    <section className="SingleTopicPage">
        <header>
            <h1 className="TopicsHeader">{topic_name}</h1>
            <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/log_in">Log In</Link>
            <Link to="/topics">Back to Topics</Link>
            </nav>
        </header>
        <main>
        {isLoading ? <p className="Loading"><b>LOADING....</b></p> : null}
        <ul className="articleList">
          {articlesOnTopic.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
        </main>
    </section>
)
}