import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {fetchExercise, createExercise} from '../../action/exerciseActions'
import { connect } from 'react-redux';
import {ExboxCont} from '../StyledComponent'
import RunSets from './RunSets';


function Run(props) {
  const {history, match, regimen} = props

  const chosenRegimen = regimen.filter(
      filterFor => filterFor.regimenName === match.params.regimenName
  )
    console.log(chosenRegimen, "chosenRegimen RUN")

const regimenName = chosenRegimen[0].regimenName

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
       <div>
    <RunHeader>
    <h1>
    {regimenName}
    </h1>
</RunHeader>
   <div style={{borderBottom: "solid 5px green", height: "600px", overflow: "scroll"}} >
       {chosenRegimen.map((ex) => {
       return( 
       
       <RunCardCont>

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
