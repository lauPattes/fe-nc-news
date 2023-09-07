import axios from "axios";

export default function PostComment(commentBody, user, article_id){
   return axios.post(`https://laura-news.onrender.com/api/articles/${article_id}/comments`,{
        username : user.username,
        body : commentBody
    })
}