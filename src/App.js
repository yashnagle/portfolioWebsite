// App.js
import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Pages/introSection";
import ExperienceSection from "./Pages/experienceSection";
import FooterSection from "./Pages/footerSection";
import resumeData from "./resumeData";
import Footer from "../src/Pages//footerSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage resumeData={resumeData} />
        <ExperienceSection resumeData={resumeData} />
        <Footer title="Thanks"></Footer>
        {/* <div className="line"></div> */}
        <br />
        <hr className="line" />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
