import React from 'react';
import { Link } from 'react-router-dom'
import './Article.css'
import articleContent from './SampleArticleDB'

function ArticlesList(props) {
    return(
        <div>
            <br /><br /><br /><br />
            <center>
            <h1 id='articles'> Articles List </h1>
            <br />
            {/* itteration */}
            {articleContent.map((i, key) => (
                <Link id='link' key={key} to={`/article/${i.name}`} style={{paddingLeft: 13, textDecoration: 'none'}}>
                    <h3>{i.title}</h3><br />
                </Link>
            ))}
            </center>
        </div>
    );   
}

export default ArticlesList;