import img1 from '../Assets/TweetX.png';
import img2 from '../Assets/Punebizz.png';
import img3 from '../Assets/Agrovenom.png';
import img4 from '../Assets/Lightbulb.png';
import img5 from '../Assets/music app.png';
import img6 from '../Assets/Wetherforcast app.png';
import img7 from '../Assets/oldwebsite.png';
import img8 from '../Assets/smtp form.png';
import img9 from '../Assets/todoapp.png';
import img10 from '../Assets/Calculator.png';
import img11 from '../Assets/beach resort.png';
import img12 from '../Assets/facebook clone.png';
import img13 from '../Assets/Registration form.png';
import img14 from '../Assets/batar batar app.png';
import GitHub from '@mui/icons-material/GitHub';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import React, { useState, useEffect } from 'react';




function Coding() {

    const imgstyle={
        width: "100%",
        paddingBottom: "20px"
    }


    const divstyle = {
        fontFamily: "'Montserrat', sans-serif",
        marginTop: '20px',
        color: '#20b38e',
      };

      const buttonstyle={
        backgroundColor:'#20b38e',
      };

      const navigate = useNavigate();

      const handleClick = () => {
        navigate(`/Wordpress`)
      };

      const [happyClients, setHappyClients] = useState(0);
      const [projects, setProjects] = useState(0);
      const [liveProjects, setLiveProjects] = useState(0);
      const [totalProjects, setTotalProjects] = useState(0);
  
      // You can set the final values based on your actual data
      const finalHappyClients = 10;
      const finalProjects = 10;
      const finalLiveProjects = 3;
      const finalTotalProjects = 10;
  
      useEffect(() => {
          // You can add more logic here, for example, fetch data from an API and update the state.
          setHappyClients(finalHappyClients);
          setProjects(finalProjects);
          setLiveProjects(finalLiveProjects);
          setTotalProjects(finalTotalProjects);
      }, []);

      const barstyle={width:'100%'};
      const charstyle={height:'30px'};
      const colstyle={backgroundColor:'#dad7cd',};

    return ( 
        <>
        <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
          /* Additional styles go here */
        `}
      </style>

        <h1 className="text-center" style={divstyle}>Coding Projects</h1>

        <div class="container text-center">
        <div class="row">
            <div class="col-md-4">
            <button type="button" class="btn btn-primary btn-lg " style={buttonstyle} onClick={handleClick}><KeyboardDoubleArrowLeftIcon/>Have a look on WordPress Projects</button>
            </div>
            <div class="col-md-4">
            <a href="https://github.com/KrishnaDolas?tab=repositories" target='_blank'><GitHub style={{ color: '#20b38e',fontSize: '5em' }}/></a>
            <p style={divstyle}>Click here to see the repositories on github</p>
            </div>
            <div class="col-md-4">
            {/* Column */}
            </div>
        </div>
        </div>

        <br/><br/>
        <div class="container text-center">
        <div class="row">
            <div class="col">
            <a href="https://krishnadolas.github.io/ReactTweetX/" target='_blank'><img src={img1} alt="React Tweet X" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
            <a href="https://krishnadolas.github.io/Punebizz/" target='_blank'><img src={img2} alt="PuneBizz" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
            </div>
            <div class="col">
            <a href="https://krishnadolas.github.io/Agrovenom/" target='_blank'><img src={img3} alt="AgroVenom" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
            <a href="https://krishnadolas.github.io/bulb-on-off-fun/" target='_blank'><img src={img4} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
            </div>
            <div class="col">
            <a href="https://krishnadolas.github.io/Musicapp/" target='_blank'><img src={img5} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
            <a href="https://krishnadolas.github.io/Weatherforcast/" target='_blank'><img src={img6} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
            </div>
            </div>
            </div><br/>

            <div class="container text-center">
            <div class="row">
                <div class="col">
                <a href="https://krishnadolas.github.io/bootstraptempvenom.github.io/" target='_blank'><img src={img7} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
                </div>
                <div class="col">
                <a href="https://krishnadolas.github.io/todoapp/" target='_blank'><img src={img9} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
                </div>
                <div class="col">
                <a href="https://krishnadolas.github.io/venomsmtpform/" target='_blank'><img src={img8} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
                </div>
            </div>
            </div>
                <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <a href="https://krishnadolas.github.io/ReactBeachResort/" target='_blank'><img src={img11} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
                    </div>
                    <div class="col">
                    <a href="https://krishnadolas.github.io/calculator.io/" target='_blank'><img src={img10} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
                    </div>
                    <div class="col">
                    <a href="https://krishnadolas.github.io/fbclone/" target='_blank'><img src={img12} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/><br/><br/>
                    </div>
                </div>
                </div>

                <div class="container text-center">
                <div class="row">
                    <div class="col">
                    <a href="https://batar-batar-app.vercel.app/" target='_blank'><img className='rounded mx-auto d-block' height={300} width={300} style={imgstyle} src={img14}/></a>
                    </div>
                    <div class="col">
                        {/* empty */}
                    </div>
                    <div class="col">
                    <a href="https://registration-using-mern.onrender.com/"  target='_blank'><img className='rounded mx-auto d-block' height={300} width={300} style={imgstyle} src={img13}/></a>
                    </div>
                </div>
                </div>
           
                <div><br/><br/>
                        <section className="counts section-bg">
                        <div className="container-xl border">
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
                                        <p className="h3">Technology's Used</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </div><br/><br/>

        <div className='container-lg'>

            <h1 className='text-center' style={divstyle}>Some Awesome Technologie's that i use</h1><br/>
                    
        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>React :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Angular :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Java Script :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={barstyle}>80%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Bootstrap :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={barstyle}>80%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>HTML :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>CSS :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Responsive Design :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={barstyle}>100%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>J-QUERY :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>JSON :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={barstyle}>90%</div>
        </div><br/>
    </div>

        </>
     );
}

export default Coding;