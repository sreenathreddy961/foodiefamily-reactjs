import React from "react";
import Abouttop from "../assets/Weeklyimage.jpg";
import "../styles/Aboutus.css"

export default function Aboutus() {
    return (
        <div className="aboutUs">
            <div className="aboutUsTop" style={{ backgroundImage: `url(${Abouttop})` }}></div>
            <div className="aboutUsBottom">
                <h1>What we are ?</h1>
                <div>
                    <p>
                        We are magicians out there, who can transform the body as expected. We are called out as Dieticians.
                        We started our Journey in 2021 with a view of transformation in a healthy way. The pandemic let us choose this path and and encouraged us to integrate our knowledge and experience in Food Science and Nutrition.
                        We are really happy to connect with souls and make their life a beautiful sought-after story
                    </p>
                    <p>
                        Foodie Family is created with the intention to help you make the right food choice every time. We cover all aspects of basic nutrition, nutrients, hygienic practices, exercises and some recipes.
                    </p>
                    <p>
                        We help you to live healthier, better, longer lives, and we're here to assist with the process. Healthy eating doesn't have to be daunting when you have the tools you need to make smarter food decisions.
                    </p>
                    <p>
                        Whether you're in a bustling city or a rural town, our advice meets you wherever you are. From eating healthier at chain restaurants to shopping the local grocery store with a keener eye, we can help you make better food choices every single day.
                    </p>
                    <p>
                        <h4><strong>HOW IT WORKS?</strong></h4>
                        <ol>
                            <li>Click on website link</li>
                            <li>Book your Appointments via whatsapp or website by clicking on Book Appoinment button</li>
                            <li>Phone call counselling with the dieticians (Consultation, Diet chart, Tracking)</li>
                            <li>Approval of personal diet chart</li>
                            <li>Daily Follow-ups & recorded by our team</li>
                        </ol>
                        <h4><strong>WHAT WE OFFER?</strong></h4>
                        <ol>
                            <li>Weight Management system</li>
                            <li>Lifestyle Diseases</li>
                            <li>Immunity related diseases</li>
                            <li>Diet and optimal checkups</li>
                            <li>Vitamin and mineral deficiency</li>
                            <li>Women related disorders/diseases</li>
                            <li>Hormone imbalance related disorders(Thyroid, PCOD/PCOS)</li>
                            <li>Other major and minor disease and lifestyle management</li>
                        </ol>
                    </p>
                </div>
            </div>
        </div>
    )
}