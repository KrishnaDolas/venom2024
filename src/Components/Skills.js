import html from '../Assets/html.svg';
import css from '../Assets/css.webp';
import js from '../Assets/js.png';
import jquery from '../Assets/jquery.webp';
import bs from '../Assets/bootstrap.webp';
import react from '../Assets/react.png';
import nodejs from '../Assets/nodejs.png';
import vercel from '../Assets/vercel1868.webp';
import postman from '../Assets/postman.webp';
import GitHub from '../Assets/git.png';
import express from '../Assets/express.webp';
import mongodb from '../Assets/mongodb.webp';




function Skills() {

    const divstyle = {
        fontFamily: "'Montserrat', sans-serif",
        color:'white'
      };

    const imgstyle={
        width:'250px',
        height:'220px'
    };

    const middle={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return ( 
        <>
        <div style={divstyle}>
        <h1 style={{ color: '#20b38e' }} className="text-center">Skills</h1>
        <p className="text-center">I love to learn new things and experiment with new technologies.
        These are some of the major languages, technologies, tools and platforms I have worked with:</p>
        </div><br/><br/>

        <div>
            <h1 style={{ color: '#20b38e' }} className="text-center">Coding Languages</h1>
            <img src={html} style={imgstyle} alt="..."></img>
            <img src={css} style={imgstyle} alt="..."></img>
            <img src={js} className="rounded" style={imgstyle} alt="..."></img>&nbsp;&nbsp;&nbsp;
            <img src={jquery} className="rounded" style={imgstyle} alt="..."></img>&nbsp;&nbsp;&nbsp;
            <img src={bs} style={imgstyle} alt="..."></img>
        </div><br/><br/>

        <div style={middle}>
            <h1 style={{ color: '#20b38e' }} className="text-center">Frameworks & Technologies</h1>&nbsp;&nbsp;&nbsp;
            <img src={react} style={imgstyle} alt="..."></img>
            <img src={nodejs} style={imgstyle} alt="..."></img>&nbsp;&nbsp;&nbsp;
            <img src={express} className="rounded"  style={imgstyle} alt="..."></img>&nbsp;&nbsp;&nbsp;
            <img src={mongodb} className="rounded" style={imgstyle} alt="..."></img>&nbsp;&nbsp;&nbsp;
        </div><br/><br/>

        <div style={middle}>
            <h1 style={{ color: '#20b38e' }} className="text-center">Tools & Platforms</h1>&nbsp;&nbsp;&nbsp;
            <img src={vercel} className="rounded" style={imgstyle} alt="..."></img>&nbsp;&nbsp;&nbsp;
            <img src={postman} className="rounded" style={imgstyle} alt="..."></img>&nbsp;&nbsp;&nbsp;
            <img src={GitHub} style={imgstyle} alt="..."></img>
        </div><br/><br/>
        </>
     );
}

export default Skills;