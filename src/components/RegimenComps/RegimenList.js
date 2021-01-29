import React from 'react'
import { Exbox, BorderBottom, NavSection} from '../StyledComponent'
import {NavLink} from "react-router-dom"



function RegimenList({name, regimenID,  completed   }) {

    // const Exbox = styled.section`
    // background-color: white;
    // width: 90%;
    // border: solid black 4px ;
    // border-radius: 30%;
    // margin-left: 5%;
    // display: flex;
    // justify-content: center;

    // @media (max-width: 750px) {

    //   padding-bottom: 45px;
    //   margin-bottom: 30px;
    // }
    // `;


    // const Details = styled.h4 `
    
    // @media (max-width: 750px) {
    //   display: none;
    // }
    // `;

    // const NavSection = styled.section`
    // display: flex;
    // justify-content: space-between;
    // `;

    // console.log(regimenID, "key")
    // console.log(name, "name")

  return (
    <Exbox key ={regimenID}>
      <div>
      <NavLink  to = {`/board/${name}`}>
        <div style={{width: "9pc", display: "flex", justifyContent: "center"}}>
        <BorderBottom>{name}</BorderBottom>
        </div>
      </NavLink>

        <NavSection style={completed === true? {display: 'none'}: {display: 'flex'}}>
          <NavLink   to = {`/run/${name}`}> Start</NavLink>
          <NavLink  to = {`/board/${name}`}>Edit</NavLink>
        </NavSection>

        </div>
    </Exbox>
  );
}

export default RegimenList;
