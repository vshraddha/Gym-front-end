import "./Reasons.css"

import React from 'react'

import image1 from "./../assets/image1.png";
import image2 from "./../assets/image2.png";
import image3 from "./../assets/image3.png";
import image4 from "./../assets/image4.png";
import nb from "./../assets/nb.png";
import adidas from "./../assets/adidas.png";
import nike from "./../assets/nike.png";
import tick from "./../assets/tick.png";


const Reasons = () => {
  return (
    <div className="reason" id="reason">
        <div className="left">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image3} alt="" />
            <img src={image4} alt="" />
           


        </div>

        <div className="right">
        <span>SOME REASONS</span>
        <div>
          <span className="stroke-text">WHY </span>
          <span>CHOOSE US</span>
        </div>

          <div className="reason-1">
            <div>
            <img src= {tick} alt=""/>
            <span>Over 140+ expert coaches</span>
            </div>

            <div>
            <img src= {tick} alt=""/>
            <span>Train Smarter and faster than before</span>
            </div>

            <div>
            <img src= {tick} alt=""/>
            <span>1 free program for new member</span>
            </div>

            <div>
            <img src= {tick} alt=""/>
            <span>Reliable Partners</span>
            </div>



            
            
            
            
          </div>

          <span style ={{
            color : "Var(--gray)",
            fontweight: "normal", 
          }}> Our Partners</span>

          <div className="partners">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />

          </div>
        </div>


        </div>
      
    
  )
}

export default Reasons
