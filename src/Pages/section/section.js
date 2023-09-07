import React, { Component } from "react";

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div>
          <u>
            <h1 className="text-center">{title}</h1>
          </u>
        </div>
        <div>{children}</div>
      </div>
    );
  }
}
