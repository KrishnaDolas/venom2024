import React from 'react';
import slide1 from '../Assets/slide-1.jpg';
import slide2 from '../Assets/slide-2.jpg';
import slide3 from '../Assets/slide-3.jpg';

function Homecarousal() {
  const divstyle = {
    fontFamily: "'Montserrat', sans-serif",
  };

  return (
    <>
    <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
          /* Additional styles go here */
        `}
      </style>

      <div className="container-fluid overflow-hidden text-center vh-60" style={divstyle}>
        <div className="row gx-5 d-flex align-items-center justify-content-center">
          <div className="col">
            <div className="p-3" style={divstyle}>
              <h1 style={{ color: '#20b38e' }}>Welcome to VENOM's website</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit risus
                fusce, laoreet sodales ante hendrerit dignissim primis mus
                fringilla ac, et ridiculus sapien per torquent rhoncus habitant
                nulla.
              </p>
            </div>
          </div>

          <div className="col">
            <div className="p-3">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner" style={divstyle}>
                  <div className="carousel-item active">
                    <img
                      src={slide1}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={slide2}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={slide3}
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homecarousal;
