// Managing the Comments
import React from 'react';

function Comments(props) {
    const { comments } = props;
    return (
        <div>
            <h3 className='comments-head'>Comments</h3>
            {comments.map((i, key) => (
                <div key={key} className='comments'>
                    <h4>{i.username}</h4>
                    <p>{i.text}</p>
                </div>
            ))}
        </div>
    );
}

export default Comments;