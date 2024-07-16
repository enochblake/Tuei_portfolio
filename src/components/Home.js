// import React from "react";
// import About from "./About.js";
// import "./Home.css"

// function Home(){
//     return(
//         <div>
//         <div className="background py-20">
//             <div className="container">
//                 <div className="content py-4 mx-96 bg-white/50 border rounded-lg text-purple-950">
//                     <h1 className="text-4xl">Welcome to the Digital Wonderland of Efjeniah!</h1>
//                     <h2 className="text-2xl"><i>"Fierce and fabulous in the world of ones and zeros!"</i></h2>
//                 </div>
//             </div>
//         </div>
//         <div>
//             <About />
//         </div>
//         </div>
//     )
// }

// export default Home;


import React from "react";
import About from "./About.js";
import "./Home.css"

function Home(){
    return(
        <div>
            <div className="background py-20">
                <div className="overlay">
                    <div className="container">
                        <div className="content">
                            <h1 className="text-4xl">Welcome to the Digital Wonderland of Efjeniah!</h1>
                            <h2 className="text-2xl"><i>"Fierce and fabulous in the world of ones and zeros!"</i></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <About />
            </div>
        </div>
    )
}

export default Home;
