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
                <h1 className="welcome-text">Welcome to the Digital Wonderland of Efjeniah!</h1>
                <h2 className="quote">"Fierce and fabulous in the world of ones and zeros!"</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <h1>Hello! I'm Efjeniah Saru</h1>
          <h2 className="stack">Full-Stack Software Developer</h2>
          <p className="tch">
            I'm a tech enthusiast with a passion for creativity and problem-solving. Whether crafting elegant front-end designs or diving into backend architecture, I thrive on bringing ideas to life in the digital realm. Join me as we conquer the binary jungle together, one line of code at a time!
          </p>
          <div className="btns">
            <a href="/#resume" className="btn">View Resume</a>
            <a href="./assets/Efjeniah_Saru_CV.pdf" download class="btn">Download CV</a>
            <a href="/#projects" className="btn">See Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
