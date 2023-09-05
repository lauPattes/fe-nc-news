import axios from "axios";

export default function PatchVoteCount(article_id, num){
axios
.patch(`https://laura-news.onrender.com/api/articles/${article_id}`,{
     inc_votes: num
})
}