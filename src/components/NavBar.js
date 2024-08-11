import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

 export default function NavBar(){
    return(
        <div className="nav">
            <ul className="navlink">
                <li className='link'><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li className='link'><NavLink to="/about" activeClassName="active">About</NavLink></li>
                <li className='link'><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
                <li className='link'><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
                <li className='link'><NavLink to="/contact" activeClassName="active">Contacts</NavLink></li>
            </ul>
        {/* <div className="text-purple-950  bg-purple-200">
            <ul className="flex justify-end items-center h-8 px-4">
                <li className="px-4">Home</li>
                <li className="px-4">About</li>
                <li className="px-4">Projects</li>
                <li className="px-4">Contacts</li>
            </ul>
        </div> */}
        </div>
    )
 }