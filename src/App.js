// App.js
import React, { Component } from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Pages/introSection";
import ExperienceSection from "./Pages/experienceSection";
import resumeData from "./resumeData";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage resumeData={resumeData} />
        <ExperienceSection resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
