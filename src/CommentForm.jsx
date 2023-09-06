import { useContext } from "react";
import { LoggedInUserContext } from "./LoggedInUser";
import { Link } from "react-router-dom";


export default function CommentForm() {

  const { user, setUser } = useContext(LoggedInUserContext);

  console.log(user)

  function handleCommentBodyChange (){}

  function isUserLoggedIn(){
    if(user.length === 0) {
        return false
    } else {
        return true
    }
  }

  if(isUserLoggedIn() === false){
    return(
      <Link to="/log_in">Please log in to post a comment</Link>
    )
  } else {
    return (
        <form>
          <label htmlFor="commentBody">Comment</label>
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
