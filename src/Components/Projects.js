import React from 'react';
import logo from '../Assets/venomlogo.jpg';
import logo1 from '../Assets/covervenom.png';
import Button49 from './Button49';
import Button50 from './Button50';

function Projects() {
    const divstyle = {
        fontFamily: "'Montserrat', sans-serif",
        color: 'white'
    };

    const bgstyle = {
        backgroundImage: `url(${logo1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '-1',
        overflow: 'hidden',
        paddingTop: '280px',
    };

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

                    @media (max-width: 768px) {
                        /* Tablet */
                        div.row {
                            padding-top: 180px;
                        }
                        div[style*="backgroundImage"] {
                            backgroundSize: cover;
                            backgroundPosition: top;
                        }
                    }

                    @media (min-width: 769px) and (max-width: 1024px) {
                        /* Small Laptops */
                        div.row {
                            padding-top: 220px;
                        }
                        div[style*="backgroundImage"] {
                            backgroundSize: contain;
                            backgroundPosition: center;
                        }
                    }

                    @media (min-width: 1025px) and (max-width: 1366px) {
                        /* Monitors */
                        div.row {
                            padding-top: 240px;
                        }
                        div[style*="backgroundImage"] {
                            backgroundSize: cover;
                            backgroundPosition: center;
                        }
                    }

                    @media (min-width: 1367px) and (max-width: 1600px) {
                        /* Larger Monitors */
                        div.row {
                            padding-top: 260px;
                        }
                        div[style*="backgroundImage"] {
                            backgroundSize: cover;
                            backgroundPosition: center;
                        }
                    }

                    @media (min-width: 1601px) {
                        /* XL Screens */
                        div.row {
                            padding-top: 280px;
                        }
                        div[style*="backgroundImage"] {
                            backgroundSize: cover;
                            backgroundPosition: center;
                        }
                    }

                    /* Additional styles go here */
                `}
            </style>

            <div>
                <img src={logo} alt="venom logo" height={100} width={100} className='rounded mx-auto d-block' />
            </div>
            <div className="container text-center">
                <div className="row" style={bgstyle}>
                    <div className="col">
                        <Button49 /><p style={divstyle}>WordPress</p>
                    </div>
                    <div className="col">
                        {/* empty column */}
                    </div>
                    <div className="col">
                        <Button50 /><p style={divstyle}>Coding</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Projects;
