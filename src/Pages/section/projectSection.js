import React, { Component } from "react";

export default class Section extends Component {
  render() {
    let { title, tech, duties } = this.props.projExp;
    // console.log(this.props.projExp);
    return (
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        <h4>
          <span>
            <b>
              <i>{tech.join(" ")}</i>
            </b>
          </span>
        </h4>
        <span></span>
        <ul style={{ listStyleType: "disc", paddingLeft: "15px" }}>
          {duties.map((duty) => (
            <li>{duty}</li>
          ))}
        </ul>
      </div>
    );
  }
}
