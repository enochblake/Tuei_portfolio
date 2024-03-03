import React from "react";
import ContactForm from "./ContactForm";


export default function Contacts(){
    return(
        <div>
            <div className="text-purple-200 py-10">
                <h1 className="text-xl font-extrabold">Contact Me!</h1>
                <ul className="flex px-5 text-purple-950">
                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJTJFvVRWFDVLlBbGrhnntkKvVFlpRhpXxdvZpwQcbQnKpqGQpNjLwDvtTKfqhCnBDrcbmL"><li className="px-5">email</li></a>
                    <a href="#"><li className="px-5">LinkedIn profile </li></a>
                    <a href="https://github.com/E-Saru"><li className="px-5">GitHubprofile </li></a>
                </ul>
            </div>
            <div className="my-5">
                <ContactForm/>
            </div>
        </div>
       
    )
}