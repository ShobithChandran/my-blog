import React from 'react';
import './AboutPage.css'
import me from './me.png'
import { Link } from 'react-router-dom';


function AboutPage(props) {
    const url1 = "https://github.com/ShobithChandran";
    const url2 = "https://www.linkedin.com/in/shobith-chandran-k-63a072199/";
    return(
        <div >
            <br /><br /><br /><br />
            <h1 id='title'> About Me </h1>
            <br />
            <h1 id='name'> Shobith Chandran k </h1>
            <div className="image-container">
                <img src={me} alt="me" height="390" width="350" />
            </div>
            <div id='abtdisc'>
                <center>
                <p>
                    Welcome to my first Blog Post. YAY!
                    I am so ready to have a place to share all my travels on, and share my life with you!
                </p>
                <p>
                    I’m Shobith Chandran K, from India. But I’ve lived in Budapest, Germany, and the US before! I don’t know,
                    I just never felt like “home” in a specific country.
                    Is that just me or do you also never really know the answer to the question where you’re from?
                    So like I have a Swiss passport, but lived at the German border, 
                    so I don’t really speak Swiss German, but my parents are from India, 
                    so I grew up Indian. Oh, and I’ve also lived abroad in the States.
                </p>
                <p>
                    What is Your Story? I would love to hear.
                    Ok, let’s move on to what this blog is about. Since my passion is photography and traveling, guess what. 
                    This is a travel blog. Ok, it’s not just that.
                    I want to share my life experiences, the best things, and also the negative sites, of each my travels. 
                    About studying abroad. About online schooling and college, and how to build your own business and make money as a student!
                    Everything I’m dedicated about and that I can share and give.
                    Any wishes or questions? Feel free to contact me through my social media at any time!
                    Sign up to my list to not miss any future posts about all those amazing topics, 
                    get free stuff and my exclusive income reports each month!
                </p>
                </center>
            </div>
            <div>
            <br /><br /><br /><br />
                <center>
                    <h1> Github </h1>
                    <a href={url1}>Click here</a>
                    <br /><br /><br /><br />
                    <h1> Linkedin </h1>
                    <a href={url2}>Click here</a>
                    <br /><br /><br /><br />
                </center>
            </div>
        </div>
        
    );   
}

export default AboutPage;
 

// var Test = React.createClass({
//     render: function() {
//       const url = "https://google.com";
   
//       return <div><a href={url}>link</a></div>;
//     }
//   });