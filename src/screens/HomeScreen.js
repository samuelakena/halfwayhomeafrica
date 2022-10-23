import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <section className="containerfluid hero-section">
        <div>
          <h1>
            Welcome to Our Gallery!
            <h2> Start palaning for your new home Here</h2>
          </h1>
          <Link to="/ourdesigns">
            <button className="cta">View Gallery</button>
          </Link>
        </div>
        <div></div>
      </section>

      {/* About us */}

      <section className="about-us">
        <div className="containerfluid">
          <h3>Who we are</h3>
          <h4>
            We are an outline-based design firm. We conceive and design houses
            and furniture for the contemporary Sub-Saharan African urban
            lifestyle. Halfwayhome.design is our online platform by which we
            showcaser these design concepts and help you plan your next project.
          </h4>

          {/* Mission */}

          <h3>Mission</h3>

          <div className="row">
            <div className="mission-box col-lg-4">
              <i class="icon fas fa-check-circle fa-4x"></i>
              <p>
                To make good Design and ownership of Quality homes/houses within
                reach for Sub-Saharan Africa
              </p>
            </div>
            <div className="mission-box col-lg-4">
              <i class="icon fas fa-bullseye fa-4x"></i>
              <p>
                Contribute to the improvement of our urban built environment and
                places.
              </p>
            </div>
            <div className="mission-box col-lg-4">
              <i class="icon fas fa-heart fa-4x"></i>
              <p>
                Minimise the bureaucratic processes involved in homebuilding and
                explore alternative methods and materials for building
                houses/homes
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeScreen;
