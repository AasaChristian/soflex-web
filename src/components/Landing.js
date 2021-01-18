import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import Logo from "../img/logo.jpg"


function Landing() {

  return (
   <section style={{display: "flex", flexDirection: "column", justifyContent: "space-evenly", height: "85%", overflow: 'scroll'}}>
       <div style={{display: "flex", justifyContent: "center"}}>
           <h1>CITY SO FLEX</h1>
       </div>
       
       <div display={{height: "50px"}}>
       <NavLink to={"/login"} style={{display: "flex", justifyContent: "center"}}> 
       <div style={{display: "flex", justifyContent: "center"}}>
           <img src={Logo} alt="picture of weight room"  style={{width: '90%', height: '100%', objectFit: "cover"}}/>
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
   </section>
  );
}

export default Landing;
