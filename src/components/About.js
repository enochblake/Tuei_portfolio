import React from "react";

export default function About(){
    return(
        <div className="mx-80 text-purple-950 py-8 px-4">
            <div className="flex">
            <img src="https://static.vecteezy.com/system/resources/previews/006/800/646/non_2x/information-science-illustration-exclusive-design-inspiration-vector.jpg" alt="vector" className="opacity-70" style={{height: "20rem"}}></img>
            <div className="bg-white/20 px-20" style={{width: "50rem"}}>
            <h1 className="text-3xl font-extrabold text-center py-2">About Me!</h1>
            <p className="text-2xl text-justify py-5">Hey there! I'm Efjeniah a tech enthusiast with a passion for creativity and problem-solving. Whether crafting elegant front-end designs or diving into backend architecture, I thrive on bringing ideas to life in the digital realm.
             Join me as we conquer the binary jungle together, one line of code at a time!</p>
             </div>
             </div>
            
        </div>
    )
}



