import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Article.css';
import articleContent from './SampleArticleDB';
import Error from '../error/Error'
import Comments from './comments';
import AddComments from './AddComments';
import UpvoteSection from './UpvoteSection';



function ArticlePage(props) {
    const { name } = useParams();

    // Temporary storage of DB data
    const [articleData, setarticleData] = useState({ upvotes: 0, comments: [] });

    const article = articleContent.find(i => i.name === name) //looking for matching name in db

    // Backend Connection API Fetch
    useEffect(() => {
        fetchAPI();
    }, [name]);

    async function fetchAPI() {
        const response = await fetch(`/api/article/${name}`);
        const body = await response.json();
        console.log(body);
        setarticleData(body);

    }


     // Article Not Exist in DB
    if(!article) return <Error />
    return(
        <div>
            <br /><br /><br /><br />
               
                <center><h1 id='article'> {article.title}</h1></center>
                <UpvoteSection name={name} setarticleData={setarticleData} upvotes={articleData.upvotes} />
                <br /><br />
                <center><p id='artdisc'>{article.description}</p></center>
                <Comments comments={articleData.comments} />
                <AddComments name={name} setarticleData={setarticleData} />
            
        </div>
    );   
}

export default ArticlePage;