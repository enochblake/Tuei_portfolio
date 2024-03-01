import React from "react";

export default function About(){
    return(
        <div className="text-left py-8">
            <div className="">
            <h1 className="text-xl font-extrabold">About Me!</h1>
            <p className="text-lg text-justify">Hey there! I'm Efjeniah a tech enthusiast with a passion for creativity and problem-solving. Whether crafting elegant front-end designs or diving into backend architecture, I thrive on bringing ideas to life in the digital realm.
             Join me as we conquer the binary jungle together, one line of code at a time!</p>
             </div>
            <div className="">
            <h2 className="text-xl font-bold">Skills</h2>
            <ul className="text-left">
                <li>Languages: HTML, CSS, JavaScript, Python</li>
                <li>Frameworks: React</li>
                <li>Databases: </li>
                <li>Tools: Git, VS Code</li>
            </ul>
            </div>
        </div>
    )
}



