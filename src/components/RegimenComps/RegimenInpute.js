import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createRegimen, clearTempRegName } from '../../action/regimenActions';
import {blackOrWhite} from '../StyledComponent'
function RegInput(props){
const {setRegBoard, regBoard, selectedExercise, setSelectedExercise, userIdState, createRegimen,regTempName, exercises, compSet, setCompSet, compRep,  setCompRep, compWeight, setCompWeight, setConfEx, chosenExercise, clearTempRegName, regimenName, setHideRegimen, setHideExList} = props
const [newReg, setNewReg] = useState({})
const [nameOfUpdatedReg, setNameOfUpdatedReg] = useState()
const handleChange = e => {
    setNewReg({...newReg, [e.target.name]: e.target.value})
}

const sendNewReg = (e) => {
    e.preventDefault()
    let userIdInput = null
    const userIdLocalStorage = localStorage.getItem('key')

    if (userIdState === null){
    userIdInput = userIdLocalStorage

    } else {
        userIdInput = userIdState
    }

const createdLink = (regTempName + userIdInput).toLowerCase().replace(" ", "")
const newRegimenObj = {
    name: regTempName,
    link: createdLink,
    userId: userIdInput,
    exerciseId: selectedExercise,
    sets: newReg.sets,
    reps: newReg.reps,
    weight: newReg.weight,
    completion: false
}

createRegimen(newRegimenObj)

setNewReg({
    weight: "",
    reps: "",
    sets: ""
})
setConfEx(false)
setCompRep(false)
setCompSet(false)
setCompWeight(false)
setSelectedExercise(null)
clearTempRegName()
setRegBoard(!regBoard)
setHideRegimen(false)
setHideExList(false)
}

const confirmWeight = (e) => {
    e.preventDefault()
    setCompWeight(!compWeight) 
}

const UnWeight = (e) => {
    e.preventDefault()
    setConfEx(false)
    setNewReg({})
}

const confirmSets = (e) => {
    e.preventDefault()
    setCompSet(!compSet) 
}

const unSets = (e) => {
    e.preventDefault()
    setCompWeight(false)
}

const confirmReps = (e) => {
    e.preventDefault()
    setCompRep(!compRep) 
}

const unReps = (e) => {
    e.preventDefault()
    setCompSet(false)
}

const inputStyle = {display: "flex", height: "200px",  width:"95%", paddingLeft: "30%", marginLeft: "2%", borderRadius: "10%", fontSize:"50px"}
const displayNone = {display: 'none'}
const SpacedEven = {display: "flex", justifyContent: 'space-evenly'}
return(
<section>
    <div style={{display: 'flex', justifyContent: 'center'}} >
        <h4> {selectedExercise == null? '' : chosenExercise.name} </h4>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-evenly', borderBottom: "black solid 2px"}}>
        <div>    <p style={{color:`${blackOrWhite[1]}`}}>Weight</p>
<p style={{color:`${blackOrWhite[1]}`}}>{newReg.weight}</p></div>

<div><p style={{color:`${blackOrWhite[1]}`}}>Sets</p>
<p style={{color:`${blackOrWhite[1]}`}}>{newReg.sets}</p></div>

<div><p style={{color:`${blackOrWhite[1]}`}}>Reps</p>
<p style={{color:`${blackOrWhite[1]}`}}>{newReg.reps}</p></div>

<p></p>
    </div>
    <form onSubmit={sendNewReg}>
        <div  style={ compWeight === false? {display: 'initial'} : displayNone}>
        <p style={{color:`${blackOrWhite[1]}`}}>How Much weight?</p>
        <div style={SpacedEven}>

        <p onClick={UnWeight} style={{color:`${blackOrWhite[1]}`}} >
        BACK
        </p>
        <div onClick={confirmWeight}>
        <p style={{color:`${blackOrWhite[1]}`}} >NEXT</p>
        </div>

        </div>

        </div>

    <input type="number"  value={newReg.weight} style={ compWeight === false? inputStyle : displayNone} type="text" name="weight" placeholder="Weight"  onChange={handleChange}/>

    <div style={ compWeight === true && compSet === false? {display: 'initial'} : displayNone}>
        <p style={{color:`${blackOrWhite[1]}`}}>How Many Sets?</p>
        <div style={SpacedEven}>
        <p onClick={unSets} style={{color:`${blackOrWhite[1]}`}}> BACK</p>
        <p onClick={confirmSets} style={{color:`${blackOrWhite[1]}`}}>NEXT</p>
        </div>
        </div>

    <input type="number" value={newReg.sets} style={compWeight === true && compSet === false ? inputStyle: displayNone} type="text" name="sets" placeholder="Sets"  onChange={handleChange}/>

    <div  style={ compWeight === true && compSet === true && compRep === false? {display: 'initial'} : displayNone}>

    <p style={{color:`${blackOrWhite[1]}`}}>How Many Reps?</p>
    <div style={SpacedEven}>
        <p onClick={unReps} style={{color:`${blackOrWhite[1]}`}}>BACK</p>
        <p onClick={confirmReps} style={{color:`${blackOrWhite[1]}`}} >NEXT</p>
        </div>
        </div>

    <input  type="number"  value={newReg.reps} style={compWeight === true && compSet === true && compRep === false? inputStyle : displayNone} type="text" name="reps" placeholder="Reps"  onChange={handleChange}/>

    <button>Create</button>
    </form>
</section>

)
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        userIdState: state.userIdState,
        regTempName: state.regTempName,
        regimenName: state.regimenName,
	};
};
export default connect(mapStateToProps, {createRegimen, clearTempRegName})(RegInput);