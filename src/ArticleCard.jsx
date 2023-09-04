import { useState } from "react";

export default function ArticleCard({article}){
    return(
        <button className="articleCard">
            <h2>{article.title}</h2> 
            <h3>{article.author}</h3>
            <img src={article.article_img_url} alt={article.title} />
        </button>
    )

}