import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"



function ExBox({name, regimenID, reps, sets, regimenWeight}) {

    const Exbox = styled.section`
    background-color: white;
    width: 90%;
    border: solid black 4px ;
    border-radius: 30%;
    margin-left: 5%;
    display: flex;
    justify-content: center;

    @media (max-width: 750px) {

      padding-bottom: 45px;
      margin-bottom: 30px;
    
    }
    `;

    const ExName = styled.h3 `
    border-bottom: solid black 5px;
    `;

    const Details = styled.h4 `
    
    @media (max-width: 750px) {
      display: none;
    }
    `;

    console.log(regimenID, "key")
    console.log(name, "name")
    console.log(regimenWeight, "weight")

  return (

    <Exbox key ={regimenID}>
      <NavLink  to = {`/board/${name}`}>
        <div >
        <ExName>{name}</ExName>

        <Details>Sets: {sets}</Details>
        <Details>Reps: {reps} </Details>
        <Details>Weight: {regimenWeight} </Details>
        </div>
        </NavLink>
    </Exbox>

  );
}

export default ExBox;
