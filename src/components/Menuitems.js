import React from "react";
import { Link } from 'react-router-dom';

export default function Menuitems({ name, image, price }) {
    return (
        <div className="menuItem">
            <Link to="/BookAppointment" style={ { color:"black" , textDecoration:"none" }}>
                <div style={{ backgroundImage: `url(${image})` }}></div>
                <h4>{name}</h4>
                <p className="badge">₹{price}</p>
            </Link>
        </div>
    )
}