import React from 'react'
import "./Hero.css"
import Header from './Header'
import hero_image from "../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import heart from "../assets/heart.png"
import calories from "../assets/calories.png"

import NumberCounter from "number-counter"

import {motion} from "framer-motion"


const Hero = () => {

  const transition = {type:"spring", duration:3}
  const mobile = window.innerWidth<=768 ? true : false;

  return (
    <div className='hero' id="home"> 
      <div className="blur hero-blur"></div>
        <div className='left-h'>
          <Header/>
        {/* The best */}
          <div className='the-best'>
            <motion.div 
            initial={{left:mobile ? "178px" : "238px"}}
            whileInView={{left:"8px"}}
            transition={{...transition,type:"tween"}}
            ></motion.div>
            <span>The best fitness club in the town</span>
          </div>
          

          {/* Hero Heading */}

          <div className='hero-text'>
            <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
            <span> In here we will help you to shape and build your ideal body and live up your life to fullest </span>
            

            </div>

            
            
          </div>

          <div className='figures'>
              <div>
                <span>
                  <NumberCounter end={140} start={100} delay='4' preFix='+'/>
                </span>
                <span>Expert Coaches</span>
                </div>
                
                <div>
                <span>
                <NumberCounter end={978} start={800} delay='4' preFix='+'/>
                </span>
                <span>Members Joined</span>
                </div>

                
                <div>
                <span>
                <NumberCounter end={50} start={0} delay='4' preFix='+'/>
                </span>
                <span>Fitness Programs</span>

                </div>
                </div>

                {/* buttons*/ }
                <div className='hero-buttons'>
                  <buttons className='btn'>Get Started</buttons>
                  <buttons className='btn'>Learn More</buttons>
                </div>

              
            
        
        </div>

        <div className='right-h'>
          <button className='btn'>Join Now</button>

          <motion.div 
          initial={{right:"-1rem"}}
          whileInView={{right:"4rem"}}
          transition={transition} 
          className='heart'>
            <img src={heart} alt="" />
            
              <span>Heart rate</span>
              <span>116 bpm</span>
            
          </motion.div>
          
          {/* Hero images */}
          

        <img src={hero_image} alt="" className='hero-image'/>
        <motion.img 

        initial={{right:"11rem"}}
        whileInView={{right:"20rem"}}
        transition={transition}
        
        
        src={hero_image_back} alt="" className='hero-image-back'/>

        

        <motion.div 
        initial={{right:"37rem"}}
        whileInView={{right: "28rem"}}
        transition={transition}
        
        
        className='cal'>
          <img src= {calories} alt=""/>
          <div>
          <span>Calories Burned</span>
          <span>220 kcal</span>

        </div>
          
      </motion.div>

        </div>
        </div>
        

    
    
  )
  }


export default Hero
