import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"


function Head() {


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
        <NavLink to = {`/board`}>
          <div>
            <h2>
            Home
            </h2>
          </div>
            </NavLink>
        <h1>SoFlex</h1>
        <NavLink  to = {`/`} onClick={e => {
          localStorage.removeItem('id')
          localStorage.removeItem('username')
        }}>
          <div>
          <h2>
          Log Out

          </h2>
          </div>
          
          </NavLink>
    </HeadCont>
  );
}

export default Head;
