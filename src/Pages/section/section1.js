import React, { Component } from "react";

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div>
          <u>
            <h2 className="text-center">{title}</h2>
          </u>
        </div>
        <div>{children}</div>
      </div>
    );
  }
}
