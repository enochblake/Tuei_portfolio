import React from "react";
import ContactForm from "./ContactForm";


export default function Contacts(){
    return(
        <div>
            <div>
                <h1>Contact Me!</h1>
                <ul className="flex">
                    <li>Email Address: </li>
                    <li>LinkedIn profile: </li>
                    <li>GitHubprofile: </li>
                </ul>
            </div>
            <div>
                <ContactForm/>
            </div>
        </div>
       
    )
}