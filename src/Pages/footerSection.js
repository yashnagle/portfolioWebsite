import React, { Component, View } from "react";
import Section1 from "./section/section1";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { FiMail } from "react-icons/fi";

import "./footerSection.css";

export default class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <div>
          <h2>
            <b>
              <div className="line1"></div>
              <div className="line2"></div>
              <br />
              <Section1 title="Get in Touch" />
              <div class="flex items-center justify-center">
                <br />
                <a
                  href="https://www.linkedin.com/in/yashnagle/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin />
                </a>
                <div class="h-6 w-px bg-gray-400 mx-2"></div>
                <a href={`mailto:yash.nagle1705@gmail.com`}>
                  <FiMail />
                </a>
                <div class="h-6 w-px bg-gray-400 mx-2"></div>
                <a href={`mailto:ynagle@umass.edu`}>
                  <MdAlternateEmail />
                </a>
              </div>
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
