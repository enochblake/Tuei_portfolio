import React from "react";
import './about.css';
// import { Link } from 'react-router-dom';
// import { FaCode, FaLaptopCode, FaLightbulb, FaUsers } from "react-icons/fa";

export default function About() {
    return (
        <div className="about-container">
            <h1 className="text-3xl font-extrabold text-center mb-6 mt-0" style={{color: '#ffff'}}>About Me!</h1>
            <div className="flex-about">
                <div className="about-text">
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/009/298/359/non_2x/3d-illustration-of-web-development-png.png" 
                        alt="vector"
                        className="about-img"
                    />
                </div>
                <div className="about">
                    <p className="text-xl text-justify">
                        I'm a driven and passionate Full-stack Software Developer with a strong foundation in Information Technology. I specialize in crafting full-stack solutions that enhance digital experiences. My journey in tech has been shaped by a love for both front-end elegance and backend robustness.
                    </p>
                    <p className="text-xl text-justify">
                        I thrive in environments where creativity meets collaboration, and I'm always eager to tackle new challenges and bring innovative ideas to life. Whether it's building secure, efficient systems or designing intuitive user interfaces, I'm committed to making a positive impact through technology.
                    </p>
                    <p className="text-xl text-justify">
                        Let's navigate the ever-evolving digital landscape together, one line of code at a time!
                    </p>
                </div>
                <div className="about-contact">
                    <button><a href='/#contact'> Contact Me!</a></button>
                </div>
            </div>
        </div>
    )
}
