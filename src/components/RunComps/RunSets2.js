import React, { useEffect, useState } from 'react'
import {RunInputText, RunText, RunInputDiv, SetSection, RunInputeCont, RunDetailCont, blackOrWhite, CenterText} from '../StyledComponent'
import {createLog, fetchLogs} from '../../action/runActions'
import {updateRegimen} from '../../action/regimenActions'
import { connect } from 'react-redux';
import { FaPlus, FaMinus } from "react-icons/fa";




function RunSets2(props) {
  const {setRestate,reState, runSets,  reps, weight, name, createLog, fetchLogs, userIdState, regimenId, chosenLogs, Swipe, setZoomOut, setShownReg, addedRep} = props

  const [repInput, setRepInput] = useState(reps)

  const [weightInput, setWeightInput] = useState(weight)

  const [postInput, setPostInput] = useState('')

  const [shownRep, setShownRep] = useState(0)

  const [currentRep, setCurrentRep] = useState(1)



  const chosenLogsEx = chosenLogs.filter(
    filterFor => filterFor.regimenId === regimenId
)
// console.log(chosenLogsEx.length, "chosenLogsEx.length")
// console.log(chosenLogsEx, "chosenLogsEx")

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
    set: chosenLogsEx.length + 1,
    reps: repInput,
    weight: weightInput,
    post: postInput
  }
  setRestate(!reState)
  setZoomOut(true)
  createLog(newLogObj)

  setShownRep(shownRep + 1)
  setShownReg(null)
  console.log("ending")
  setRestate(!reState)
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

    <section style={{display:'flex', justifyContent: 'space-evenly', width: '100%', flexDirection: 'column'}}>
      <div style={{display:'flex', justifyContent: 'space-evenly', width: '100%'}}> 
        <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1>REPS</h1>
        <div onClick={repUp}><FaPlus/> </div>    <h1>{repInput}</h1>

        <div onClick={repDown}><FaMinus/></div>
    </div>

    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1 >WEIGHT</h1> 
    <div onClick={weightUp}><FaPlus/> </div>
    <h1>{weightInput}</h1>
        <div onClick={weightDown}><FaMinus/></div>
    </div>
    </div>
   
    <section style={{ display: 'flex', justifyContent: "center"}}>    
      <div onClick={sendNewLog} style={{backgroundColor: `${blackOrWhite[0]}`, height: '150%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '6%', width: '90%'}}>
      <p style={{color: `${blackOrWhite[1]}`, fontSize: '200%', marginBottom: '1%', marginTop: '1%'}}> Submit</p>
    </div>
    </section>


</section>

//  <div style={{display: "flex", flexDirection: "row", overflowX: "scroll"}}>
// {setsArr.map((sets, key) => {
    // return(

    //     <section key={key} style={shownRep === key? {display: "initial", width:"100%"}: {display: "none"}}>
    //              <section style={{display: "flex", justifyContent: "space-evenly"}}>
    //             <p>SET #</p>
    //             <RunText
    //             onClick={((e) => {
    //               e.preventDefault()
    //               if (shownRep + 1 === setsArr.length){
    //                 setShownRep(0)
    //               } else {
    //                 setShownRep(shownRep + 1)
    //               }
    //             })}
    //             >{sets + 1}</RunText>
    //             </section>
    //         <RunDetailCont>
    //             <SetSection>
    //             <p style={{marginBottom: "0%", fontSize: '20px', display: 'flex', justifyContent: 'center'}}>Reps</p>
    // <RunText>{reps}</RunText>

    //             </SetSection>

    //             <SetSection>
    //             <p style={{marginBottom: "0%", fontSize: '20px', display: 'flex', justifyContent: 'center'}}>Weight</p>
    // <RunText>{weight}</RunText>
    //             </SetSection>
    //         </RunDetailCont>
    //         <RunInputeCont>
    //         <RunInputDiv>
    //         <p style={{marginBottom: "0%", fontSize: '20px', display: 'flex', justifyContent: 'center'}}>Reps</p>
    //         <button  style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'flex', justifyContent: 'center', width: '100%', marginLeft: '0px' }} onClick={repUp}>+1</button>
    //   <RunInputText>{ chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? chosenLogsEx[shownRep].LoggedReps: repInput}</RunInputText>
    //   <button  style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'flex', justifyContent: 'center', width: '100%' }} onClick={repDown} >-1</button>
    //         </RunInputDiv>
    //         <RunInputDiv>
    //         <p style={{marginBottom: "0%", fontSize: '20px', display: 'flex', justifyContent: 'center'}}>Weight</p>
    //         <button style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'flex', justifyContent: 'center', width: '100%' }} onClick={weightUp}>+5</button>
    //         <RunInputText>{ chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? chosenLogsEx[shownRep].LoggedWeight: weightInput}</RunInputText>
    //         <button  style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'flex', justifyContent: 'center', width: '100%' }} onClick={weightDown}>-5</button>
    //         </RunInputDiv>
    //         </RunInputeCont>

    //         <form style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display:'none'}: {display: 'initial'}} >
    //           <input
    //           type="text"
    //           name="postInput"
    //           placeholder="Plan?"
    //           onChange={handleChange}
    //           />
    //         </form>
    //                     <button style={chosenLogsEx.length >= shownRep + 1 && chosenLogsEx[shownRep].name === name? {display: 'none'} :{width: "100%", height:"65px"}}
    //         onClick={sendNewLog}
    //         >Submit</button>
    //     </section>
    // )
// })}
//  </div>

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

export default connect(mapStateToProps, {createLog, updateRegimen, fetchLogs})(RunSets2);
