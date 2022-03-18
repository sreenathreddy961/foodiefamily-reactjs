import React from 'react';
import "../styles/Footerbar.css";
import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material';

export default function Footerbar () {
    return (
        <div className = "footerBar">
            <div className = "socialMedia">
                <Instagram />
                <Facebook />
                <WhatsApp />
                <Twitter />
                <LinkedIn />
                <p>&copy; 2022 FoodieFamily Consultancy</p>
            </div>
        </div>
    )
}