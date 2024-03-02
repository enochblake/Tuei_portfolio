import React from "react";

export default function ContactForm(){
    return(
        <div className="text-purple-950 py-10 text-center">
            <h1 className="text-xl font-extrabold">Let's Chat!</h1>
            <form>
                <label className="py-3">Name: </label>
                    <input type="text" name="name" placeholder="Enter name" required className="my-3"/><br/>
                <label>Email: </label>
                    <input type="email" name="email" placeholder="Enter email" required className="my-3"/><br/>
                <label>Subject: </label>
                    <input type="text" name="subject" placeholder="Enter Subject" required className="my-3"/><br/>
                    <textarea type="text" name="message" placeholder="Enter Message" required className="my-3"></textarea><br/>

                <button className="px-20 py-4" type="submit">Submit</button>
            </form>
        </div>
    )
}