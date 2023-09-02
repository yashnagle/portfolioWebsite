import React from "react";
import "./LandingScreen.css";
import logo from "../Images/nerdy_boy_3.svg";

import { TypeAnimation } from "react-type-animation";

const LandingPage = () => {
  // const navigate = useNavigate();

  // const goToSignUp = () => {
  //   navigate('/SignUp');
  // };

  return (
    <div className="landing-page">
      <div className="lp-header">
        <img src={logo} alt="YN Logo" className="logo-header" />
        <div className="nav-links">
          {/* <a href="/">Home</a> */}
          <a
            href="https://drive.google.com/file/d/17DWbIyfsbh0g5dXB7Szb8OgvUNnEzNy7/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/yashnagle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yashnagle"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
      <div className="banner">
        <div className="caption">
          Welcome, my name is
          <div className="type-box">
            <TypeAnimation
              sequence={["Yash Nagle.", 1000]}
              speed={200}
              repeat={0}
              className="typing-effect"
            />
          </div>
          {/* <div className="intro">
            <p>
              <br />
              <br />
              I'm an Honors new-grad with a double major in{" "}
              <u>Computer Science</u> and <u>Economics</u>.
              <br />I have gained valuable industry experience as a{" "}
              <u>Data Analyst Intern</u> at Persistent Systems.
              <br />I have also worked as a <u>Research Assistant</u> for a{" "}
              <u>Machine Learning lab</u>, gaining hands-on experience with
              research methodologies and data analysis techniques.
              <br />I am constantly seeking new opportunities to grow and learn,
              and I am eager to bring my expertise to a team that shares my
              passion for innovation and problem-solving.
            </p>
          </div> */}
          {/* This is my Personal Portfolio Website. */}
        </div>
        <div></div>
      </div>
      <div className="line1"></div>
      <div className="line2"></div>
      {/* <div className='cta1' > 
        <p> Ready to find collabs? Create your profile and swipe to find your match! <br/> </p>
        <button onClick={goToSignUp}> JOIN NOW </button>
      </div> */}
    </div>
  );
};

export default LandingPage;
