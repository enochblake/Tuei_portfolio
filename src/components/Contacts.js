// Contacts.js
import React from "react";
import './contacts.css';
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";

export default function Contacts() {
    return (
        <div className="contacts-container">
            <h1 className="text-3xl font-extrabold text-center mb-6" style={{color: '#4F2E57'}}>Contact Me!</h1>
            <div className="form-container">
                <h2 className="form-title">Let's Chat!</h2>
                <div className="contact-links">
                    <a href="mailto:memotuei@gmail.com" className="contact-icon" title="Email Diana">
                        <FaEnvelope />
                    </a>
                </div>
                <p className="text-center mt-2">
                  Or call: <strong>+254 720 554 637</strong>
                </p>
                <form className="contact-form" action="https://formsubmit.co/memotuei1@gmail.com" method="POST">
                    <div className="form-group">
                        <label className="form-label"><IoMdContact /> Name:</label>
                        <input type="text" name="name" placeholder="Enter your name" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label"><MdEmail /> Email:</label>
                        <input type="email" name="email" placeholder="Enter your email" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label"><AiFillMessage /> Subject:</label>
                        <input type="text" name="subject" placeholder="Enter the subject" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Enter your message" required className="form-textarea"></textarea>
                    </div>
                    <button className="form-submit" type="submit">
                        Submit <BsFillSendFill />
                    </button>
                </form>
            </div>
        </div>
    );
}
