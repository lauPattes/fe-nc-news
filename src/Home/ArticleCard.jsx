import { useState } from "react";
import { Link,} from "react-router-dom";


export default function ArticleCard({article}){

    return(
        <Link to={`/articles/${article.article_id}`} className="articleCard">
            <h2>{article.title}</h2> 
            <h3>{article.author}</h3>
            <img className="articlePicture"src={article.article_img_url} alt={article.title} />
        </Link>
    )

}