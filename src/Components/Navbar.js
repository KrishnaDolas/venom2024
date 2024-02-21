import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const divstyle = {
    fontFamily: "'Montserrat', sans-serif",
  };
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-transparent " style={divstyle}>
  <div className="container-fluid bg-transparent">
    <a className="navbar-brand" href="#">VENOM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" to="">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
     );
}

export default Navbar;