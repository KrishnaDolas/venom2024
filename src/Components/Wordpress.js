import img1 from '../Assets/sevenseascj.com.jpg';
import img2 from '../Assets/rajmudratransport.jpg';
import img3 from '../Assets/kpproduction.in.jpg';
import img4 from '../Assets/jayakhanna.com.jpg';
import img5 from '../Assets/Emcee Manoj.com.jpg';
import img6 from '../Assets/mystiiquereading.com.jpg';
import CountUp from 'react-countup';
import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';


function Wordpress() {

    const divstyle = {
        fontFamily: "'Montserrat', sans-serif",
        marginTop: '20px',
        color: '#20b38e',
      };

      const [happyClients, setHappyClients] = useState(0);
      const [projects, setProjects] = useState(0);
      const [liveProjects, setLiveProjects] = useState(0);
      const [totalProjects, setTotalProjects] = useState(0);
  
      // You can set the final values based on your actual data
      const finalHappyClients = 10;
      const finalProjects = 11;
      const finalLiveProjects = 6;
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

      const buttonstyle={
        backgroundColor:'#20b38e',
        marginTop:'50px'
      };

      const navigate = useNavigate();

      const handleClick = () => {
        navigate(`/Coding`)
      };


    return ( 
        <>
        <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
          /* Additional styles go here */
        `}
      </style>

      <div class="container text-center">
        <div class="row">
            <div class="col-md-4">
            {/* empty */}
            </div>
            <div class="col-md-4">
            <h1 className="text-center" style={divstyle}>Wordpress Projects</h1>
            </div>
            <div class="col-md-4">
            <button type="button" class="btn btn-primary btn-lg " style={buttonstyle} onClick={handleClick}><KeyboardDoubleArrowRightIcon/>Have a look on Coding Projects</button>
            </div>
        </div>
        </div>

        <br/><br/>
        <div class="container text-center">
        <div class="row">
            <div class="col">
            <a href="http://sevenseascj.com/" target='_blank'><img src={img1} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/>
            <a href="http://rajmudratransport.in/" target='_blank'><img src={img2} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a>
            </div>
            <div class="col">
            <a href="https://kpproduction.in/" target='_blank'><img src={img3} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/>
            <a href="https://jayakhanna.com/" target='_blank'><img src={img4} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a>
            </div>
            <div class="col">
            <a href="https://emceemanoj.com/" target='_blank'><img src={img5} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a><br/>
            <a href="https://mystiiquereading.com/" target='_blank'><img src={img6} alt="Seven sea's" height={300} width={300} className='rounded mx-auto d-block'/></a>
            </div>
        </div>
        </div><br/><br/><br/>

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
                                        <p className="h3">Plugin's used</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </div><br/><br/>

        <div className='container-lg'>

            <h1 className='text-center' style={divstyle}>Some Awesome Plugin's that i use</h1><br/>
                    
        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Elementor :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Beaver Builder :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Wp Backery :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={barstyle}>60%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Divi :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={barstyle}>80%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Contact Form 7 :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Wp Forms :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Envato Elements :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Esential Addon's :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Table Some :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Templately :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={barstyle}>80%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Smart Slider :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={barstyle}>90%</div>
        </div><br/>

        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={charstyle}>
            <h4>Sticky Nav Bar :&nbsp;</h4>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={barstyle}>100%</div>
        </div>

        </div>
</>
     );
}

export default Wordpress;