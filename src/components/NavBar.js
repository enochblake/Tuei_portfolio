import React from "react";
 export default function NavBar(){
    return(
        <div className="text-purple-950  bg-purple-200">
            <ul className="flex justify-end items-center h-8 px-4">
                <li className="px-4">Home</li>
                <li className="px-4">About</li>
                <li className="px-4">Projects</li>
                <li className="px-4">Contacts</li>
            </ul>
        </div>
    )
 }