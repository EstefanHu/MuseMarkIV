import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = () => {
  return (
    <div id='carousel_track-container'>
      <ul id='carousel_track'>
        <li className="carousel_slide current_slide">
          <div className="carousel_item" id="hero_1">
            <h1>Welcome to Project Muse</h1>
            <p>Your Cities Stories</p>
            <p>Created by You</p>
          </div>
        </li>
        <li className="carousel_slide">
          <div className="carousel_item" id="hero_2">
            <h1>Join Our Community</h1>
            <h1>Tell Your Story</h1>
            <h1>Gain an Audience</h1>
            <button id="read_publishing">Read More</button>
          </div>
        </li>
        <li className="carousel_slide current_slide">
          <div className="carousel_item" id="hero_3">
            <h1>Beta Coming Soon</h1>
            <p>Keep up with the project</p>
            <Link to='/join'>
              <button id="join_beta">Join Beta</button>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Carousel;