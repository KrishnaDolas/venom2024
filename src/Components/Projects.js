import logo from '../Assets/venomlogo.jpg';
import logo1 from '../Assets/covervenom.png';
import Button49 from './Button49';
import Button50 from './Button50';


function Projects() {
    const divstyle = {
        fontFamily: "'Montserrat', sans-serif",
        color:'white'
      };

      const bgstyle={
        backgroundImage: `url(${logo1})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display:'flex',
        position: 'absolute',
        top: '0',
        left: '0',
        zIndex: '-1',
        overflow: 'hidden',
        paddingTop:'280px',
      }

    return ( 
        <>
        <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
          /* Additional styles go here */
        `}
      </style>
      
        <div>
        <img src={logo} alt="venom logo" height={100} width={100} className='rounded mx-auto d-block'/>
        </div>
        <div class="container text-center">
        <div class="row" style={bgstyle}>
            <div class="col">
            <Button49/><p style={divstyle}>WordPress</p>
            </div>
            <div class="col">
            {/* empty column */}
            </div>
            <div class="col">
            <Button50/><p style={divstyle}>Coding</p>
            </div>
        </div>
        </div>

        
        </>
     );
}

export default Projects;