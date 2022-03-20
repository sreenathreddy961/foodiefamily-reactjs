import React, { useState } from "react";
import "../styles/Contactus.css";
import ContactusImage from "../assets/Contactusimage.jpg";
import {send} from "emailjs-com";
import { toast } from 'react-toastify';

export default function Contactus () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [message, setMessage] = useState('');
    const [successMsg , setSuccessMsg] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSuccessMsg(false);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSuccessMsg(false);
    }
    const handleMobileNumber = (e) => {
        setMobileNumber(e.target.value);
        setSuccessMsg(false);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
        setSuccessMsg(false);
    }
    const bookAppointment = (e) => {
        e.preventDefault();
        send(
            'service_zjg29zh',
            'template_lefyhjq',
            {name, email, mobileNumber, message},
            'kQU8XoKz1t8EpwFvC'
        ).then((response) => {
            toast.success("Appointment booked succesfully", {
                position: toast.POSITION.TOP_RIGHT
            });
            setSuccessMsg(true);
        }).catch ((err) => {
            toast.error("Appointment booking failed", {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log("Failed to send email", err)
        })
        setName('');
        setEmail('');
        setMobileNumber('');
        setMessage('');
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
                    <input name="email" type="text" value={email} onChange = {handleEmail} placeholder="Enter your Email" required/>
                    <label htmlFor="mobileNumber">Mobile</label>
                    <input name="mobileNumber" type="text" value={mobileNumber} onChange = {handleMobileNumber} placeholder="Enter your Ph No." required/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" value={message} onChange = {handleMessage} placeholder="Enter your message" rows="7"></textarea>
                    <p id={successMsg ? "openSuccessMsg" : "closeSuccessMsg"}>Succesfully booked appointment</p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}