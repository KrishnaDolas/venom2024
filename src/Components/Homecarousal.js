import React from 'react';
import { ReactTyped } from 'react-typed';
import propic from '../Assets/venom1.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { GitHub, Gite } from '@mui/icons-material';



function HomeCarousel() {

  const divstyle = {
    fontFamily: "'Montserrat', sans-serif",
    color: "white",
    marginTop: "100px",
    fontSize: "30px",
    fontWeight: "bold",
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
          <div class="col text-center" style={divstyle}>
            <h1>Hello !</h1>
            <h1>I AM KRISHNA DOLAS</h1>
            <div>
              <h1>
                I'm a{" "}
                <ReactTyped
                  strings={["WEB DEVELOPER","S/W Developer", "Designer", "Wordpress Developer", "Writer"]}
                  typeSpeed={10}
                  loop
                  backSpeed={10}
                  cursorChar="🕷"
                  showCursor={true}
                />
              </h1>
            </div>
          </div>
          <div class="col">
            <img src={propic} className="rounded-5" alt='venomspic' />
            <div className='container'>
            <a href='https://www.facebook.com/krishna.dolas.7?mibextid=ZbWKwL' target='_blank'><FacebookIcon color="primary" sx={{ fontSize: 40 }}/>---</a>
            <a href='https://x.com/VENOM19215061?t=CWHrrF0RrUvaUxVrVL3nSw&s=09' target='_blank'><XIcon color="primary" sx={{ fontSize: 40 }}/>---</a>
            <a href='https://www.linkedin.com/in/krishna-dolas-a52081226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><LinkedInIcon color="primary" sx={{ fontSize: 40 }}/>---</a>
            <a href='https://www.instagram.com/dev.ven0m?igsh=OGw3Y3JueWJzeHpi' target='_blank'><InstagramIcon color="primary" sx={{ fontSize: 40 }}/>---</a>
            <a href='https://api.whatsapp.com/send?phone=8421501905' target='_blank'><WhatsAppIcon color="primary" sx={{ fontSize: 40 }}/>---</a>
            <a href='https://github.com/KrishnaDolas?tab=repositories' target='_blank'><GitHub color="primary" sx={{ fontSize: 40 }}/></a>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCarousel;
