import React, { useState } from 'react'
import styled from 'styled-components'



function ExList({exName, exid, setSelectedExercise, selectedExercise, setConfEx}){

const selectExercise = (e) => {
    e.preventDefault()
    if (selectedExercise === null){
        setSelectedExercise(exid)
    } else{
        setSelectedExercise(null)
    } 
}
const Constainer = styled.section`
border-left: solid black 2px;
border-right: solid black 2px;
border-bottom: solid black 1px;
border-top: solid black 1px;
background-color: white;
width: 90%;
max-width: 90%;
margin-left: 15px;
border-radius: 5%;
height: 3.5pc;
`;

const CenterText = styled.h2`
display: flex;
justify-content: center;
margin-top: 1px;
margin-bottom: 5px;
`;

return(
    <div onClick={selectExercise} value={exid} key={exid} >
    <Constainer style={selectedExercise === exid? {backgroundColor: "red"}: {backgroundColor: "inherit"}} >

    <CenterText>{exName}</CenterText>

    </Constainer>
    </div>

)
}
export default ExList;