import React from "react";

export default function Projects(){
    return(
        <section>
        <div className="text-purple-100">
            <h1 className="text-xl font-extrabold">My Projects</h1>
            <div className="flex justify-center">
                <div className="px-5">
                    <h2 className="text-center">Thamini</h2>
                    <ul className="text-left">
                        <li>Description: </li>
                        <li>Technolgies: </li>
                        <li>Source Code: </li>
                    </ul>
                </div>
                <div className="px-5">
                    <h2 className="text-center">Monstro App</h2>
                    <ul className="text-left">
                        <li>Description: </li>
                        <li>Technolgies: </li>
                        <li>Source Code: </li>
                    </ul>
                </div>
                <div className="flex">
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/256/984/984145.png" alt="skills" style={{height: "8rem", width: "8rem"}}></img>
                </div>
                <div>
            <h2 className="text-xl font-bold">Skills</h2>
            <ul className="text-left">
                <li>Languages: HTML, CSS, JavaScript, Python</li>
                <li>Frameworks: React</li>
                <li>Databases: </li>
                <li>Tools: Git, VS Code</li>
            </ul>
            </div>
            </div>
            
            </div>
            
        </div>
        </section>
    )
}