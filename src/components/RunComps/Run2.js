import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import {ExboxCont} from '../StyledComponent'
import RunSets from './RunSets';
import {RunHeader,RunCardCont, RunExerciseNameCont, RunExerciseName, SetsCont, blackOrWhite } from '../StyledComponent'
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';
function Run2(props) {
const [showReg, setShowReg] = useState(null)
const [reState, setRestate] = useState(false)
const [shownReg, setShownReg] = useState(null)
const [zoomOut, setZoomOut] = useState(true)
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

// const Swipe = e => {
//     e.preventDefault()
//     if (index == chosenLen -1){
//         // console.log(chosenLen, "chosenLen")
//         setIndex(0)
//         setRestate(!reState)
//         // console.log(index, "index")
//     } else {
//         setIndex(index + 1)
//         setRestate(!reState)
//         // console.log(index, "index")
//         // console.log(chosenLen, "chosenLen")
//     }
// }







   return(
       <div style={{ width: "100%", height: '100%', position: 'fixed', top: '0'}}>

   <div  style={{borderBottom: "solid 5px black", height: "100%", paddingBottom:'10%', paddingTop: '30%', overflow: "scroll", backgroundColor: "#5f5c67", display: 'flex',flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >
       {chosenRegimen.map((ex, i) => {
           console.log(ex,'ex')
        //    console.log(i,'i')

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

           const selectEx = (e) => {
            e.preventDefault()
            setShownReg(i)
            setZoomOut(true)
            console.log(zoomOut, "zoomOut")

        }
            const setShowntoNull = (e) => {
                e.preventDefault()
                setShownReg(null) 
                setZoomOut(false)
                console.log(zoomOut, "zoomOut")

            }
       return ( 

    <section  draggable="true" style={  {border: 'solid 5px black', borderRadius: '50%', height: '35%', width: '45%', backgroundColor: 'white'} }>
            <Pulse> <div onClick={selectEx} key = {i} style={ shownReg === null? { height: '100%', border: 'solid 5px #cbc5da',borderRadius: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'row', boxShadow: "13px 13px 30px #292833, -13px -13px 30px #7d7b8a "}: {display:'none'}}>
           <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

               <h1 style={{display:'flex', justifyContent: 'center', margin: '0%', fontSize: '125%', marginBottom: '2%'}}>{ex.name.substr(0,12)}</h1>

               <div style={{display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
               <p style={{display:'flex', justifyContent: 'center', margin: '0%'}}>SET:{lastSet}/{ex.sets}</p>
               <p style={{display:'flex', justifyContent: 'center', margin: '0%'}}>PREV REPS: {lastReps}</p>
               <p style={{display:'flex', justifyContent: 'center', margin: '0%'}}>PREV WEIGHT: {lastWeight}</p>

               </div>

               </div>
           
           </div></Pulse>
<Zoom opposite when={zoomOut} duration={500}>           
    <div style={shownReg === i? {position:'absolute', top: '15%', left: '5%', border: 'solid 5px black', borderRadius: '35%', height: '75%', width: '90%', backgroundColor: 'black'}: {display:'none'}}>


           <div style={{display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center'}}>
            <h1 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>{ex.name.substr(0,12)}</h1>
            <div style={{display:'flex', backgroundColor: 'white', height: '70%', borderRadius: '20%', width: '98%', marginLeft: '1%'}}>
            <div style={{display: 'flex', height: '100%', flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                <h1 style={{fontSize: '120%', marginTop: '20%'}}>{ex.name}</h1>
                </div>    
            </div>
            <section style={{display: 'flex', justifyContent: 'center'}}>           
                <div style={{marginTop: '1%',border: 'none', width: '50%', height: '150%', borderRadius: '15%', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} onClick={setShowntoNull}>
                   <h1 style={{display: 'flex', justifyContent: 'center'}}>Go-Back</h1> 
                    </div>
            </section>
           </div>
            </div>
            </Zoom>

          
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
   <section style={{backgroundColor: '#5f5c67'}}>
       <p>test</p>
   </section>
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
