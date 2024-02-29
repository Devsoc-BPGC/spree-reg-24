import React from 'react';
import land from "C:/Users/longi/WebD/spree-reg-24/src/assets/landing_img.svg";
import insta from "./assets/insta.png"
import { Link } from 'react-router-dom'
import "./Lapp.css";

function Lapp() {
  const styles = {
    backgroundImage: `url(${land})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
  };

  const buttonWidth = '130px'; // Set the width of the button

  const imageStyle = {
    width: 130,
    height: 59*130/200, // Ensure the image has the same dimensions as the button
    cursor: 'pointer',
  };

  const handleClick = () => {
    
    window.location.href = 'https://www.instagram.com/';
  };

  return (
    <div style={styles} className='bgimg'>
      <div className='lwright'>
      <div className='regbtn'>
        <Link to="/register">
        <button style={{ 
          fontSize: '15px', 
          color:'white', 
          border: '2.85px solid white', 
          padding: '8px 13px', 
          background: 'rgba(0, 0, 0, 1)', 
          borderRadius: '999px', 
          cursor: 'pointer',
          width: buttonWidth, // Set the width of the button
          marginRight:'-13px',
          letterSpacing:'0.25em'
        }}>REGISTER</button>
        </Link>
      </div> 
      <div className='text' style={{ width: 200   , color:'#FEDF3E', fontSize:'9.7px', textAlign: 'center' }}> 
        <p>Embrace the challenge, rally for your convictions, and let the intensity of competition ignite the passion within.</p>
      </div>
      <div className='follow'>
       
      <a href="https://example.com" target="_blank" rel="noopener noreferrer"> {/* Open the link in a new tab */}
          <img src={insta} alt="Image" style={imageStyle} onClick={handleClick} /> {/* Set the image src, alt text, and style */}
        </a>
        
      </div>  
      </div>
    </div>
  );
}

export default Lapp;
