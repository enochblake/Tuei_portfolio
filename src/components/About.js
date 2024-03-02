import React from "react";

export default function About(){
    return(
        <div className="text-left text-purple-200 py-8 px-4">
            <div className="">
            <h1 className="text-xl font-extrabold">About Me!</h1>
            <p className="text-lg text-justify">Hey there! I'm Efjeniah a tech enthusiast with a passion for creativity and problem-solving. Whether crafting elegant front-end designs or diving into backend architecture, I thrive on bringing ideas to life in the digital realm.
             Join me as we conquer the binary jungle together, one line of code at a time!</p>
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
    )
}



