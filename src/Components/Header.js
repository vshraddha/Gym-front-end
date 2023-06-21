import React, { useState } from 'react'
import "./Header.css"
import Logo from "../assets/logo.png"
import Bars from "../assets/bars.png"
import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)
  return (
    <div className='header'>
     <img src={Logo} alt="" className='logo' />

     {(menuOpened===false && mobile===true) ? 
     (
     <div style={{
      backgroundColor: "var(--appColor)",
      borderRadius: "5px",
      padding: "0.5rem",
     }}


     onClick={()=> setMenuOpened(true)}
     
     
     
     >
      <img src= {Bars} alt="" style={{width:"1.5rem", height:"1.5rem"}}/>
     </div>
     ) :
     <ul className='header-menu'>
     <li>
      <Link 
      onClick={()=>setMenuOpened(false)}
      activeClass ="active"
      to="header"
      spy={true}
      smooth={true}
      >Home
      </Link>
      </li>
      
      <li>
        <Link
         onClick={()=>setMenuOpened(false)}
         to="programs"
         spy={true}
         smooth={true}
         >Programs
         </Link>
         </li>


     <li >
     <Link 
     onClick={()=>setMenuOpened(false)}
     to="reason"
     spy={true}
     smooth={true}>Why use
     </Link></li>
     <li>
      <Link 
       onClick={()=>setMenuOpened(false)}
       to="plan"
       spy={true}
       smooth={true}>Plans
       </Link></li>
     <li>
      <Link onClick={()=>setMenuOpened(false)}
       to="Testimonial"
       spy={true}
       smooth={true}>Testimonals
       </Link></li>
     

   </ul>
}
</div>
     
    
    

    
  )
}

export default Header
