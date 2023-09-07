import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PatchVoteCount from "./PatchVoteCount";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [individualArticle, setIndividualArticle] = useState({});

  const [likeCount, SetLikeCount ] = useState(0);

  const [isArticleLoading, setIsArticleLoading] = useState(true)


  useEffect(() => {
    axios
      .get(`https://laura-news.onrender.com/api/articles/${article_id}`)
      .then(({ data }) => {
        const { article } = data;
        setIndividualArticle(article);
        SetLikeCount(article.votes);
        setIsArticleLoading(false)
      });
  }, []);

  function handleLikeClick() {
    SetLikeCount((likeCount)=>{
     return(likeCount + 1) 
    })
    PatchVoteCount(article_id, 1)
    .catch((err)=>{
      SetLikeCount((likeCount)=>{
        likeCount - 1})
      })
    }

  function handleDisLikeClick() {
    SetLikeCount((likeCount)=>{
     return(likeCount - 1) 
    })
    PatchVoteCount(article_id, -1)
    .catch((err)=>{
      SetLikeCount((likeCount)=>{
        likeCount + 1})
      })
  }



  return (
    <body>
      <header className="individualarticleHeader">
        <h1 className="articleTitle">{individualArticle.title}</h1>
        <h2 className="articleAuthor">{individualArticle.author}</h2>
        <nav className="nav">
        <Link to="/">Home</Link>
        <Link to={`/articles/topics/${individualArticle.topic}`}>Back to {individualArticle.topic}</Link>
        </nav>
      </header>
      <section className="individualArticleSection">
        {isArticleLoading ? <p>LOADING...</p> : null}
        <img
          className="individualArticleImage"
          src={individualArticle.article_img_url}
          alt={individualArticle.title}
        />
        <main className="individualArticleBody">{individualArticle.body}</main>
      </section>
      <footer className="individualArticleFooter">
        <span>
        <button className="likeButton" onClick={handleLikeClick}>
          <p>Like</p>
        </button>
        <button className="dislikeButton" onClick={handleDisLikeClick}>
          <p>Dislike</p>
          <p className="badge">
            Likes: {likeCount}
          </p>
        </button>
        </span>
        <Link to={`/articles/${article_id}/comments`}className="CommentLink" >View Comments</Link>
      </footer>
    </body>
  );
}
