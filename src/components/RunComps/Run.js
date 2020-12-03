import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {fetchExercise, createExercise} from '../../action/exerciseActions'
import { connect } from 'react-redux';
import {ExboxCont} from '../StyledComponent'
import RunSets from './RunSets';


function Run(props) {
const [showReg, setShowReg] = useState(null)
  const {history, match, regimen} = props

  const chosenRegimen = regimen.filter(
      filterFor => filterFor.regimenName === match.params.regimenName
  )
    console.log(chosenRegimen, "chosenRegimen RUN")

const regimenName = chosenRegimen[0].regimenName
const regsExercises = []
useEffect(() => {
    chosenRegimen.map((exs) => {
        regsExercises.push(exs.regimenID)
        console.log(regsExercises, "regsExercises")
        setShowReg(regsExercises[0])
    })
},[])
console.log(showReg, "showReg")


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
    <RunHeader>
    <h1>
    {regimenName}
    </h1>
</RunHeader>
   <div style={{borderBottom: "solid 5px green", height: "600px", overflow: "scroll", backgroundColor: "red"}} >
       {chosenRegimen.map((ex) => {
           console.log(ex,'ex')
           
           
       return( 
       
       <RunCardCont style={showReg == ex.regimenID? {display: "initial"}: {display: "none"}}>

        <section>
        <RunExerciseNameCont>
            <RenExerciseName>
                {ex.name}
            </RenExerciseName>
        </RunExerciseNameCont>
        
        </section>
        
        <SetsCont >
            <div>
        <RunSets
        runSets={ex.sets}
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
        regimen: state.regimen
	};
};

export default connect(mapStateToProps, {})(Run);
