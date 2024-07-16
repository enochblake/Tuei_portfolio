import React from "react";
import './about.css';

export default function About(){
    return(
        <div className="about-container">
            <h1 className="text-3xl font-extrabold text-center py-2">About Me!</h1>
            <div className="flex">
                <div className="about-text">
                    <img src="./assets/components/assets/working-removebg-preview.png" alt="vector"></img>
                </div>
                <div className="about">
                    <p className="text-2xl text-justify py-5">Hey there! I'm Efjeniah a tech enthusiast with a passion for creativity and problem-solving. Whether crafting elegant front-end designs or diving into backend architecture, I thrive on bringing ideas to life in the digital realm.
                    Join me as we conquer the binary jungle together, one line of code at a time!</p>
                </div>
            </div>
            
        </div>
    )
}



