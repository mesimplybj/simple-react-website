import React, { useState, useEffect } from 'react';
import DataService  from '../../Services/DataService';
import TypeAnimation from 'react-type-animation';

function HeroSection() {  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [props, setItems] = useState([]);

  useEffect(() => {
    DataService.GetHeroSection(setItems,setError,setIsLoaded);
  }, []);
  return (
    <div id="hero" className="hero route bg-image" style={{ backgroundImage: "url(" + props.image + ")" }} >
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container heroSectionText" >
            <h1 className="hero-title mb-4">{props.text}</h1>
            <p className="hero-subtitle">
                  <TypeAnimation
              cursor={true}
              sequence={['Designer', 1000,
                        'Developer',1000,
                        'Freelancer',1000,
                        'Photographer',1000,
              '']}
              wrapper="span"
              repeat={Infinity}
            />
              <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;