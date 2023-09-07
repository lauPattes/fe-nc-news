import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [ArticleArray, setArticleArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://laura-news.onrender.com/api/articles")
      .then(({ data }) => {
        const { articles } = data;
        setArticleArray(articles);
        setIsLoading(false)
      });
  }, []);

  return (
    <>
      <header>
        <h1 className="Welcome">Welcome To Laura News</h1>
        <nav className="menuLink">
          <Link to="/log_in" className="LogInLink">Log In</Link>
          <Link to="/topics" className="TopicsLink">View Topics</Link>
        </nav>
      </header>
      <main>
        {isLoading ? <p className="Loading"><b>LOADING....</b></p> : null}
        <ul className="articleList">
          {ArticleArray.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </main>
    </>
  );
}
