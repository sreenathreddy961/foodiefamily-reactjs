import React from "react";
import '../styles/Home.css';
import '../styles/Bootstrap.css';
import Homebg from '../assets/Homebg.jpg';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${Homebg})` }}>
            <marquee style={{ direction:"right", height:"100", width:"100%", bgcolor:"white", color:"red" }}>
                We have an offer for the first 100 slots, Hurry up & book your appointment
            </marquee>
            <div className="app_container">
                <div className="container d-flex flex-wrap">
                    <div className="wrapper_card">
                        <div className="card text-center p-2" style={{ backgroundColor: "transparent", border: "none" }}>
                            <div className="card-header">
                                <h1 className="display-1">Good Food is the Soul for Healthy life</h1>
                            </div>
                            <div className="card-body pd-3">
                                <h2>Just because you are not sick doesn't mean you're healthy</h2>
                                <p style={{ textAlign:"center"}}>Book Appoinment, Insure Good Health -<cite>Foodie Family</cite></p>
                            </div>
                            <div>
                                <Link to="/Contactus" className="btn btn-success btn-lg">Book Appoinment</Link>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}