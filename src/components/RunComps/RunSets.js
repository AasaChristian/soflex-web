import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {fetchExercise, createExercise} from '../../action/exerciseActions'
import { connect } from 'react-redux';
import {ExboxCont} from '../StyledComponent'


function RunSets(props) {
  const {runSets, match, regimen, reps, weight} = props

//   console.log(runSets, "runSets")

  let setsArr = []

  for (let i = 0; i <= runSets; i++){
      setsArr.push(i)
  }
//   console.log(setsArr, "setsArr")

const RunDetailCont = styled.div`
display: flex;
justify-content: space-evenly;
border: solid green 5px;
height: 400px;
width: 205px;;
`;

const SetSection = styled.section`
display: flex;
flex-direction: column;
`;

const RunText = styled.p`
font-size: 40px;
`;
   return(
 <div style={{display: "flex", flexDirection: "row",  width: "initial", overflowX: "scroll"}}>
{setsArr.map((sets) => {
    return(
        <section>
                 <section style={{display: "flex", justifyContent: "space-evenly"}}>
                <p>SET #</p>
                <p>{sets + 1}</p>
                </section>
            <RunDetailCont>
                <SetSection>
                <p>Rep</p>
    <RunText>{reps}</RunText>
                </SetSection>

                <SetSection>
                <p>Weight</p>
    <RunText>{weight}</RunText>
                </SetSection>
            </RunDetailCont>
        </section>
    )
})}
 </div>

   )
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen
	};
};

export default connect(mapStateToProps, {})(RunSets);
