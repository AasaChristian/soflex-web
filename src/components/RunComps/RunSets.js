import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {fetchExercise, createExercise} from '../../action/exerciseActions'
import { connect } from 'react-redux';
import {ExboxCont} from '../StyledComponent'


function RunSets(props) {
  const {runSets, match, regimen} = props

  console.log(runSets, "runSets")

  let setsArr = []

  for (let i = 0; i <= runSets; i++){
      setsArr.push(i)
  }
  console.log(setsArr, "setsArr")

const RunDetailCont = styled.div`
display: flex;
justify-content: space-evenly;
border: solid green 5px;
height: 400px;
width: 100%;
`;

const SetSection = styled.section`
display: flex;


`;

   return(
 <div style={{display: "flex", flexDirection: "row",  width: "initial", overflowX: "scroll"}}>
{setsArr.map((sets) => {
    return(
        <section>
            <RunDetailCont>
                <SetSection>
                <p>SET #</p>
                <p>{sets + 1}</p>
                </SetSection>

                <SetSection>
                <p>Rep Goal</p>
                <p>Reps</p>
                </SetSection>

                <SetSection>
                <p>weight Goal</p>
                <p>Weight</p>
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
