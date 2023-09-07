export default function CommentCard({comment}){
return(
    <li className="CommentCard">
        <h3 className="author"><b>{comment.author}</b></h3>
        <p className="createdAt">created at {comment.created_at}</p>
        <text className="commentBody">{comment.body}</text>
        <p className="commentVotes"><b>{comment.votes}</b> votes</p>
    </li>
)
}