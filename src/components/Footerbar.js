import React from 'react';
import "../styles/Footerbar.css";
import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';

export default function Footerbar () {
    return (
        <div className = "footerBar">
            <div className = "socialMedia">
                <a href="https://www.instagram.com/foodiefamily99?r=nametag" target="_blank" rel="noreferrer noopener"><Instagram /></a>
                <a href="https://www.facebook.com/FoodieFamily99/" target="_blank" rel="noreferrer noopener"><Facebook /></a>
                {/* <a href=''><WhatsApp /></a> */}
                <a href="https://twitter.com/foodiefamily99?s=09" target="_blank" rel="noreferrer noopener"><Twitter /></a>
                {/* <a href=''><LinkedIn /></a> */}
                <p>&copy; 2022 FoodieFamily Consultancy</p>
            </div>
        </div>
    )
}