import React from 'react'
import {programsData} from './../data/programsData'
import RightArrow from './../assets/rightArrow.png'

import "./Program.css"

const Program = () => {
  return (
    <div className='prog' id="programs">
        <div className='prog-header'>
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>To Shape You</span>

        

        </div>
        <div className='prog-categories'>
          {programsData.map((program)=>(
            <div className='category'>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
              <div className='join-now'>
                <span>Join now</span>
                <img src={RightArrow} />
              </div>

            </div>
            


          )

          )}

                

           
        </div>
      
    </div>
  )
}

export default Program
