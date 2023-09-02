import React, { Component } from "react";

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div>
          <h2>
            <b>
              <i>END</i>
            </b>
          </h2>
        </div>
        <div>{children}</div>
      </div>
    );
  }
}
