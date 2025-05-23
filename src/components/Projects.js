import React from "react";
import './projects.css';
import { FaReact, FaPython, FaCcStripe } from "react-icons/fa";
import { SiFlask, SiRedux, SiMongodb, SiHtml5, SiCss3, SiJavascript, SiPostgresql, SiCloudinary, SiJsonwebtokens, SiRender } from "react-icons/si";

export default function Projects() {
    return (
        <section className="projects-section">
            <h1 className="text-3xl font-extrabold text-center mb-8">My Projects</h1>
            <div className="projects-container">

                <div className="project-card">
                    <a href="https://online-charity-management.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <img className="project-image" src="./Logo.jpg" alt="Online Charity Management System" />
                        <h2 className="project-title">Online Charity Management System</h2>
                        <p className="project-description">
                            A comprehensive web application to facilitate online donations and fund management for non-profit organizations. Built with a modern tech stack including React, Redux, Python, and Flask, it enables secure and efficient transactions for donors, NGOs, and admins.
                        </p>
                        <div className="project-tech">
                            <FaReact /> <SiRedux /> <FaPython /> <SiFlask /> <SiPostgresql /> <SiCloudinary /> <FaCcStripe /> <SiJsonwebtokens /> <SiRender /> <SiJavascript /> <SiHtml5 /> <SiCss3 />
                        </div>
                    </a>
                </div>

                <div className="project-card">
                    <a href="https://gen-ztea-qi91.onrender.com/" target="_blank" rel="noopener noreferrer">
                        <img className="project-image" src="./joanna-kosinska-B43a-FPxYqU-unsplash.jpg" alt="Z-Tea Ecommerce System" />
                        <h2 className="project-title">Z-Tea Ecommerce System</h2>
                        <p className="project-description">
                            A robust e-commerce platform for specialty teas, leveraging technologies like React.js, Flask, and MongoDB. The platform ensures a seamless shopping experience and includes secure transaction processing and comprehensive admin tools.
                        </p>
                        <div className="project-tech">
                            <FaReact /> <SiFlask /> <SiMongodb /> <SiPostgresql /> <SiCloudinary /> <FaCcStripe /> <SiJsonwebtokens /> <SiRender /> <SiJavascript /> <SiHtml5 /> <SiCss3 />
                        </div>
                    </a>
                </div>

                <div className="project-card">
                    <a href="https://nutrifit-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <img
                            className="project-image"
                            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D"
                            alt="NutriFit Health Platform"
                        />
                        <h2 className="project-title">NutriFit Health Platform</h2>
                        <p className="project-description">
                            A modern, responsive platform focused on promoting healthy eating habits, fitness tracking, and personalized meal planning. Built with React.js and styled for mobile and desktop users.
                        </p>
                        <div className="project-tech">
                            <FaReact /> <SiJavascript /> <SiHtml5 /> <SiCss3 />
                        </div>
                    </a>
                </div>

            </div>
        </section>
    );
}
