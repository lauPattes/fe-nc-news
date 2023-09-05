import axios from "axios";

export default function PatchVoteCount(article_id){
axios
.patch(`https://laura-news.onrender.com/api/articles/${article_id}`,{
     inc_votes: 1 
})
.then((response)=>{
    console.log(response)
})
}