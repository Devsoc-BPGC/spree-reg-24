import land from "./assets/landing_img.svg";
import insta from "./assets/insta.png";
import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
// import timer from "./Timer.jsx";
import { useState, useRef, useEffect } from 'react';
import "./Lapp.css";

function Lapp() {
  //timer start
  const [timerDays, setTimerDays] = useState('00')
  const [timerHours, setTimerHours] = useState('00')
  const [timerMinutes, setTimerMinutes] = useState('00')
  // const [timerSec, setTimerSec] = useState('00')

  // const cdDate = new Date('March 29, 2024 00:00:00').getTime();
  // console.log(cdDate);


  let interval = useRef();

  const timed = () => {
    const cdDate = new Date('March 29, 2024 00:00:00').getTime();

    console.log(cdDate);


      interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = cdDate - now;
     console.log(Math.floor(distance/(1000*60*60*24)));

    
    
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const formattedDays = days < 10 ? `0${days}` : days;
      const hours = Math.floor((distance) % (1000 * 60 * 60*24) / (1000 * 60 *60));
      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const minutes = Math.floor((distance) % (1000 * 60 * 60) / (1000 * 60));
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      // const seconds = Math.floor(distance % (1000 * 60) / (1000));

      // console.log(days);

      // console.log(distance / (1000 * 60 * 60 * 24));

      
      
      if (distance < 0) {
        clearInterval(interval.current);
      } else {

        setTimerDays(formattedDays);
        setTimerHours(formattedHours);
        // setTimerSeconds(seconds);
        setTimerMinutes(formattedMinutes);
      }

    }, 1000);

    

  }

  useEffect(() => {
    timed();

    return () => {
      clearInterval(interval.current);
    };
  });
  //timer end


  const styles = {
    backgroundImage: `url(${land})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  const buttonWidth = "130px"; // Set the width of the button

  const imageStyle = {
    width: 130,
    height: (59 * 130) / 200, // Ensure the image has the same dimensions as the button
    cursor: "pointer",
  };

  const handleClick = () => {
    window.location.href = "https://www.instagram.com/";
  };

  return (
    <div style={styles} className="bgimg">

      <NavBar />

      <section className="timer-container">
        <div className="timer">
          {/* <div>
            <p>Timer</p>
        </div> */}
          <div className="day">
            <p className="sm"><small>Days</small></p>
            <div className="gd">
            <p >{timerDays}</p>
            <p className="l">:</p>
            </div>

          </div>
          

          <div className="hours">
            <p className="sm"><small>Hours</small></p>
            <div className="gd">
              <p>{timerHours}</p>
              <p className="l">:</p>
              
            </div>
            

          </div>

          <div className="minutes">
            <p className="sm1"><small>Minutes</small></p>
            <div className="minute">
            <p>{timerMinutes}</p>
            </div>

          </div>
        </div>
      </section>

      <div className="lwright">
        <div className="regbtn">
          <Link to="/register">
            <button
              style={{
                fontSize: "15px",
                color: "white",
                border: "2.85px solid white",
                padding: "8px 13px",
                background: "rgba(0, 0, 0, 1)",
                borderRadius: "999px",
                cursor: "pointer",
                width: buttonWidth, // Set the width of the button
                marginRight: "-13px",
                letterSpacing: "0.25em",
              }}
            >
              REGISTER
            </button>
          </Link>
        </div>
        <div
          className="text"
          style={{
            width: 200,
            color: "#FEDF3E",
            fontSize: "9.7px",
            textAlign: "center",
          }}
        >
          <p>
            Embrace the challenge, rally for your convictions, and let the
            intensity of competition ignite the passion within.
          </p>
        </div>
        <div className="follow">
          <a
            href="https://www.instagram.com/bitsspree/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            {/* Open the link in a new tab */}
            <img
              src={insta}
              alt="Image"
              style={imageStyle}
              onClick={handleClick}
            />{" "}
            {/* Set the image src, alt text, and style */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Lapp;
