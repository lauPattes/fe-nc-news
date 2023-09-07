import { useContext } from "react";
import { LoggedInUserContext } from "../LoggedInUser";
import { Link } from "react-router-dom";

export default function CommentForm() {
  const { user, setUser } = useContext(LoggedInUserContext);

  function handleCommentBodyChange() {}

  if (user === null) {
    return <Link to="/log_in">Please log in to post a comment</Link>;
  } else {
    return (
      <form className="commentForm">
        <label htmlFor="commentBody">
          You are logged in as {user.username}, post a comment:
        </label>
        <textarea
          id="commentBody"
          name="commentBody"
          rows={5}
          cols={33}
          placeholder="Leave your comment here"
          onChange={handleCommentBodyChange}
        />
        <button id="submitCommentButton" type="submit">
          Submit Comment
        </button>
      </form>
    );
  }
}
