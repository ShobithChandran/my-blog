import React from 'react';
import './Article.css';

function UpvoteSection(props) {
    const { name, upvotes, setarticleData } = props;

    async function fetchUpVotes() {
        const response = await fetch(`http://localhost:5001/api/article/${name}/upvotes`, {
            method: 'post'
        });
        const body = await response.json();
        setarticleData(body);
    }

    return (
        <div>
            <br />
            <center><p className="votes">This article has {upvotes} upvotes</p></center>
            <center><button className="like" onClick={fetchUpVotes}>👍</button></center>
        </div>
    );
}

export default UpvoteSection;