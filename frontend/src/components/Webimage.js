import "../styles/Webimage.css";
import React from "react";
import pic from "../images/rawpixelid6549303.png";


export default function Webimage({source, alt}) {
  return (
    
    <>
      <img src = {pic} alt = "introvert" id ="Webimage-start-image"/>
      <label htmlFor= "Webimage-start-image"id ="Webimage-start-image-label">Image by rawpixel.com</label>
      </>
  
  );
}
