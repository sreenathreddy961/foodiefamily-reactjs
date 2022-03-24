import React from "react";

export default function Menuitems ({name, image, price}) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage : `url(${image})`}}></div>
            <h4>{name}</h4>
            <p className="badge">₹{price}</p>
        </div>
    )
}