import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import {ExboxCont} from '../StyledComponent'
import RunSets from './RunSets';


function Run(props) {
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
    // console.log(chosenLogs, 'chosenLogs')
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

const RunHeader = styled.div`
display: flex;
justify-Content: center;
border: solid 5px black;
`;

const RunCardCont = styled.div`
display: flex;
flex-direction: column;
height: 500px;
`;

const RunExerciseNameCont = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
border: solid 5px red;
`;

const RenExerciseName = styled.h1`
font-size: 30px;
`;

const SetsCont = styled.section`
height: 100%;
width: 100%;
overflow-x: scroll;
`;
   return(
       <div style={{ width: "100%"}}>
    <RunHeader onClick={Swipe}>
    <h1>
    {regimenName}
    </h1>
</RunHeader>
   <div style={{borderBottom: "solid 5px green", height: "600px", overflow: "scroll", backgroundColor: "white"}} >
       {chosenRegimen.map((ex) => {
        //    console.log(ex,'ex')
           
           
       return( 
       
       <RunCardCont style={showReg === ex.regimenID? {display: "initial"}: {display: "none"}}>

        <section>
        <RunExerciseNameCont onClick={Swipe}>
            <RenExerciseName>
                {ex.name}
            </RenExerciseName>
        </RunExerciseNameCont>
        
        </section>
        
        <SetsCont >
            <div>
        <RunSets
        runSets={ex.sets}
        reps={ex.reps}
        weight={ex.regimenWeight}
        name={ex.name}
        regimenId={ex.regimenID}
        completion={ex.completion}
        chosenLogs={chosenLogs}
        showReg={showReg}
    Swipe={Swipe}
        />
            </div>
        </SetsCont>
            </RunCardCont>)
   

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

export default connect(mapStateToProps, {})(Run);
