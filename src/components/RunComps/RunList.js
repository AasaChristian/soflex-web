import React from 'react'
import { RunListExbox, RunListBorderBottom} from '../StyledComponent'
import {NavLink} from "react-router-dom"



function RunList({name, key}) {

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

    // console.log(key, "key")
    // console.log(name, "name")

  return (
    <RunListExbox key ={key}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <NavLink  to = {`/run/${name}`}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <RunListBorderBottom>{name}</RunListBorderBottom>
        </div>
      </NavLink>



        </div>
    </RunListExbox>
  );
}

export default RunList;
