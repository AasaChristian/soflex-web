import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
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

const RunDetailCont = styled.div`
display: flex;
justify-content: space-evenly;
border: solid green 5px;
height: 150px;
width: 100%;
`;

const RunInputeCont = styled.div`
display: flex;
justify-content: space-evenly;
border: solid red 5px;
height: 200px;
width: 100%;
`;

const SetSection = styled.section`
display: flex;
flex-direction: column;
`;

const RunInputDiv = styled.div`
height: 100px;
`;

const RunText = styled.p`
font-size: 50px;
margin: 0 0 0 0;
`;

const RunInputText = styled.p`
font-size: 50px;
margin: 5px;
`;
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
                <p>Reps</p>
    <RunText>{reps}</RunText>

                </SetSection>

                <SetSection>
                <p>Weight</p>
    <RunText>{weight}</RunText>
                </SetSection>
            </RunDetailCont>
            <RunInputeCont>
            <RunInputDiv>
            <p>Reps</p>
            <button  style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'initial'}} onClick={repUp}>+1</button>
      <RunInputText>{ chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? chosenLogsEx[shownRep].LoggedReps: repInput}</RunInputText>
      <button  style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'initial'}} onClick={repDown} >-1</button>
            </RunInputDiv>
            <RunInputDiv>
            <p>Weight</p>
            <button style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'initial'}} onClick={weightUp}>+5</button>
            <RunInputText>{ chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? chosenLogsEx[shownRep].LoggedWeight: weightInput}</RunInputText>
            <button  style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'initial'}} onClick={weightDown}>-5</button>
            </RunInputDiv>
            </RunInputeCont>

            <form>
              <input
              type="text"
              name="postInput"
              placeholder="Plan?"
              onChange={handleChange}
              />
            </form>
                        <button style={{width: "100%", height:"45px"}}
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
