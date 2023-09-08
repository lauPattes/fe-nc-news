import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ArticleCard from "../Home/ArticleCard";

export default function SingleTopic(){

const {topic_name} = useParams() 

const [articlesOnTopic, setArticlesOnTopic] = useState([])
const [isLoading, setIsLoading] = useState(true);
const [TopicError, setTopicError] = useState(null);

useEffect(()=>{
    axios
    .get(`https://laura-news.onrender.com/api/articles?topic=${topic_name}`)
    .then(({data})=>{
        const {articles} = data
        setArticlesOnTopic(articles)
        setIsLoading(false)
        console.log(releaventArticles);
    
    })
    .catch((err)=>{
        console.log(err)
        setTopicError(err)
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