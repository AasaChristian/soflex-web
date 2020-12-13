import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {createLog} from '../../action/runActions'
import { connect } from 'react-redux';
import {ExboxCont} from '../StyledComponent'
import { createStore } from 'redux';


function RunSets(props) {
  const {runSets, match, regimen, reps, weight, logs, createLog, userIdState, regimenId} = props

  const [repInput, setRepInput] = useState(reps)

  const [weightInput, setWeightInput] = useState(weight)

  const [postInput, setPostInput] = useState('')

  const [setInput, setSetInput] = useState(1)
  // console.log(runSets, "runSets")

  let setsArr = []

  for (let i = 0; i < runSets; i++){
      setsArr.push(i)
  }
  // console.log(setsArr, "setsArr")

  console.log(postInput, "postInput")

  

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
    set: setInput,
    reps: repInput,
    weight: weightInput,
    post: postInput
  }

  createLog(newLogObj)
  setSetInput(setInput + 1)

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
height: 220px;
width: 205px;;
`;

const RunInputeCont = styled.div`
display: flex;
justify-content: space-evenly;
border: solid red 5px;
height: 220px;
width: 205px;;
`;

const SetSection = styled.section`
display: flex;
flex-direction: column;
`;

const RunInputDiv = styled.div`
height: 100px;
`;

const RunText = styled.p`
font-size: 40px;
`;

const RunInputText = styled.p`
font-size: 50px;
margin: 5px;
`;
   return(
 <div style={{display: "flex", flexDirection: "row",  width: "initial", overflowX: "scroll"}}>
{setsArr.map((sets, key) => {
    return(
        <section>
                 <section style={{display: "flex", justifyContent: "space-evenly"}}>
                <p>SET #</p>
                <p>{sets + 1}</p>
    <p>{key}</p>
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
            <button onClick={repUp}>+1</button>
      <RunInputText>{repInput}</RunInputText>
      <button onClick={repDown} >-1</button>
            </RunInputDiv>
            <RunInputDiv>
            <p>Weight</p>
            <button onClick={weightUp}>+5</button>
            <RunInputText>{weightInput}</RunInputText>
            <button  onClick={weightDown}>-5</button>
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
                        <button
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

export default connect(mapStateToProps, {createLog})(RunSets);
