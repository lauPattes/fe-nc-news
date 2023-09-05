import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Comments(){
    const {article_id} = useParams()

    const[currentComments, setCurrentComments] = useState([])

    useEffect(() => {
        axios
          .get(`https://laura-news.onrender.com/api/articles/${article_id}/comments`)
          .then(({ data }) => {
            const {comments} = data
          });
      }, []);

    


}