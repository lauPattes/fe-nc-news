import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PatchVoteCount from "./PatchVoteCount";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [individualArticle, setIndividualArticle] = useState({});

  const [likeCount, SetLikeCount ] = useState(0);


  useEffect(() => {
    axios
      .get(`https://laura-news.onrender.com/api/articles/${article_id}`)
      .then(({ data }) => {
        const { article } = data;
        setIndividualArticle(article);
        SetLikeCount(article.votes);
      });
  }, []);

  function handleLikeClick() {
    SetLikeCount((likeCount)=>{
      likeCount++
    })
    console.log(likeCount)
    PatchVoteCount(article_id)
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
        <button className="likeButton" onClick={handleLikeClick}>
          <p>Like</p>
          <p className="badge">
            {likeCount}
          </p>
        </button>
        <Link to={`/articles/${article_id}/comments`}className="CommentLink" >View Comments</Link>
      </footer>
    </body>
  );
}
