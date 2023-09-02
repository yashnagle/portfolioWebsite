import React, { Component } from "react";

export default class Section extends Component {
  render() {
    // let workExp = this.props.workExp;
    let { title, CompanyName, sDate, eDate, duties } = this.props.workExp;
    return (
      <div className="row item">
        <div className="twelve columns">
          <h3>{title}</h3>
        </div>
        <div className="flex justify-between">
          <h4 class>
            <b>
              <i>{CompanyName}</i>
            </b>
          </h4>
          <h4>
            {sDate} &ndash; {eDate}
          </h4>
        </div>
        <ul style={{ listStyleType: "disc", paddingLeft: "15px" }}>
          {duties.map((duty) => (
            <li>{duty}</li>
          ))}
        </ul>
      </div>
    );
  }
}
