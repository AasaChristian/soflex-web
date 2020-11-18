import React, { useState } from 'react'
import styled from 'styled-components'



function ExList({exName, exid, setSelectedExercie, selectedExercise}){

const selectExercise = (e) => {
    e.preventDefault()
    setSelectedExercie(exid)
}

const uncelectExercise = (e) => {
    e.preventDefault()
    setSelectedExercie(0)
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
`;

const CenterText = styled.h2`
display: flex;
justify-content: center;
margin-top: 1px;
margin-bottom: 5px;
`;
return(
    <div onClick={selectExercise}  onDoubleClick={uncelectExercise}  value={exid} key={exid} >
    <Constainer style={selectedExercise === exid? {backgroundColor: "red"}: {backgroundColor: "inherit"}} >

    <CenterText>{exName}</CenterText>

    </Constainer>
    </div>

)
}
export default ExList;