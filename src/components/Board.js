import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {MainWall, LeftWall, BoardCont, ExboxCont, BackButton} from './StyledComponent'
import RegimenBoard from './RegimenComps/RegimenBoard';
import ExerciseBoard from './ExerciseComps/ExerciseBoard';
import RunBoard from './RunComps/RunBoard';
import WallBoard from './WallComps/WallBoard';


function Board(props) {
    const {history} = props
//////////////////////////////////////////////////////////////////////////
const [runBoard, setRunBoard] = useState(false)
const [regBoard, setRegBoard] = useState(false)
const [exBoard, setExBoard] = useState(false)
const userName = localStorage.getItem('username')

const SendBack = (e) => {
e.preventDefault()
    history.goBack()
}
const SwapRun = (e) => {
    e.preventDefault()
    setRunBoard(!runBoard)
    setRegBoard(false)
    setExBoard(false)
}

const SwapReg = (e) => {
    e.preventDefault()
    setRegBoard(!regBoard)
    setExBoard(false)
    setRunBoard(false)
}
const SwapEx = (e) => {
    e.preventDefault()
    setExBoard(!exBoard)
    setRegBoard(false)
    setRunBoard(false)
}


  return (
    <BoardCont >

        <MainWall>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <h1>{userName}'s Main Wall</h1>
            </div>
            <ExboxCont>

<div style={runBoard === true || regBoard === true || exBoard === true ? {display: "none"}: {display: "initial"}}>
<WallBoard/>
</div>


{/* Run Board */}
<div style={runBoard === false? {display: "none"}: {height: '100%'}}>
<RunBoard
runBoard={runBoard}
/>
</div>

{/* REGIMEN BOARD */}
<div style={regBoard === false? {display: "none"}: {height: '100%'}}>
<RegimenBoard
regBoard={regBoard}
setRegBoard={setRegBoard}
/>
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
        <BackButton 
        onClick={SwapRun}>Work</BackButton>
            <BackButton 
            onClick={SwapReg}> Regimen</BackButton>
            <BackButton
            onClick={SwapEx}> Exercise</BackButton>
            <BackButton
            onClick={SendBack}
            >Back</BackButton>
        </LeftWall>

      
    </BoardCont>
  );
}

const mapStateToProps = state => {
	return {
	};
};

export default connect(mapStateToProps, {})(Board);
