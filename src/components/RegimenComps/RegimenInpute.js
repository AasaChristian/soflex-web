import React, { useState } from 'react'
import { connect } from 'react-redux';
import { createRegimen, clearTempRegName } from '../../action/regimenActions';

function RegInput(props){
const {setRegBoard, regBoard, selectedExercise, setSelectedExercise, userIdState, createRegimen,regTempName, exercises, compSet, setCompSet, compRep,  setCompRep, compWeight, setCompWeight, setConfEx, chosenExercise, clearTempRegName, regimenName, setHideRegimen, setHideExList} = props
const [newReg, setNewReg] = useState({})
const [nameOfUpdatedReg, setNameOfUpdatedReg] = useState()
// console.log(userIdState, 'userIdState')
const handleChange = e => {
    setNewReg({...newReg, [e.target.name]: e.target.value})
}

console.log(chosenExercise, 'chosenExercise')
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

console.log(newRegimenObj, "newRegimenObj")
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
    console.log('here')
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
        <div>    <p>Weight</p>
<p>{newReg.weight}</p></div>

<div><p>Sets</p>
<p>{newReg.sets}</p></div>

<div><p>Reps</p>
<p>{newReg.reps}</p></div>

<p></p>
    </div>
    <form onSubmit={sendNewReg}>
        <div  style={ compWeight === false? {display: 'initial'} : displayNone}>
        <p>How Much weight?</p>
        <div style={SpacedEven}>

        <p onClick={UnWeight} >
        BACK
        </p>
        <div onClick={confirmWeight}>
        <p  >NEXT</p>
        </div>

        </div>

        </div>

    <input type="number"  value={newReg.weight} style={ compWeight === false? inputStyle : displayNone} type="text" name="weight" placeholder="Weight"  onChange={handleChange}/>

    <div style={ compWeight === true && compSet === false? {display: 'initial'} : displayNone}>
        <p>How Many Sets?</p>
        <div style={SpacedEven}>
        <p onClick={unSets}> BACK</p>
        <p onClick={confirmSets} >NEXT</p>
        </div>
        </div>

    <input type="number" value={newReg.sets} style={compWeight === true && compSet === false ? inputStyle: displayNone} type="text" name="sets" placeholder="Sets"  onChange={handleChange}/>

    <div  style={ compWeight === true && compSet === true && compRep === false? {display: 'initial'} : displayNone}>

    <p>How Many Reps?</p>
    <div style={SpacedEven}>
        <p onClick={unReps}>BACK</p>
        <p onClick={confirmReps} >NEXT</p>
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