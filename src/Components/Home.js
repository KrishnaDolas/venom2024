import React, { useState, useEffect } from 'react';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CountUp from 'react-countup';
import Homecarousal from './Homecarousal';
import GitHub from '@mui/icons-material/GitHub';
import Experience from './Experience';


function Home() {

    const divstyle = {
        fontFamily: "'Montserrat', sans-serif",
        color:'white'
      };

    const [happyClients, setHappyClients] = useState(0);
    const [projects, setProjects] = useState(0);
    const [liveProjects, setLiveProjects] = useState(0);
    const [totalProjects, setTotalProjects] = useState(0);

    // You can set the final values based on your actual data
    const finalHappyClients = 10;
    const finalProjects = 11;
    const finalLiveProjects = 6;
    const finalTotalProjects = 1;

    useEffect(() => {
        // You can add more logic here, for example, fetch data from an API and update the state.
        setHappyClients(finalHappyClients);
        setProjects(finalProjects);
        setLiveProjects(finalLiveProjects);
        setTotalProjects(finalTotalProjects);
    }, []);

    const colstyle={backgroundColor:'#dad7cd',}

    // const countStyle = { fontSize: '2em', color: '#20b38e' };
    // const countStyle1 = { fontSize: '2em', color: '#c042ff' };
    // const countStyle2 = { fontSize: '2em', color: '#46d1ff' };
    // const countStyle3 = { fontSize: '2em', color: '#ffb459' };


    return (
        <>
        <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
          /* Additional styles go here */
        `}
      </style>
      
            <div>
                <Homecarousal /><br/><br/><br/>
                <div className="container-fluid overflow-hidden text-Left vh-60" style={divstyle}>
                    <div className="row gx-5 d-flex align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/AmHEfTSBXiY?si=xGvQqfymWuO-zs9t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className="col-lg-6">
                            <h1 style={{ color: '#20b38e' }}>Design epic websites</h1>
                            <p>
                                Well like I said I'm a web developer and like to code and make various websites
                            </p>
                            <div className="d-flex align-items-center">
                                <IntegrationInstructionsIcon style={{ color: '#20b38e' }} />
                                <div className="ms-2">
                                    <h3 style={{ color: '#20b38e' }}>Core Coding</h3><hr/>
                                    <p>
                                    Core coding consists of a group of languages like HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, and REACTJS all these languages are used to make a website more creative, effective, and faster and we can create, edit, and delete anything on the website.
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <DashboardIcon style={{ color: '#20b38e' }} />
                                <div className="ms-2">
                                    <h3 style={{ color: '#20b38e' }}>Wordpress</h3><hr/>
                                    <p>
                                    WordPress is a platform where the website is been built by drag and drop method there is no coding while designing and it totaly saves the coding of HTML CSS and JavaScript all the code is in .php and uses MySQL for the database that is xamp server for the localhost to install WordPress on the host pc only other than this your hosting provider provides Cpanel and WordPress for directly hosted sites it's the same create online or offline.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container text-Left align-items-center" style={divstyle}>
                    <h3 style={{ color: '#20b38e' }}>Core Coding</h3><br/>

                    <div className="row border-bottom">
                        <div className="col-md-4 border-end">
                        <h3 style={{ fontSize: '2em', color: '#20b38e' }}>01</h3><br/>
                        <h3>HTML</h3><br/>
                        <p>I have hands-on HTML like its the basic need of any webpage</p>
                        </div>
                        <div className="col-md-4">
                        <h3 style={{ fontSize: '2em', color: '#20b38e' }}>02</h3><br/>
                        <h3>CSS</h3><br/>
                        <p>We need the CSS too just the body doesn't workout right imagine a human skeleton that's the webpage without CSS.</p>
                        </div>
                        <div className="col-md-4 border-start">
                        <h3 style={{ fontSize: '2em', color: '#20b38e' }}>03</h3><br/>
                        <h3>JAVA SCRIPT</h3><br/>
                        <p>Java Script is one of the most powerful scripting languages and my favorite by this we can do certain mathmatical codes to enhance our knowledge and logic</p>
                        </div>
                    </div>
                        
                    <div className="row">
                        <div className="col-md-4 border-end">
                        <br/><h3 style={{ fontSize: '2em', color: '#20b38e' }}>04</h3><br/>
                        <h3>J QUERY</h3><br/>
                        <p>One and only jquery an epic design to the webpage and have good command on it.</p>
                        </div>
                        <div className="col-md-4">
                        <br/><h3 style={{ fontSize: '2em', color: '#20b38e' }}>05</h3><br/>
                        <h3>BOOTSTRAP</h3><br/>
                        <p>Ahha! A Conversation on saving time! bootstrap templates are the ones you can easily edit and put your things or data like you are in god mode.</p>
                        </div>
                        <div className="col-md-4 border-start">
                        <br/><h3 style={{ fontSize: '2em', color: '#20b38e' }}>06</h3><br/>
                        <h3>REACTJS</h3><br/>
                        <p>What an epic language like it not only reduces code but also reloads only the particular block which is pretty much cool I would say it makes the webpage faster like have you ever seen Facebook like button if you click only like are counted and the full page doesn't reload by the way I'm a beginner at this time in this still learning.</p>
                        </div>
                    </div>

                    </div>

                    <div className="container text-Left align-items-center" style={divstyle}>
                    <h3 style={{ color: '#20b38e' }}>Wordpress</h3><br/>

                    <div className="row border-bottom">
                        <div className="col-md-4 border-end">
                        <h3 style={{ fontSize: '2em', color: '#20b38e' }}>01</h3><br/>
                        <h3>Elementor</h3><br/>
                        <p>One of the best editors for a WordPress site each website of mine is made with the help of elementor.</p>
                        </div>
                        <div className="col-md-4">
                        <h3 style={{ fontSize: '2em', color: '#20b38e' }}>02</h3><br/>
                        <h3>Esential Addon's for Elementor</h3><br/>
                        <p>Some sort of more features in the elementor section feels good !</p>
                        </div>
                        <div className="col-md-4 border-start">
                        <h3 style={{ fontSize: '2em', color: '#20b38e' }}>03</h3><br/>
                        <h3>Envato elements</h3><br/>
                        <p>One more addon for the elementor to design and add new and epic predesigned blocks to the webpage</p>
                        </div>
                    </div>
                        
                    <div className="row" style={divstyle}>
                        <div className="col-md-4 border-end">
                        <br/><h3 style={{ fontSize: '2em', color: '#20b38e' }}>04</h3><br/>
                        <h3>Contact Form 7</h3><br/>
                        <p>A form for the viewer or the visitor to fill in the details and get connected to the admin</p>
                        </div>
                        <div className="col-md-4">
                        <br/><h3 style={{ fontSize: '2em', color: '#20b38e' }}>05</h3><br/>
                        <h3>Table Some</h3><br/>
                        <p>A plugin for showing the contact form details right on the website only to the admin</p>
                        </div>
                        <div className="col-md-4 border-start">
                        <br/><h3 style={{ fontSize: '2em', color: '#20b38e' }}>06</h3><br/>
                        <h3>Templately</h3><br/>
                        <p>A plugin for epic-designed blocks and predesigned pages all that work can be more faster and effective.</p>
                        </div>
                    </div>
                        <div><br/><br/>
                        <section className="counts section-bg">
                        <div className="container border">
                            <div className="row">
                                <div className="col-lg-3 col-md-6 text-center border m-0" data-aos="fade-up" style={colstyle}>
                                    <div className="count-box">
                                        <i className="bi bi-simple-smile h1" ></i>
                                        <CountUp start={0} end={happyClients} duration={4} separator="," style={{ fontSize: '2em', color: '#20b38e' }} />
                                        <p className="h3">Happy Clients</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 text-center border m-0" data-aos="fade-up" data-aos-delay="200" style={colstyle}>
                                    <div className="count-box">
                                        <i className="bi bi-document-folder h1" ></i>
                                        <CountUp start={0} end={projects} duration={4} separator="," style={{ fontSize: '2em', color: '#20b38e' }} />
                                        <p className="h3">Projects</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 text-center border m-0" data-aos="fade-up" data-aos-delay="400" style={colstyle}>
                                    <div className="count-box">
                                        <i className="bi bi-live-support h1" ></i>
                                        <CountUp start={0} end={liveProjects} duration={4} separator="," style={{ fontSize: '2em', color: '#20b38e' }} />
                                        <p className="h3">Live Projects</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 text-center border m-0" data-aos="fade-up" data-aos-delay="600" style={colstyle}>
                                    <div className="count-box">
                                        <i className="bi bi-users-alt-5 h1" ></i>
                                        <CountUp start={0} end={totalProjects} duration={4} separator="," style={{ fontSize: '2em', color: '#20b38e' }} />
                                        <p className="h3">One and only me</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                        </div><br/><br/>
                    </div><br/><br/>

                    <div><Experience/></div>

                    <div class="container text-center" style={divstyle}>
                    <div class="row">
                        <h1 style={{ color: '#20b38e' }}>Services</h1><br/><br/><br/><br/>
                        <div class="col-md-4">
                        <IntegrationInstructionsIcon style={{ color: '#20b38e' }} />
                        <h3 style={{ color: '#20b38e' }}>Core Coding</h3><hr/>
                        <p>Core coding consists of a group of languages like HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP, and REACTJS all these languages are used to make a website more creative, effective, and faster and we can create, edit, and delete anything on the website.</p>
                        </div>
                        <div class="col-md-4">
                        <GitHub style={{ color: '#20b38e',fontSize: '5em' }}/>
                        </div>
                        <div class="col-md-4">
                        <DashboardIcon style={{ color: '#20b38e' }} />
                        <h3 style={{ color: '#20b38e' }}>WordPress</h3><hr/>
                        <p>WordPress is a platform where the website is been built by drag and drop method there is no coding while designing and it totaly saves the coding of HTML CSS and JavaScript all the code is in .php and uses MySQL for the database that is xamp server for the localhost to install WordPress on the host pc only other than this your hosting provider provides Cpanel and WordPress for directly hosted sites it's the same create online or offline.</p>
                        </div>
                    </div>
                    </div>

            </div>
        </>
    );
}

export default Home;
