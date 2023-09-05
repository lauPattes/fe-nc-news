import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [individualArticle, setIndividualArticle] = useState({});

  const[currentLikeCount, setCurrentLikeCount] = useState(0)

  useEffect(() => {
    axios
      .get(`https://laura-news.onrender.com/api/articles/${article_id}`)
      .then(({ data }) => {
        const { article } = data;
        console.log(article);
        setIndividualArticle(article);
        setCurrentLikeCount(article.votes)
      });
  }, []);

  function handleLikeClick(){
    const localCount = currentLikeCount ++
  }
  

  return (
    <body>
      <header className="individualarticleHeader">
        <h1 className="articleTitle">{individualArticle.title}</h1>
        <h2 className="articleAuthor">{individualArticle.author}</h2>
        <Link to="/">Home</Link>
        <button>Back to {individualArticle.topic}</button>
      </header>
      <section className="individualArticleSection">
        <img
          className="individualArticleImage"
          src={individualArticle.article_img_url}
          alt={individualArticle.title}
        />
        <main className="individualArticleBody">{individualArticle.body}</main>
      </section>
      <footer className="individualArticleFooter">
        <button className="likeButton">
          <span>Like</span>
          <span className="badge" onClick={handleLikeClick}>{individualArticle.votes}</span>
        </button>
        <Link to={`/articles/${article_id}/comments`}>Comments</Link>
      </footer>
    </body>
  );
}
