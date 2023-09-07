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
  const[usersComment, setUsersComment] = useState("")

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
  }, []);

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
          <CommentForm setUsersComment={setUsersComment}/>
          <ol className="commentsList">
            <li>{usersComment}</li>
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
