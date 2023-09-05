import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [individualArticle, setIndividualArticle] = useState({});

  const [currentLikeCount, setCurrentLikeCount] = useState(0);

  useEffect(() => {
    axios
      .get(`https://laura-news.onrender.com/api/articles/${article_id}`)
      .then(({ data }) => {
        const { article } = data;
        setIndividualArticle(article);
        setCurrentLikeCount(article.votes);
      });
  }, []);

  function handleLikeClick() {
    const localCount = currentLikeCount++;
  }

  return (
    <body>
      <header className="individualarticleHeader">
        <h1 className="articleTitle">{individualArticle.title}</h1>
        <h2 className="articleAuthor">{individualArticle.author}</h2>
        <nav className="nav">
        <Link to="/">Home</Link>
        <button className="backButton">Back to {individualArticle.topic}</button>
        </nav>
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
          <p>Like</p>
          <p className="badge" onClick={handleLikeClick}>
            {individualArticle.votes}
          </p>
        </button>
        <Link to={`/articles/${article_id}/comments`}className="CommentLink" >View Comments</Link>
      </footer>
    </body>
  );
}
