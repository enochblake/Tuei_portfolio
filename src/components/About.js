// About.js
import React from "react";
import './about.css';
import { FaLaptopCode, FaGlobe, FaHeart } from "react-icons/fa";

export default function About() {
    return (
        <div className="about-container">
            <h1 className="text-3xl font-extrabold text-center mb-6 mt-0" style={{ color: '#ffff' }}>
                About Me!
            </h1>

            <div className="flex-about">
                <div className="about-text">
                    <img 
                        src="https://static.vecteezy.com/system/resources/previews/009/298/359/non_2x/3d-illustration-of-web-development-png.png" 
                        alt="vector"
                        className="about-img"
                    />
                </div>

                <div className="about">
                    <div className="about-section">
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <FaHeart className="text-pink-400" /> Who I Am
                        </h2>
                        <p className="text-xl text-justify mt-2">
                            I’m Diana—a hardworking, honest, and reliable team player with a high degree
                            of personal integrity. I’m self‑motivated and thrive under minimal supervision,
                            always open to cultural and religious diversity in the workplace.
                        </p>
                    </div>

                    <div className="about-section mt-6">
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <FaLaptopCode className="text-blue-400" /> What I Do
                        </h2>
                        <p className="text-xl text-justify mt-2">
                            I deliver first‑line support and user training, manage CCTV systems,
                            administer networks (LAN/WAN), maintain databases and servers, and
                            oversee ERP & Office 365 environments. I also build and update websites,
                            manage digital media content, and champion IT projects from planning
                            through implementation.
                        </p>
                    </div>

                    <div className="about-section mt-6">
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <FaGlobe className="text-green-400" /> What I’m Looking For
                        </h2>
                        <ul className="list-disc list-inside text-xl mt-2 space-y-2">
                            <li>A challenging IT role that leverages my hands‑on support and system administration skills</li>
                            <li>Opportunities for continuous professional growth and certifications</li>
                        </ul>
                    </div>

                    <div className="about-contact mt-6 text-center">
                        <button className="px-6 py-2 hover text-white rounded-full text-lg transition-all">
                            <a href='/#contact'>Let’s Connect</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
