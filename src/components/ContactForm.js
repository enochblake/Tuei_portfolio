import React from "react";

export default function ContactForm(){
    return(
        <div className="py-10 text-center">
            <h1 className="text-xl font-extrabold">Let's Chat!</h1>
            <form>
                <label>Name: </label>
                    <input type="text" name="name" placeholder="Enter name" required/><br/>
                <label>Email: </label>
                    <input type="email" name="email" placeholder="Enter email" required/><br/>
                <label>Subject: </label>
                    <input type="text" name="subject" placeholder="Enter Subject" required/><br/>
                <label>Message: </label>
                    <textarea type="text" name="message" placeholder="Enter Message" required></textarea><br/>

                <button className="px-20 py-4" type="submit">Submit</button>
            </form>
        </div>
    )
}