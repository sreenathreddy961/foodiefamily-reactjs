import React, { useState } from 'react';
import logo from '../assets/brandLogo_V1.1.jpg';
import "../styles/Headerbar.css";
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';

export default function Headerbar() {
  const [showLinks, setShowLinks] = useState(false);
  function Click (){
    setShowLinks(!showLinks);
  }
  return (
    <div className = "headerBar">
      <div className="leftSide" id={showLinks ? "open" : "close"}>
        <Link to="/" ><img src = {logo} alt = "FoodieFamily" /> </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/Aboutus">About</Link>
          <Link to="/Contactus">Contact</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/Aboutus">About</Link>
        <Link to="/Contactus">Contact</Link>
        <button onClick={Click}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  )
}