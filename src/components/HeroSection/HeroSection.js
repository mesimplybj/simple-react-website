import React from 'react';
function HeroSection({props}) {
  return (
    <div id="hero" className="hero route bg-image" style={{ backgroundImage: "url(" + props.Image + ")" }} >
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">{props.Text}</h1>
            <p className="hero-subtitle"><span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;