import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [ArticleArray, setArticleArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sort, setSort] = useState(undefined);
  const [upOrDown, setUpOrDown] = useState(undefined);

  useEffect(() => {
    axios
      .get("https://laura-news.onrender.com/api/articles", {
        params: {
          sort_by: sort,
          order: upOrDown,
        },
      })
      .then(({ data }) => {
        const { articles } = data;
        setArticleArray(articles);
        setIsLoading(false);
      });
  }, [upOrDown, sort]);

  function sortByDateAsc() {
    setSort("created_at");
    setUpOrDown("asc");
  }

  function sortByDateDesc() {
    setSort("created_at");
    setUpOrDown("desc");
  }

  function sortByVotesAsc(){
    setSort("votes")
    setUpOrDown("asc")
  }

  function sortByVotesDesc(){
    setSort("votes")
    setUpOrDown("desc")
  }

  function sortByCommentCountAsc(){
    setSort("comment_count")
    setUpOrDown("asc")
  }

  function sortByCommentCountDesc(){
    setSort("comment_count")
    setUpOrDown("desc")
  }



  return (
    <>
      <header>
        <h1 className="Welcome">Welcome To Laura News</h1>
        <nav className="menuLink">
          <Link to="/log_in" className="LogInLink">
            Log In
          </Link>
          <Link to="/topics" className="TopicsLink">
            View Topics
          </Link>
        </nav>
        <p>Order By:</p>
        <div className="btn-group">
          <button className="dates" onClick={sortByDateAsc}>
            Date Asc
          </button>
          <button className="desc" onClick={sortByDateDesc}>
            Date Desc
          </button>
        </div>
        <div className="btn-group"> 
        <button className="votes" onClick={sortByVotesAsc}>Votes Asc</button>
        <button className="desc" onClick={sortByVotesDesc}>Votes Desc</button>
        </div>
        <div className="btn-group"> 
        <button className="comment count" onClick={sortByCommentCountAsc}>Comment Count Asc</button>
        <button className="desc" onClick={sortByCommentCountDesc}>Comment Count Desc</button>
        </div>
      </header>
      <main>
        {isLoading ? (
          <p className="Loading">
            <b>LOADING....</b>
          </p>
        ) : null}
        <ul className="articleList">
          {ArticleArray.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </main>
    </>
  );
}
