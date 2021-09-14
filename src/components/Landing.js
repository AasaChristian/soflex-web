import React from 'react'
import {NavLink} from "react-router-dom"
import Logo from "../img/logo.jpg"
import HeadShake from 'react-reveal/HeadShake';
import Wobble from 'react-reveal/Wobble';
import Bounce from 'react-reveal/Bounce';
import {LandingCont} from './StyledComponent'

function Landing() {

  return (
   <LandingCont >
        <Bounce cascade> <div style={{display: "flex", justifyContent: "center"}}>
                    <h1 className="city"> CITY SO FLEX</h1>

       </div>
       </Bounce>
       <div display={{height: "50%"}}>
       <NavLink to={"/board"} style={{display: "flex", justifyContent: "center"}}> 
       <div style={{display: "flex", justifyContent: "center"}}>
           <Bounce top>           <img src={Logo} alt="picture of weight room"  style={{width: '90%', height: '90%', objectFit: "cover", borderRadius: '5%', boxShadow: "13px 13px 30px #292833, -13px -13px 30px #7d7b8a "}}/>
</Bounce >
       </div>
       

       </NavLink>
          
       </div>
       <div style={{display: "flex",  justifyContent: "center"}}>
           <div style={{display: "flex", flexDirection: "column" , justifyContent: "center"}}>
           <h3 style={{display: "flex", justifyContent: "center"}}>Not a Member?</h3>
           <NavLink to={"/register"} style={{display: "flex", justifyContent: "center"}}>
               <h2>Register</h2>
           </NavLink>
           </div>

       </div>
   </LandingCont>
  );
}

export default Landing;
