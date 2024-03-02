import React from "react";
import ContactForm from "./ContactForm";


export default function Contacts(){
    return(
        <div>
            <div className="text-purple-200">
                <h1 className="text-xl font-extrabold">Contact Me!</h1>
                <ul className="flex px-5 text-purple-950">
                    <li className="px-5">Email Address: </li>
                    <li className="px-5">LinkedIn profile: </li>
                    <li className="px-5">GitHubprofile: </li>
                </ul>
            </div>
            <div>
                <ContactForm/>
            </div>
        </div>
       
    )
}