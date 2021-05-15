import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import {ExboxCont} from '../StyledComponent'
import RunSets from './RunSets';
import {RunHeader,RunCardCont, RunExerciseNameCont, RunExerciseName, SetsCont, blackOrWhite } from '../StyledComponent'
import Pulse from 'react-reveal/Pulse';
function Run2(props) {
const [showReg, setShowReg] = useState(null)
const [reState, setRestate] = useState(false)
  const { match, regimen, logs} = props
// console.log(match.params.regimenName, "match.params.regimenName")
// console.log(regimen, "regimen")
  const chosenRegimen = regimen.filter(
      filterFor => filterFor.regimenName === match.params.regimenName
  )

  const chosenLogs = logs.filter(
      filterFor => filterFor.regimenName === match.params.regimenName
  )
    // console.log(chosenRegimen, "chosenRegimen RUN")
    console.log(chosenLogs, 'chosenLogs')
const [index, setIndex] = useState(0)
const regimenName = chosenRegimen[0].regimenName
const regsExercises = []
let chosenLen = chosenRegimen.length

useEffect(() => {
    chosenRegimen.map((exs) => {
        regsExercises.push(exs.regimenID)
        // console.log(regsExercises, "regsExercises")
        setShowReg(regsExercises[index])
        return chosenLen = regsExercises.length
    })
},[reState])
// console.log(showReg, "showReg")

const Swipe = e => {
    e.preventDefault()
    if (index == chosenLen -1){
        // console.log(chosenLen, "chosenLen")
        setIndex(0)
        setRestate(!reState)
        // console.log(index, "index")
    } else {
        setIndex(index + 1)
        setRestate(!reState)
        // console.log(index, "index")
        // console.log(chosenLen, "chosenLen")
    }
}






   return(
       <div style={{ width: "100%", height: '20%'}}>
    <RunHeader onClick={Swipe}>
    <h1 style={{color: `${blackOrWhite[1]}`}}>
    {regimenName}
    </h1>
</RunHeader>
   <div style={{borderBottom: "solid 5px black", height: "600px", overflow: "scroll", backgroundColor: "white", display: 'flex',flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >
       {chosenRegimen.map((ex) => {
           console.log(ex,'ex')
           const chosenLogsEx = chosenLogs.filter(
            filterFor => filterFor.name === ex.name
        )
           console.log(chosenLogsEx[chosenLogsEx.length -1], "chosenLogsEx in MAP")
            let lastSet 
            let lastWeight 
            let lastReps 
           if(chosenLogsEx.length > 0){
            lastSet = chosenLogsEx[ chosenLogsEx.length -1].LoggedSet
            lastWeight = chosenLogsEx[ chosenLogsEx.length -1].LoggedWeight
            lastReps = chosenLogsEx[ chosenLogsEx.length -1].LoggedReps

           } else {
            lastSet = 0
            lastWeight = 0
            lastReps = 0
           }
       return ( 
       

        <section  draggable="true" style={{border: 'solid 5px black', borderRadius: '50%', height: '35%', width: '45%'}}>
            <Pulse> <div style={{ height: '100%', border: 'solid 5px red',borderRadius: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
           <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

               <h1 style={{display:'flex', justifyContent: 'center', margin: '0%', fontSize: '125%', marginBottom: '2%'}}>{ex.name.substr(0,12)}</h1>

               <div style={{display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
               <p style={{display:'flex', justifyContent: 'center', margin: '0%'}}>SET:{lastSet}/{ex.sets}</p>
               <p style={{display:'flex', justifyContent: 'center', margin: '0%'}}>PREV REPS: {lastReps}</p>
               <p style={{display:'flex', justifyContent: 'center', margin: '0%'}}>PREV WEIGHT: {lastWeight}</p>

               </div>

               </div>
           
           </div></Pulse>
          
        </section>
    //    <RunCardCont style={showReg === ex.regimenID? {display: "initial"}: {display: "none"}}>

    //     <section>
    //     <RunExerciseNameCont onClick={Swipe}>
    //         <RunExerciseName>
    //             {ex.name}
    //         </RunExerciseName>
    //     </RunExerciseNameCont>
        
    //     </section>
        
    //     <SetsCont >
    //         <div>
    //     <RunSets
    //     runSets={ex.sets}
    //     reps={ex.reps}
    //     weight={ex.regimenWeight}
    //     name={ex.name}
    //     regimenId={ex.regimenID}
    //     completion={ex.completion}
    //     chosenLogs={chosenLogs}
    //     showReg={showReg}
    // Swipe={Swipe}
    //     />
    //         </div>
    //     </SetsCont>
    //         </RunCardCont>
            
            )
   

   })}</div>
   </div>
   )
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen,
        logs: state.logs
	};
};

export default connect(mapStateToProps, {})(Run2);
