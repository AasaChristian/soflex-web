import React from 'react'
import styled from 'styled-components'



function ExBox({name, key, reps, sets, weight}) {

    const Exbox = styled.section`
    background-color: white;
    width: 90%;
    border: solid black 4px ;
    border-radius: 30%;
    margin-left: 5%;
    display: flex;
    justify-content: center;

    @media (max-width: 750px) {

      padding-bottom: 15px;
      margin-bottom: 10px;
    
    }
    `;

    const ExName = styled.h3 `
    border-bottom: solid black 5px;
    `;

    console.log(name, "exe")

  return (

    <Exbox key ={key}>
        <div >
        <ExName>{name}</ExName>

        <h4>Sets: {sets}</h4>
        <h4>Reps: {reps} </h4>
        <h4>Weight: {weight} </h4>
        </div>
    </Exbox>

  );
}

export default ExBox;
