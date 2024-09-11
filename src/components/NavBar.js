// import React from "react";
// import { NavLink } from "react-router-dom";
// import './navbar.css';

//  export default function NavBar(){
//     return(
//         <div className="nav">
//             <ul className="navlink">
//                 <li className='link'><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
//                 <li className='link'><NavLink to="/about" activeClassName="active">About</NavLink></li>
//                 <li className='link'><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
//                 <li className='link'><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
//                 <li className='link'><NavLink to="/contact" activeClassName="active">Contacts</NavLink></li>
//             </ul>
//         </div>
//     )
//  }

import React from "react";
import './navbar.css';

export default function NavBar() {
    return (
        <div className="nav">
            <ul className="navlink">
                <li className='link'>
                    <a href="#home">Home</a>
                </li>
                <li className='link'>
                    <a href="#about">About</a>
                </li>
                <li className='link'>
                    <a href="#resume">Resume</a>
                </li>
                <li className='link'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='link'>
                    <a href="#contact">Contacts</a>
                </li>
            </ul>
        </div>
    );
}
