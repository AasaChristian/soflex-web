import React from 'react'
import styled from 'styled-components'



function ExBox({name, key}) {

    const Exbox = styled.section`
    background-color: white;
    width: 90%;
    border: solid black 4px ;
    border-radius: 30%;
    margin-left: 5%;
    display: flex;
    justify-content: center;

    @media (max-width: 750px) {

      padding-bottom: 75px;
      margin-bottom: 10px;
    
    }
    `;

    console.log(name, "exe")

  return (

    <Exbox key ={key}>
        <div >
        <p>{name}</p>
        </div>
    </Exbox>

  );
}

export default ExBox;
