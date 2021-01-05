import React, { useEffect, useState } from 'react'
import RegimenList from './RegimenList';
import RegInput from './RegimenInpute'
import { connect } from 'react-redux';
import {fetchRegimen, clearTempRegName, createRegimen,updateRegimen, deleteRegimenEX} from '../../action/regimenActions'
import {Exbox, ExName, ExboxCont} from '../StyledComponent'
import TempRegName from './TempRegName';
import ExList from '../ExerciseComps/ExerciesList';
import styled from 'styled-components';

function RegimenBoard(props) {
    const {history, regimen, regTempName, clearTempRegName, createRegimen, updateRegimen,deleteRegimenEX, exercises, regBoard, setRegBoard, regimenName, userIdState} = props
//////////////////////////////////////////////////////////////////////////
const [newRegNameEditor, setNewRegNameEditor] = useState(false)
const [selectedExercise, setSelectedExercise] = useState(null)
const [confEx, setConfEx] = useState(false)
const [compSet, setCompSet] = useState(false)
const [compRep, setCompRep] = useState(false)
const [compWeight, setCompWeight] = useState(false)
console.log(userIdState, "userIdState")
console.log(regimenName, "regimenName")
console.log(newRegNameEditor, "newRegNameEditor")





useEffect(() => {
    const userIdLocalStorage = localStorage.getItem('key')

    if (userIdState === null){

        console.log(userIdLocalStorage, 'userIdLocalStorage')
        props.fetchRegimen(userIdLocalStorage)



    } else{
        console.log(userIdState[0], 'userIdState  Attempted Regimen get')
        props.fetchRegimen(userIdState)
    }

    

  },[exercises, createRegimen, updateRegimen, deleteRegimenEX, regBoard])

  useEffect(() => {
console.log("Regimen UseEffect")
  },[exercises])

const SwapEdit = (e) => {
    e.preventDefault()
    setNewRegNameEditor(!newRegNameEditor)
}

const ClearTempName = (e) => {
    e.preventDefault()
    clearTempRegName()
    setSelectedExercise(null)
}

const ChangeExercise = (e) => {
    e.preventDefault()
    setSelectedExercise(null)
    setCompSet(false)
    setCompRep(false)
    setCompWeight(false)
}

const chosenExercise = exercises.find(
    filterFor => filterFor.id === selectedExercise
)

const ComnfirmExercise = (e) => {
    e.preventDefault()
    setConfEx(!confEx)
}


  return (

    <div style={{width: "100%"}}>

            <div style={{display: "flex", justifyContent: "center", fontSize: "40px"}}>
                    <h>Regimen</h>
                </div>
                {/* ExstatBox is a list or regimen */}
               
            <ExboxCont> 
                <div style={newRegNameEditor === true ? {display: "none"}: {display: "initial"}} >
            {regimenName.map((e, i) => {
                return(
                    <RegimenList
                name = {e}
                regimenID = {i}
                />
                )
            })}</div>

                <Exbox style={regTempName.length === 0 ? {marginTop: "25px"} : {display: "none"} }>
                <div >
                    <ExName  onClick={SwapEdit}> Create Regimen + </ExName>
                </div>
   
            </Exbox>

            <div style={newRegNameEditor === false? {display: "none"}: {display: "initial"}}>
            <TempRegName
            setNewRegNameEditor={setNewRegNameEditor}
            />
            </div>

            <div style={{display: "flex", justifyContent: "center"}}>
                <section style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>

                <h4 style={{fontSize: "35px"}}>{regTempName}</h4>

                <button style={regTempName.length === 0 ?  {display: "none"} : {display: "initial"} } onClick={ClearTempName}>Cancel
                </button>
        <h4 style={regTempName.length === 0 ? {display: 'none'}: {fontSize: "20px", display: "flex", justifyContent: 'center'}}>{selectedExercise == null? "Select an Exercise": `${chosenExercise.name} selected`}</h4>

        <button onClick={ChangeExercise}

        style={selectedExercise !== null && regTempName.length !== 0? {display: "initial"}: {display: 'none'}}

        >Change Exercise</button>
                </section>

            </div>
            <button onClick={ComnfirmExercise}
            style={selectedExercise === null? {display: "none"} : {display: "initial"}}
            >CONFIRM</button>


<section style={ regTempName.length === 0 || selectedExercise !== null? {display: 'none'}: {overflow: "scroll", height: "40%", marginTop: "10%", borderBottom: "solid black 1px"}}>
{exercises.map((e) => {
    return(
        <ExList
        exid = {e.id}
        exName = {e.name}
        exDescription = {e.description}
        img = {e.img}
        setSelectedExercise={setSelectedExercise}
        selectedExercise={selectedExercise}
        setConfEx={setConfEx}
        />
    )
})}
    </section>


            <div style={regTempName.length === 0 || confEx === false ?  {display: "none"} : {display: "initial"} }>
                <RegInput 
                selectedExercise={selectedExercise}
                setSelectedExercise={setSelectedExercise}
                compSet={compSet}
                setCompSet={setCompSet}
                compRep={compRep}
                setCompRep={setCompRep}
                compWeight={compWeight}
                setCompWeight={setCompWeight}
                setConfEx={setConfEx}
                chosenExercise={chosenExercise}
                regBoard={regBoard}
                setRegBoard={setRegBoard}
                />
            </div>
            </ExboxCont>
    </div>
  );
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen,
        regTempName: state.regTempName,
        regimenName: state.regimenName,
        userIdState: state.userIdState
	};
};

export default connect(mapStateToProps, {fetchRegimen, clearTempRegName, createRegimen, updateRegimen, deleteRegimenEX})(RegimenBoard);
