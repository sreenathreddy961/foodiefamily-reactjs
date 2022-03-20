import React from "react";
import '../styles/Home.css';
import '../styles/2.818011ed.chunk.css';
import Homebg from '../assets/Homebg.jpg';

export default function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${Homebg})` }}>
            <marquee style={{ direction:"right", height:"100", width:"100%", bgcolor:"white", color:"red" }}>
                We have an offer for the first 100 slots, Hurry up & book your appointment
            </marquee>
            <div className="app_container">
                <div class="container d-flex flex-wrap">
                    <div class="wrapper_card">
                        <div class="card text-center p-2" style={{ backgroundColor: "transparent", border: "none" }}>
                            <div class="card-header">
                                <h1 class="display-1">Good Food is the Soul for Healthy life</h1>
                            </div>
                            <div class="card-body pd-3">
                                <h2>Just because you are not sick doesn't mean you're healthy</h2>
                                <p>Book Appoinment, Insure Good Health -<cite>Foodie Family</cite></p>
                            </div>
                            <div>
                                <a href="/Contactus" class="btn btn-success btn-lg">Book Appoinment</a>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}