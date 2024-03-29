import React, { useEffect, useState } from 'react'
import {Route, Redirect} from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux';
import {ExboxCont} from '../StyledComponent'
import RunSets from './RunSets';
import {RunHeader,RunCardCont, RunExerciseNameCont, RunExerciseName, SetsCont, blackOrWhite, RunBackButton, RunButnCont, RunExTitle,RunGoBack, RunButCont } from '../StyledComponent'
import Pulse from 'react-reveal/Pulse';
import Zoom from 'react-reveal/Zoom';
import Flash from 'react-reveal/Flash';
import RunSets2 from './RunSets2';
import {fetchRegimen} from '../../action/regimenActions'
import {fetchLogs} from '../../action/runActions'
import {NavLink} from "react-router-dom"
function Run2(props) {
const [showReg, setShowReg] = useState(null)
const [reState, setRestate] = useState(false)
const [shownReg, setShownReg] = useState(null)
const [zoomOut, setZoomOut] = useState(true)



  const { match, regimen, logs, userIdState, fetchRegimen, fetchLogs} = props

useEffect(() => {
    const userIdLocalStorage = localStorage.getItem('key')

    if (userIdState<0){

        fetchLogs(userIdLocalStorage)



    } else{
        fetchLogs(userIdState)
    }

  },[zoomOut, shownReg])



  const chosenRegimen = regimen.filter(
    filterFor => filterFor.regimenName === match.params.regimenName
)

let chosenLogs = logs.filter(
    filterFor => filterFor.regimenName === match.params.regimenName
)





// const [index, setIndex] = useState(0)
// const regimenName = chosenRegimen[0].regimenName

// const regsExercises = []
// let chosenLen = chosenRegimen.length

// useEffect(() => {
//     chosenRegimen.map((exs) => {
//         regsExercises.push(exs.regimenID)
//         setShowReg(regsExercises[index])
//         return chosenLen = regsExercises.length
//     })
// },[])



// if (logs.length<1){
//     return <Redirect to="/board" />
// }

   return(
       <div style={{ width: "100%", height: '100%', position: 'fixed', top: '0'}}>

<div>{reState}</div>
<div>{!reState}</div>


   <RunButnCont  style={{borderBottom: "solid 5px black", height: "100%",  overflow: "scroll", backgroundColor: "#5f5c67", display: 'flex',flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly'}} >

   <RunBackButton style={{display: 'flex', width: "100%", flexDirection: 'row', justifyContent: 'center'}}>
      <NavLink to = {"/board"}
><h1 >BACK</h1></NavLink>
</RunBackButton>
       {chosenRegimen.map((ex, i) => {


           const chosenLogsEx = chosenLogs.filter(
            filterFor => filterFor.name === ex.name
        )

            let lastSet 
            let lastWeight 
            let lastReps 


           if(chosenLogsEx.length > 0){
            lastSet = chosenLogsEx[chosenLogsEx.length -1].LoggedSet
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

        }
            const setShowntoNull = (e) => {
                e.preventDefault()
                setShownReg(null) 
                setZoomOut(false)

            }
       return ( 

    <section  draggable="true" style={  {border: 'solid 5px black', borderRadius: '50%', height: '35%', width: '45%', backgroundColor: 'white'} }>

            <Pulse> <div onClick={selectEx} key = {i} style={ shownReg === null? { height: '100%', border: 'solid 5px #cbc5da',borderRadius: '50%', display: 'flex', justifyContent: 'center', flexDirection: 'row', boxShadow: "13px 13px 30px #292833, -13px -13px 30px #7d7b8a "}: {display:'none'}}>
           <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

               <h1 style={{display:'flex', justifyContent: 'center', margin: '0%', fontSize: '125%', marginBottom: '2%'}}>{ex.name.substr(0,12)}</h1>

               <div style={{display:'flex', justifyContent: 'center', flexDirection: 'column'}}>
               <p style={{display:'flex', justifyContent: 'center', margin: '0%'}}>SET:{lastSet }/{ex.sets}</p>
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
            <div style={{display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', width: '100%', alignItems: 'center'}}>
                <RunExTitle >{ex.name}</RunExTitle>


                {/* <section style={{display:'flex', justifyContent: 'space-evenly', width: '100%'}}>
                    <div> <h1>Sets</h1> <h1>{ex.sets}</h1> </div>

                    <div> <h1>Reps</h1> <h1>{ex.reps}</h1></div>

                    <div> <h1>Weight</h1> <h1>{ex.regimenWeight}</h1></div>

                    </section>  */}

    <RunSets2
    chosenLogs={chosenLogs}
    reps={ex.reps}
    sets={ex.sets}
    weight={ex.regimenWeight}
    name={ex.name}
    regimenId={ex.regimenID}
    loggedsets = {ex.loggedsets}
    setZoomOut = {setZoomOut}
    setShownReg={setShownReg}
    setRestate={setRestate}
    reState={reState}
    />

                </div>  
            </div>
            <section style={{display: 'flex', justifyContent: 'center'}}>           
                <RunButCont style={{marginTop: '1%',border: 'none', width: '50%', borderRadius: '15%', backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} onClick={setShowntoNull}>
                   <RunGoBack >Go-Back</RunGoBack> 
                    </RunButCont>
            </section>
           </div>
            </div>
            </Zoom>
        </section>
            )
   

   })}</RunButnCont>
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
        logs: state.logs,
        userIdState: state.userIdState
	};
};

export default connect(mapStateToProps, {fetchRegimen, fetchLogs})(Run2);
