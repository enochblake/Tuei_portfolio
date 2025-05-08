// Home.js
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="saru">
        <div className="background">
          <div className="overlay">
            <div className="container">
              <div className="content">
                <h1 className="welcome-text">
                  Welcome to the Digital Portfolio of Diana Chepkemoi Tuei
                </h1>
                <h2 className="quote">
                  “Improving efficiency and performance, one support call at a time.”
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <h1>Hello! I’m Diana Chepkemoi Tuei</h1>
          <h2 className="stack">Information Technology Professional</h2>
          <p className="tch">
            I’m a highly motivated IT professional with deep technical expertise in system support,
            CCTV operations, network & database management, and ERP systems. I thrive on solving
            user issues—whether on the helpdesk, over the phone, or via remote tools—and aim to
            drive efficiency, cut operating costs, and boost performance every day.
          </p>
          <div className="btns">
            <a href="/#resume" className="btn">View Resume</a>
            <a href="./assets/Diana_Tuei_CV.pdf" download className="btn">Download CV</a>
            <a href="/#projects" className="btn">See Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
