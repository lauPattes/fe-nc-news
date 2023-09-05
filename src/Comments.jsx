import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SingleArticle from "./SingleArticle"
import CommentCard from "./CommentCard"

export default function Comments(){
    const {article_id} = useParams()

    const[commentsArray, setCommentsArray] = useState([])

    useEffect(() => {
        axios
          .get(`https://laura-news.onrender.com/api/articles/${article_id}/comments`)
          .then(({ data }) => {
            const {comments} = data
            console.log(comments);
            setCommentsArray(comments)
          });
      }, []);


return (
    <body>
        <SingleArticle/>
        <ol className="commentsList">
            {commentsArray.map((comment)=>{
                return<CommentCard key={comment.comment_id}
                comment = {comment}/>
            })}
        </ol>
    </body>
)

}