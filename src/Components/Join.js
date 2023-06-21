import React , {useRef} from 'react'
import "./Join.css"
import emailjs from '@emailjs/browser'

const Join = () => {
    const form = useRef()
  return (
    <div className='join'>
        <div className='left-j'>
            <hr/>
            <div>
            <span className='stroke-text'>Ready to</span>
            <span>Level up</span>

            </div>
            <div>
            <span>Your body</span>
            <span className='stroke-text'>With us</span>

            </div>
            
            
        </div>
        <div className='right-j'>
            <form ref={form} className='email-container'>
                <input type="email" name="user_email" placeholder='Enter your mail'/>
                <button className='btn'>Join Now</button>
            </form>
        </div>
      
    </div>
  )
}

export default Join
