import React from 'react';
import "../styles/Footerbar.css";
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

export default function Footerbar() {
    return (
        <div className="footerBar row col-12">
            <div className="footerBarLeft col-12">

                <div className="socialMedia">
                    <h2>FOODIE FAMILY</h2>
                    <a href="https://www.instagram.com/foodiefamily99?r=nametag" target="_blank" rel="noreferrer noopener"><Instagram /></a>
                    <a href="https://www.facebook.com/FoodieFamily99/" target="_blank" rel="noreferrer noopener"><Facebook /></a>
                    {/* <a href=''><WhatsApp /></a> */}
                    <a href="https://twitter.com/foodiefamily99?s=09" target="_blank" rel="noreferrer noopener"><Twitter /></a>
                    {/* <a href=''><LinkedIn /></a> */}
                    <p>&copy; 2022 FoodieFamily Consultancy</p>
                </div>
            </div>
            {/* <div className="footerBarRight col-6">
                <div className="row col-12">
                    <span>Developper Info</span>
                </div><br/>
                <div className="row">
                    <div className="col-12">
                        <ul>
                            <li>LSKR Software Solutions</li>
                            <li>Phone No : +91 9441314306</li>
                            <li>Email : sreenathreddy961@gmail.com</li>
                        </ul> 
                        <span>LSKR Software Solutions</span><br/>
                        <span>Phone No : +91 9441314306</span><br/>
                        <span>Email : sreenathreddy961@gmail.com</span><br/>
                    </div>
                </div>
            </div> */}
        </div>
    )
}