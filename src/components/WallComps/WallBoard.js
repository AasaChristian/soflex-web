import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {fetchLogs, createLog} from '../../action/runActions'
import {Exbox, ExName, ExboxCont} from '../StyledComponent'
import ExList from '../ExerciseComps/ExerciesList';
import WallPost from './WallPost';


function WallBoard(props) {
    const {history, regimen, regTempName,logs, createLog,  clearTempRegName, fetchLogs, exercises, regBoard, regimenName, userIdState} = props
//////////////////////////////////////////////////////////////////////////


console.log(logs, "logs")

useEffect(() => {
    const userIdLocalStorage = localStorage.getItem('key')

    if (userIdState === null){

        console.log(userIdLocalStorage, 'userIdLocalStorage')
        fetchLogs(userIdLocalStorage)

        console.log(logs, "logs")

    } else{
        console.log(userIdState[0], 'userIdState  Attempted Regimen get')
    fetchLogs(userIdState)
    }
    console.log(logs, "logs")

  },[createLog])



  return (

    <section style={{display: "flex", flexDirection: "column", justifyContent:"center"}}>
<p>Main Wall</p>

{logs.map((submission) => {
    return(
    <WallPost
    submission={submission}
        /> )
      
    
})}
    </section>
  );
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen,
        regTempName: state.regTempName,
        regimenName: state.regimenName,
        userIdState: state.userIdState,
        logs: state.logs
	};
};

export default connect(mapStateToProps, {fetchLogs})(WallBoard);
