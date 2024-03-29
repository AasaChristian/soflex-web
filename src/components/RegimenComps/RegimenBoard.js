import React, { useEffect, useState } from 'react'
import RegimenList from './RegimenList';
import RegInput from './RegimenInpute'
import { connect } from 'react-redux';
import {fetchRegimen, clearTempRegName, createRegimen, updateRegimen, deleteRegimenEX, unComplete} from '../../action/regimenActions'
import {Exbox, ExName, ExboxCont, blackOrWhite} from '../StyledComponent'
import TempRegName from './TempRegName';
import ExList from '../ExerciseComps/ExerciesList';
import Pulse from 'react-reveal/Pulse';

function RegimenBoard(props) {
    const { regTempName, clearTempRegName, createRegimen,unComplete, updateRegimen,deleteRegimenEX, exercises, regBoard, setRegBoard, regimenName, userIdState, completedNames, loading, regimen} = props
//////////////////////////////////////////////////////////////////////////
const [newRegNameEditor, setNewRegNameEditor] = useState(false)
const [selectedExercise, setSelectedExercise] = useState(null)
const [confEx, setConfEx] = useState(false)
const [compSet, setCompSet] = useState(false)
const [compRep, setCompRep] = useState(false)
const [compWeight, setCompWeight] = useState(false)
const [hideRegimen, setHideRegimen] = useState(false)
const [hideExList, setHideExList] = useState(false)
const [hideCompleted, setHideCompleted] = useState(true)

console.log(regTempName, "regTempName after add button")



useEffect(() => {
    const userIdLocalStorage = localStorage.getItem('key')

    if (userIdState === null){

        props.fetchRegimen(userIdLocalStorage)



    } else{
        // console.log(userIdState[0], 'userIdState  Attempted Regimen get')
        props.fetchRegimen(userIdState)
    }

    

  },[exercises, createRegimen, updateRegimen, deleteRegimenEX, regBoard])

//   useEffect(() => {
//   },[exercises])

const SwapEdit = (e) => {
    e.preventDefault()
    setNewRegNameEditor(!newRegNameEditor)
    setHideRegimen(!hideRegimen)
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
    setHideExList(!hideExList)
}


const toggleCompletedReg = (e) => {
    e.preventDefault()
    setHideCompleted(!hideCompleted)
}

// useEffect(() => {

//     {logs.map((submission, i) => {
 
//         if (submission.LoggedSet >= submission.sets && submission.completion === false){
//             const updatedObj = {
//                 completion : true
//             }
//             updateRegimen(updatedObj, submission.regimenId)
//         }
//         })
    
    
//     }

// },[fetchLogs])

// const chosenRegimen = regimen.filter(
//     filterFor => filterFor.regimenName === match.params.regimenName
// )

const UnComplete = (link) => {
    // const regToBeUpdated = regimen.filter(
    //     filterfor => filterfor.link === link
    // )
                const updatedObj = {
                completion : false
            }
            unComplete(updatedObj, link)
}

  return (

    <div style={{width: "100%"}}>

            <div style={{display: "flex", justifyContent: "center", fontSize: "40px", flexWrap: 'wrap'}}>
                    <h style={{color: `${blackOrWhite[1]}`}}>Regimen</h>


                   {/* <button style={{width: "100%"}} onClick={toggleCompletedReg}>{ hideCompleted === true?   "Show Completed Regimen" : "Hide Completed Regimen"}</button> */}
               </div>
            <ExboxCont> 
            <div style={{display: 'flex', justifyContent: 'center'}}>   
                    {loading &&  <Pulse  delay={500}  forever={true} >
                    <h1 style={{color: 'white', fontSize: '400%'}}>LOADING</h1>
                </Pulse >}</div>
                <div style={hideRegimen === true ? {display: "none"}: {display: "initial"}} >
            {regimenName.map((e, i) => {
                return(
                    <RegimenList
                SwapEdit={SwapEdit}
                setHideExList={setHideExList}
                hideExList={hideExList}
                name = {e}
                regimenID = {i}
                completed = {false} 
                regimen={regimen}   
                />
                )
            })}</div>

<div style={hideRegimen === true || hideCompleted === true ? {display: "none"}: {display: "initial"}} >
            {completedNames.map((e, i) => {
                return(
                    <RegimenList
                name = {e[0]}
                link = {e[1]}
                regimenID = {i}
                completed = {true}  
                UnComplete={UnComplete}
                regimen={regimen}  
                />
                )
            })}</div>

                <Exbox style={regTempName.length === 0 ? {marginTop: "25px"} : {display: "none"} }>
                <div >
                    <ExName  onClick={SwapEdit}> {newRegNameEditor === false? 'Create/Update Regimen +' : 'Go Back'} </ExName>
                </div>
   
            </Exbox>

            <div style={newRegNameEditor === false? {display: "none"}: {display: "initial"}}>
            <TempRegName
            setNewRegNameEditor={setNewRegNameEditor}
            newRegNameEditor={newRegNameEditor}

            />
            </div>

            <div style={hideExList === true? {display: 'none'}: {display: "flex", justifyContent: "center"}}>
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
                setHideRegimen={setHideRegimen}
                setHideExList={setHideExList}
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
        completedNames: state.completedNames,
        userIdState: state.userIdState,
        loading: state.loading
	};
};

export default connect(mapStateToProps, {fetchRegimen,unComplete, clearTempRegName, createRegimen, updateRegimen, deleteRegimenEX})(RegimenBoard);
