import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"


function Head() {
console.log(localStorage.getItem('id') , "localStorage.getItem('id') ")
  
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
        <NavLink to = {localStorage.getItem('id') === null ? "/" : "/board"}>
          <div>
            <h2>
            Home
            </h2>
          </div>
            </NavLink>
        <h1>SoFlex</h1>
        <NavLink  to = {localStorage.getItem('id') === null ? "/register" : "/board"} onClick={e => {
          localStorage.removeItem('id')
          localStorage.removeItem('username')
        }}>
          <div>
          <h2>
          {localStorage.getItem('id') === null ? "Register" : "Logout"}

          </h2>
          </div>
          
          </NavLink>
    </HeadCont>
  );
}

export default Head;
