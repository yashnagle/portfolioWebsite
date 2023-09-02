import React, { Component } from "react";

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div>
          <h2>
            <b>
              <br />
              <hr
                style={{
                  color: "#333333",
                  backgroundColor: "#333333",
                  borderColor: "#333333",
                  marginTop: "100",
                  marginBottom: "100",
                  marginLeft: "200px",
                  marginRight: "200px",
                }}
              />
            </b>
          </h2>
        </div>
        <div>{children}</div>
      </div>
    );
  }
}
