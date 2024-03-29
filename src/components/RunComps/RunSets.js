import React, { useEffect, useState } from 'react'
import {RunInputText, RunText, RunInputDiv, SetSection, RunInputeCont, RunDetailCont} from '../StyledComponent'
import {createLog, fetchLogs} from '../../action/runActions'
import {updateRegimen} from '../../action/regimenActions'
import { connect } from 'react-redux';




function RunSets(props) {
  const {runSets,  reps, weight, name, createLog, fetchLogs, userIdState, regimenId, chosenLogs, Swipe} = props

  const [repInput, setRepInput] = useState(reps)

  const [weightInput, setWeightInput] = useState(weight)

  const [postInput, setPostInput] = useState('')

  const [shownRep, setShownRep] = useState(0)



  const chosenLogsEx = chosenLogs.filter(
    filterFor => filterFor.name === name
)

  let setsArr = []

  for (let i = 0; i < runSets; i++){
      setsArr.push(i)
  }

const handleChange = e => {
  setPostInput(e.target.value)
}

const sendNewLog = (e) => {
  e.preventDefault()
  let userIdInput = null
  const userIdLocalStorage = localStorage.getItem('key')

  if (userIdState === null){
  userIdInput = userIdLocalStorage

  } else {
      userIdInput = userIdState
  }

  const newLogObj ={
    type: "regimenlog",
    userId: userIdInput,
    regimenId: regimenId,
    set: shownRep + 1,
    reps: repInput,
    weight: weightInput,
    post: postInput
  }

  createLog(newLogObj)

  setShownRep(shownRep + 1)




}


const repUp = e => {
  e.preventDefault()
  setRepInput(repInput + 1)
}
const repDown = e => {
  e.preventDefault()
  setRepInput(repInput - 1)
}

const weightUp = e => {
  e.preventDefault()
  setWeightInput(weightInput + 5)
}

const weightDown = e => {
  e.preventDefault()
  setWeightInput(weightInput - 5)
}
   return(
 <div style={{display: "flex", flexDirection: "row", overflowX: "scroll"}}>
{setsArr.map((sets, key) => {
    return(
        <section key={key} style={shownRep === key? {display: "initial", width:"100%"}: {display: "none"}}>
                 <section style={{display: "flex", justifyContent: "space-evenly"}}>
                <p>SET #</p>
                <RunText
                onClick={((e) => {
                  e.preventDefault()
                  if (shownRep + 1 === setsArr.length){
                    setShownRep(0)
                  } else {
                    setShownRep(shownRep + 1)
                  }
                })}
                >{sets + 1}</RunText>
                </section>
            <RunDetailCont>
                <SetSection>
                <p style={{marginBottom: "0%", fontSize: '20px', display: 'flex', justifyContent: 'center'}}>Reps</p>
    <RunText>{reps}</RunText>

                </SetSection>

                <SetSection>
                <p style={{marginBottom: "0%", fontSize: '20px', display: 'flex', justifyContent: 'center'}}>Weight</p>
    <RunText>{weight}</RunText>
                </SetSection>
            </RunDetailCont>
            <RunInputeCont>
            <RunInputDiv>
            <p style={{marginBottom: "0%", fontSize: '20px', display: 'flex', justifyContent: 'center'}}>Reps</p>
            <button  style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'flex', justifyContent: 'center', width: '100%', marginLeft: '0px' }} onClick={repUp}>+1</button>
      <RunInputText>{ chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? chosenLogsEx[shownRep].LoggedReps: repInput}</RunInputText>
      <button  style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'flex', justifyContent: 'center', width: '100%' }} onClick={repDown} >-1</button>
            </RunInputDiv>
            <RunInputDiv>
            <p style={{marginBottom: "0%", fontSize: '20px', display: 'flex', justifyContent: 'center'}}>Weight</p>
            <button style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'flex', justifyContent: 'center', width: '100%' }} onClick={weightUp}>+5</button>
            <RunInputText>{ chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? chosenLogsEx[shownRep].LoggedWeight: weightInput}</RunInputText>
            <button  style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'flex', justifyContent: 'center', width: '100%' }} onClick={weightDown}>-5</button>
            </RunInputDiv>
            </RunInputeCont>

            <form style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'initial'}} >
              <input
              type="text"
              name="postInput"
              placeholder="Plan?"
              onChange={handleChange}
              />
            </form>
                        <button style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display: 'none'} :{width: "100%", height:"65px"}}
            onClick={sendNewLog}
            >Submit</button>
        </section>
    )
})}
 </div>

   )
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen,
        logs: state.logs,
        userIdState: state.userIdState
	};
};

export default connect(mapStateToProps, {createLog, updateRegimen, fetchLogs})(RunSets);
