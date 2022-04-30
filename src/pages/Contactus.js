import React, { useState } from "react";
import "../styles/Contactus.css";
import ContactusImage from "../assets/Contactusimage.jpg";
import {send} from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contactus () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    // const [state, setState] = useState('');
    // const [preferedLanguage, setPreferedLanguage] = useState('');
    const [message, setMessage] = useState('');
    const [successMsg , setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
        setSuccessMsg(false);
        setErrorMsg(false);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSuccessMsg(false);
        setErrorMsg(false);
    }
    const handleMobileNumber = (e) => {
        setMobileNumber(e.target.value);
        setSuccessMsg(false);
        setErrorMsg(false);
    }
    // const handleState = (e) => {
    //     setState(e.target.value);
    //     setSuccessMsg(false);
    //     setErrorMsg(false);
    // }
    // const handlePreferedLanguage = (e) => {
    //     setPreferedLanguage(e.target.value);
    //     setSuccessMsg(false);
    //     setErrorMsg(false);
    // }
    const handleMessage = (e) => {
        setMessage(e.target.value);
        setSuccessMsg(false);
        setErrorMsg(false);
    }
    const contactUsForm = (e) => {
        e.preventDefault();
        send(
            'service_zjg29zh',
            'template_kh92slc',
            {name, email, mobileNumber, message},
            'kQU8XoKz1t8EpwFvC'
        ).then((response) => {
            toast.success("Succesfully sent an E-mail", {
                position: toast.POSITION.TOP_RIGHT
            });
            setSuccessMsg(true);
        }).catch ((err) => {
            toast.error("Something went wrong", {
                position: toast.POSITION.TOP_RIGHT
            });
            setErrorMsg(true);
            console.log("Failed to send email", err)
        })
        setName('');
        setEmail('');
        setMobileNumber('');
        // setState('');
        // setPreferedLanguage('');
        setMessage('');
    }

    return (
        <div className="contactUs">
            <div className="leftSide" style={{ backgroundImage : `url(${ContactusImage})`}}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                <form id="contactUsForm" method="POST" onSubmit={contactUsForm}>
                    <label htmlFor="name">Full Name</label>
                    <input name="name" type="text" value={name} onChange = {handleName} placeholder="Enter your Name" required/>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" value={email} onChange = {handleEmail} placeholder="Enter your Email" required/>
                    <label htmlFor="mobileNumber">Mobile</label>
                    <input name="mobileNumber" type="text" value={mobileNumber} onChange = {handleMobileNumber} placeholder="Enter your Ph No." required/>
                    {/* <label htmlFor="state">State</label>
                    <input name="state" type="text" value={state} onChange = {handleState} placeholder="Enter your residing State"/>
                    <label htmlFor="preferedLanguage">Prefered Language</label>
                    <input name="preferedLanguage" type="text" value={preferedLanguage} onChange = {handlePreferedLanguage} placeholder="Enter your prefered Language"/> */}
                    <label htmlFor="message">Message</label>
                    <textarea name="message" value={message} onChange = {handleMessage} placeholder="Enter your message" rows="7"></textarea>
                    <p id={successMsg ? "openSuccessMsg" : "closeSuccessMsg"} className="badge">Succesfully sent an E-mail</p>
                    <p id={errorMsg ? "openErrorMsg" : "closeErrorMsg"} className="badge">Please check your mail Id and try again</p>
                    <button type="submit">Submit</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}