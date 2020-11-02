import React from 'react'
import styled from 'styled-components'



function ExBox({name, key}) {

    const Exbox = styled.section`
    background-color: white;
    width: 90%;
    border: solid black 4px ;
    border-radius: 30%;
    margin-left: 5%;
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
