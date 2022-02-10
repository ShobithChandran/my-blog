import React, { useState } from 'react';

function AddComments(props) {
    const { name, setarticleData } = props;

    // Storing comments
    const [commentValues, setCommentValues] = useState({ username: "", comment: "" });

    function handleChange(event) {
        console.log(event.target);
        const { name, value } = event.target;
        setCommentValues({ ...commentValues, [name]: value })
    }

    async function fetchComments() {
        const username = commentValues.username;
        const text = commentValues.comment;

        const response = await fetch(`http://localhost:5001/api/article/${name}/comments`, {
            method: 'post',
            body: JSON.stringify({ username, text }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        setarticleData(body);
        setCommentValues({ username: "", comment: "" });
    }

    return (
        <div>
            <div >
                <center><h2>Add a Comment</h2></center>
                <br></br>
                <label id='nm'>
                    Name:
                    <br></br>
                    <input type="text" name="username" value={commentValues.username} onChange={handleChange} />
                </label>
                <label id='co'>
                    Comment:
                    <br></br>
                    <textarea rows="4" cols="50" name='comment' value={commentValues.comment} onChange={handleChange}></textarea>
                </label>
                <br></br>
                <button onClick={fetchComments}>Submit</button>
                <br></br>
            </div>
        </div>
    );
}

export default AddComments;