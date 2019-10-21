import React from 'react';
import '../css/landingSection.css';
import hero from '../hero-shapes.png';
function LandingSection (){
    return(
        <div id="landingSection">
            <div id="landingSectionLeft">
                <h1 className="headline">
                Pixel-perfect React apps.
                </h1>
                <p id="subHeadline">
                Get your pixel-perfect-repsonsive-animated-interactive-modular React app today. Then spend all the time and money you saved <span id="subHeadlineBold">taking your business to new heights.</span>
                </p>
                <a
                className="ctaButton"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                >
                GET YOUR APP
                </a><br></br><br></br><br></br><br></br>
                <a
                className="ctaButton2"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                >
                LEARN MORE
                </a>
            </div>
            <div id="landingSectionRight">
                <img id="hero" src={ hero }></img>
                
            </div>
        </div>

        
        
    );
}
export default LandingSection;