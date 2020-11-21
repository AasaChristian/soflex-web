import React, { useEffect, useState } from 'react'
import {fetchExercise, createExercise} from '../action/exerciseActions'
import { connect } from 'react-redux';

import {MainWall, LeftWall, BoardCont, ExboxCont, BackButton} from './StyledComponent'
import RegimenBoard from './RegimenComps/RegimenBoard';
import ExerciseBoard from './ExerciseComps/ExerciseBoard';


function Board(props) {
    const {history, exercises, regimen} = props
//////////////////////////////////////////////////////////////////////////
const [regBoard, setRegBoard] = useState(false)
const [exBoard, setExBoard] = useState(false)

const [selectedExercise, setSelectedExercie] = useState()

const userId = localStorage.getItem('id')
const userName = localStorage.getItem('username')


// Left Wall Nav Bar
const SendBack = (e) => {
e.preventDefault()
    history.goBack()
}
const SwapReg = (e) => {
    e.preventDefault()
    setRegBoard(!regBoard)
    setExBoard(false)
}
const SwapEx = (e) => {
    e.preventDefault()
    setExBoard(!exBoard)
    setRegBoard(false)
}


  return (
    <BoardCont >

        <MainWall>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <h1>{userName}'s Main Wall</h1>
            </div>
            <ExboxCont>
{/* REGIMEN BOARD */}
<div style={regBoard === false? {display: "none"}: {height: '100%'}}>
<RegimenBoard/>
</div>

{/* EXERCISE BOARD */}
<div style={exBoard === false? {display: "none"}: {display: "initial", height: '100%'}}>
            <ExerciseBoard
            exBoard={exBoard}
            /> 
            </div>

            </ExboxCont>
        </MainWall>
        <LeftWall>
        <BackButton>WORK</BackButton>
            <BackButton 
            onClick={SwapReg}>Create Regimen</BackButton>
            <BackButton
            onClick={SwapEx}>Create Exercise</BackButton>
            <BackButton
            onClick={SendBack}
            >Back</BackButton>
        </LeftWall>

      
    </BoardCont>
  );
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen
	};
};

export default connect(mapStateToProps, {fetchExercise, createExercise})(Board);
