import React, { Component } from "react";
import moment from "moment";
import Persistent from "../workExp/Persistent";
import KDL from "../workExp/KDL";
import BookTracker from "../Projects/bookTracker";
import Bcg from "../Projects/BCG";
import Clog from "../Projects/CLOG";
import Honors from "../Projects/HonorsThesis";
import Section from "./section/section";
import WorkExpSection from "./section/workExpSection";
import ProjectExpSection from "./section/projectSection";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div className="items-center w-3/4 m-auto">
        <section id="resume">
          {/* Education */}
          <Section title="Education">
            {resumeData.education &&
              resumeData.education.map((university) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{university.name}</h3>
                      <div className="flex justify-between">
                        <h4>
                          <i>Commonwealth Honors College</i>
                        </h4>
                        <h4>Sept 2019 &ndash; May 2023</h4>
                      </div>
                      Achievements:
                      <br />
                      <ul
                        style={{ listStyleType: "disc", paddingLeft: "15px" }}
                      >
                        {university.achievements.map((achievement) => (
                          <li>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
          </Section>
          <div className="line1"></div>
          <div className="line2"></div>
          <br />
          <Section title="Work Experience">
            <WorkExpSection workExp={Persistent} />
            <WorkExpSection workExp={KDL} />
          </Section>
          {/* Projects */}
          <div className="line1"></div>
          <div className="line2"></div>
          <br />
          <Section title="Projects">
            <ProjectExpSection projExp={Bcg} />
            <ProjectExpSection projExp={BookTracker} />
            <ProjectExpSection projExp={Clog} />
            <ProjectExpSection projExp={Honors} />
          </Section>
        </section>
      </div>
    );
  }
}
