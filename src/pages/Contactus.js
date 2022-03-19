import React from "react";
import "../styles/Contactus.css";
import ContactusImage from "../assets/Contactusimage.jpg"

export default function Contactus () {
    return (
        <div className="contactUs">
            <div className="leftSide" style={{ backgroundImage : `url(${ContactusImage})`}}>
                LeftSide
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contactUsForm" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" placeholder="Enter your Name" />
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" placeholder="Enter your Email" />
                    <label htmlFor="mobilenumber">Mobile</label>
                    <input name="mobilenumber" type="text" placeholder="Enter your Ph No." />
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder="Enter your message" rows="7"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}