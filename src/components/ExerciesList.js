import React, { useState } from 'react'
import styled from 'styled-components'



function ExList({match, setState, state, exName, exid, exDescription, setSelectedExercie}){


const [newReg, setNewReg] = useState({
    name: "",
    description: ""
})

const handleChange = e => {
    setNewReg({...newReg, [e.target.name]: e.target.value})
}

const userId = localStorage.getItem('id')

const selectExercie = (e) => {
    e.preventDefault()
    setSelectedExercie(exid)
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
    <div onClick={selectExercie} value={exid}>
    <Constainer>

    <CenterText  >{exName}</CenterText>

    </Constainer>
    </div>

)
}
export default ExList;