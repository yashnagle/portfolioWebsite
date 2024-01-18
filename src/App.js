// App.js
import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Pages/introSection";
import ExperienceSection from "./Pages/experienceSection";
import FooterSection from "./Pages/footerSection";
import resumeData from "./resumeData";
import Footer from "../src/Pages/footerSection";
import Timeline from "./Pages/timelineSection";

class App extends Component {
  render() {
    return (
      <div className="App bg-grayColor">
        <LandingPage resumeData={resumeData} />
        <Timeline />
        <ExperienceSection resumeData={resumeData} />
        <Footer title="Thanks"></Footer>
        <div className="line"></div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
