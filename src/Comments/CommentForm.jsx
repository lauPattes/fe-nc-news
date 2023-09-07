import { useContext, useState } from "react";
import { LoggedInUserContext } from "../LoggedInUser";
import { Link, useParams } from "react-router-dom";
import PostComment from "./PostComment";

export default function CommentForm({setUsersComment}) {


  const {article_id} = useParams()

  const { user, setUser } = useContext(LoggedInUserContext);

  const [commentBody, setCommentBody] = useState("")

  const [errMessage, setErrMessage] = useState("")


  function handleCommentBodyChange(event) {
    setCommentBody(event.target.value)
  }

  function handleCommentSubmit(event){
    event.preventDefault()
    setErrMessage("")
    setUsersComment(commentBody)
    PostComment(commentBody, user, article_id)
    .catch((err)=>{
    setUsersComment("")
    setErrMessage("Comment failed to upload, please try again later")
  })
  }
  


  if (user === null) {
    return <Link to="/log_in">Please log in to post a comment</Link>;
  } else {
    return (
      <form className="commentForm" onSubmit={handleCommentSubmit}>
        <label htmlFor="commentBody">
          You are logged in as {user.username}, post a comment:
        </label>
        <textarea
          id="commentBody"
          name="commentBody"
          rows={5}
          cols={33}
          placeholder="Leave your comment here"
          required
          value={commentBody}
          onChange={handleCommentBodyChange}
        />
        <button id="submitCommentButton" type="submit">
          Submit Comment
        </button>
        <p>{errMessage}</p>
      </form>
    );
  }
}
