import { useContext, useEffect, useState } from "react"
import { LoggedInUserContext } from "../LoggedInUser"
import axios from "axios"

export default function CommentCard({comment,isCommentStillPosting, setIsCommentStillPosting}){

const {user} =useContext(LoggedInUserContext)
const [inDeletionCycle, setInDeletionCycle] = useState(false)

function UserMatches (){
    if(user === null){
        return false
    }
    else if(user.username === comment.author){
        return true
    }
    else{
        return false
    }
}

function DeleteComment(){
    if(!isCommentStillPosting){
        setIsCommentStillPosting(true)
        axios.delete(`https://laura-news.onrender.com/api/comments/${comment.comment_id}`)
        .then(()=>{
            return setIsCommentStillPosting(false)
        })
    }
}



return(
    <li className="CommentCard">
        <h3 className="author"><b>{comment.author}</b></h3>
        <p className="createdAt">created at {comment.created_at}</p>
        <text className="commentBody">{comment.body}</text>
        <p className="commentVotes"><b>{comment.votes}</b> votes</p>
        {UserMatches()? <button onClick={DeleteComment}>Delete Comment</button> : null}
    </li>
)
}