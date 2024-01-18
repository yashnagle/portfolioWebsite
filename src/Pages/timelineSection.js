import React from "react";
import "./LandingScreen.css";
import logo from "../Images/nerdy_boy_3.svg";
import yashImg from "../Images/yash.jpeg";
import Section from "./section/section";

import { TypeAnimation } from "react-type-animation";

const timelineSection = () => {
  return (
    <div class="bg-grayColor">
      <section class="min-h-screen flex justify-center pt-20">
        <ul>
          <li>
              <div></div>
            <div class="text-sm text-gray-600">
              <p>
                <h3>June 2022</h3>
              </p>
              <p class="mt-2">
                <h2>Data Analyst Intern</h2>
                <h3>Persistent Systems Inc.</h3>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default timelineSection;
