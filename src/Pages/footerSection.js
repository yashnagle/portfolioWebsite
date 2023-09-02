import React, { Component } from "react";

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div>
          <h1 className="text-center">{title}</h1>
        </div>
        <div>{children}</div>
      </div>
    );
  }
}
