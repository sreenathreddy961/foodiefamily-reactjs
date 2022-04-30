import React from "react";
import Abouttop from "../assets/Weeklyimage.jpg";
import "../styles/Aboutus.css"

export default function Aboutus () {
    return (
        <div className="aboutUs">
            <div className="aboutUsTop" style={{ backgroundImage : `url(${Abouttop})`}}></div>
            <div className="aboutUsBottom">
                <h1>What we are ?</h1>
                <div>
                    <p>
                        Foodie Family is created with the intention to help you make the right food choice every time. We cover all aspects of basic nutrition, nutrients, hygienic practices, exercises and some recipes.
                    </p>
                    <p>
                        We help you to live healthier, better, longer lives, and we're here to assist with the process. Healthy eating doesn't have to be daunting when you have the tools you need to make smarter food decisions.
                    </p>
                    <p>
                        Whether you're in a bustling city or a rural town, our advice meets you wherever you are. From eating healthier at chain restaurants to shopping the local grocery store with a keener eye, we can help you make better food choices every single day.
                    </p>
                </div>
            </div>
        </div>
    )
}