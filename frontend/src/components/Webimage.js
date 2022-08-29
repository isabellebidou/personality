import React from "react";
import pic from "../images/rawpixelid6549303.png";

export default function Webimage({source, alt}) {
  return (
    
    <>
      <img src = {pic} alt = "introvert" id ="startImage"/>
      <label htmlFor= "startImage">Image by rawpixel.com</label>
      </>
  
  );
}
