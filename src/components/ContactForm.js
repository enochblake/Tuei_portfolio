import React from "react";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { BsFillSendFill } from "react-icons/bs";

export default function ContactForm(){
    return(
        <div className="border w-96 h-96 mx-auto rounded-lg bg-white/10 backdrop-blur-sm text-purple-950 py-10 my-10">
            <h1 className="text-xl font-extrabold">Let's Chat!</h1>
            <form>
                <label className="py-3">Name: </label>
                    <input type="text" name="name" placeholder="Enter name" required className="my-3 rounded w-60"/><br/>
                    <IoMdContact />
                <label>Email: </label>
                    <input type="email" name="email" placeholder="Enter email" required className="my-3 rounded"/><br/>
                    <MdEmail />
                <label>Subject: </label>
                <AiFillMessage />
                    <input type="text" name="subject" placeholder="Enter Subject" required className="my-3 rounded w-60"/><br/>
                <textarea type="text" name="message" placeholder="Enter Message" required className="my-3 rounded w-72"></textarea><br/>

                <button className="border rounded-lg bg-purple-950 text-purple-100 text-center px-5 py-2 my-10" type="submit">Submit</button>
                <BsFillSendFill />
            </form>
        </div>
    )
}