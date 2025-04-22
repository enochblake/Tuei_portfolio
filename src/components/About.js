import React from "react";
import './about.css';
import { FaLightbulb, FaLaptopCode, FaGlobe, FaHeart } from "react-icons/fa";

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
                            I’m Efjeniah — a curious, hands-on creator who loves solving problems through code and meaningful design. I'm not just a developer; I'm a builder of solutions that make life smoother, smarter, and more human.
                        </p>
                        <p className="text-xl text-justify mt-4">
                            Sometimes I’m deep into React, Flask or Django, other times I’m brainstorming systems, or exploring new ideas in DevOps, AI, or cloud computing. I love work that sparks real change and gives me room to grow and explore.
                        </p>
                    </div>

                    <div className="about-section mt-6">
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <FaLaptopCode className="text-blue-400" /> What I Do
                        </h2>
                        <p className="text-xl text-justify mt-2">
                            I design and build full-stack web solutions — from custom dashboards to interactive forms and APIs. My projects often blend tech with impact: streamlining operations, managing real-time data, or connecting communities. But above all, I build with intention.
                        </p>
                    </div>

                    <div className="about-section mt-6">
                        <h2 className="text-2xl font-semibold flex items-center gap-2">
                            <FaGlobe className="text-green-400" /> What I'm Looking For
                        </h2>
                        <ul className="list-disc list-inside text-xl mt-2 space-y-2">
                            <li>Remote-friendly dev roles that challenge and grow me</li>
                            <li>Tech-for-good projects that need sharp minds and soft hearts</li>
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
