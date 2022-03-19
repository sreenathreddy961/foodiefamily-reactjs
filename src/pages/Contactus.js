import React, { useState } from "react";
import "../styles/Contactus.css";
import ContactusImage from "../assets/Contactusimage.jpg";
import {send} from "emailjs-com";

export default function Contactus () {
    const [name, set_name] = useState('');
    const [email, set_email] = useState('');
    const [mobileNumber, set_mobileNumber] = useState('');
    const [message, set_message] = useState('');

    const handleName = (e) => {
        set_name(e.target.value)
    }
    const handleEmail = (e) => {
        set_email(e.target.value)
    }
    const handleMobileNumber = (e) => {
        set_mobileNumber(e.target.value)
    }
    const handleMessage = (e) => {
        set_message(e.target.value)
    }
    const bookAppointment = (e) => {
        e.preventDefault();
        send(
            'service_qqz2rw2',
            'template_y6it97i',
            {name, email, mobileNumber, message},
            'PRNFQCZhRJi0sY-sB'
        ).then((response) => {
            console.log("Email sent succesfully", response.text)
        }).catch ((err) => {
            console.log("Failed to send email", err)
        })
        set_name('');
        set_email('');
        set_mobileNumber('');
        set_message('');
    }

    return (
        <div className="contactUs">
            <div className="leftSide" style={{ backgroundImage : `url(${ContactusImage})`}}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contactUsForm" method="POST" onSubmit={bookAppointment}>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" value={name} onChange = {handleName} placeholder="Enter your Name" required/>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" value={email} onChange = {handleEmail} placeholder="Enter your Email" />
                    <label htmlFor="mobileNumber">Mobile</label>
                    <input name="mobileNumber" type="text" value={mobileNumber} onChange = {handleMobileNumber} placeholder="Enter your Ph No." required/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" value={message} onChange = {handleMessage} placeholder="Enter your message" rows="7"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}