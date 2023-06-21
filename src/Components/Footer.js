
import React from 'react'
import "./Footer.css"
import linkedin from "./../assets/linkedin.png"
import instagram from "./../assets/instagram.png"
import github from "./../assets/github.png"
import logo from "./../assets/logo.png"



const Footer = () => {
  return (
    <div className="footer">
        <hr/>
        <div className="social">
            <div className='link'>
            <img src={linkedin} alt=""/>
            <img src={instagram} alt=""/>
            <img src={github} alt=""/>

            </div>
            <div className='logo'>
                <img src={logo} alt=""/>
            </div>
           
            

        </div>

        <div className='blur blur-f-1'></div>
        <div className='blur blur-f-2'></div>
        
      
    </div>
  )
}

export default Footer
