import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SingleArticle from "../SingleArticle/SingleArticle";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";

export default function Comments() {
  const { article_id } = useParams();

  const [commentsArray, setCommentsArray] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);


  useEffect(() => {
    axios
      .get(
        `https://laura-news.onrender.com/api/articles/${article_id}/comments`
      )
      .then(({ data }) => {
        const { comments } = data;
        setCommentsArray(comments);
        setIsCommentsLoading(false);
      });
  }, [commentsArray]);

  function anyComments() {
    if (commentsArray.length > 0) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <body>
      <SingleArticle />
      {isCommentsLoading ? (
        <p>LOADING....</p>
      ) : anyComments() ? (
        <section>
          <CommentForm  setCommentsArray={setCommentsArray}/>
          <ol className="commentsList">
            {commentsArray.map((comment) => {
              return <CommentCard key={comment.comment_id} comment={comment} />;
            })}
          </ol>
        </section>
      ) : (
        <p>This article has no comments</p>
      )}
    </body>
  );
}
