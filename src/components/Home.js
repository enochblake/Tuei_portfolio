import React from "react";
import "./Home.css";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects.js";
import Contacts from "./Contacts";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <div className="saru">
            <div className="background">
                <div className="overlay">
                    <div className="container">
                        <div className="content">
                            <h1 className="text-2xl">Welcome to the Digital Wonderland of Efjeniah!</h1>
                            <h2 className="text-xl"><i>"Fierce and fabulous in the world of ones and zeros!"</i></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="name">
                <h1>Hello! , I'm Efjeniah Saru</h1>
                <h2 className="stack">Full-Stack Software Developer</h2>
                <p className="tch">I'm a tech enthusiast with a passion for creativity and problem-solving. Whether crafting elegant front-end designs or diving into backend architecture, I thrive on bringing ideas to life in the digital realm.
                    Join me as we conquer the binary jungle together, one line of code at a time!</p>
                <div className="btns">
                    <button className="btn"><Link to='resume'>Resume</Link></button>
                    <button className="btn"><Link to='projects'>Projects</Link></button>
                </div>
            </div>
            </div>
            <div>
                <About />
            </div>
            <div>
                <Resume />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contacts />
            </div>
        </div>
    )
}

export default Home;
