import React, { useEffect } from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"



function Head() {

  let userID = localStorage.getItem('id')
  
    const HeadCont = styled.section`
    background-color: #F8F1FF;
    display: flex;
    justify-content: space-around;
    border-radius: 10%;
    border: solid #656176 5px;
    border-bottom: solid #656176 5px;
    `;

  return (
    <HeadCont>
        <NavLink to = {"/board"}>
          <div>
            <h2>
            Home
            </h2>
          </div>
            </NavLink>
        <h1>SoFlex</h1>

        <NavLink  to = {"/Login"} onClick={e => {
          localStorage.removeItem('key')
          localStorage.removeItem('username')
          localStorage.removeItem('token')
        }}>


          <div>
          <h2>

          {userID === null ? "Login" : "Logout"}

          </h2>
          </div>
          
          </NavLink>
    </HeadCont>
  );
}

export default Head;
