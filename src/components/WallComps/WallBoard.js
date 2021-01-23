import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {fetchLogs, createLog} from '../../action/runActions'
import {Exbox, ExName, ExboxCont} from '../StyledComponent'
import ExList from '../ExerciseComps/ExerciesList';
import WallPost from './WallPost';
import logo from '../../img/logo.jpg'
import ExerciesFilter from './ExerciesFilter';

function WallBoard(props) {
    const {logs, createLog, fetchLogs, userIdState} = props
//////////////////////////////////////////////////////////////////////////

const [filterParams, setFilterParams] = useState(null)
const loggedExName = []
const loggedRegName = []

{logs.map((submission, i) => {
    if (  loggedExName.includes(submission.name)){
    
    }else{
        loggedExName.push(submission.name)
    }
    
    if (  loggedRegName.includes(submission.regimenName)){
    
        }else{
            loggedRegName.push(submission.regimenName)
        }        
    })}

console.log(logs.filter(entry => entry.completion), "logs")


useEffect(() => {
    const userIdLocalStorage = localStorage.getItem('key')

    if (userIdState === null){

        // console.log(userIdLocalStorage, 'userIdLocalStorage')
        fetchLogs(userIdLocalStorage)

        // console.log(logs, "logs")

    } else{
        // console.log(userIdState[0], 'userIdState  Attempted Regimen get')
    fetchLogs(userIdState)
    }
    // console.log(logs, "logs")

  },[createLog])



  return (

    <section style={{display: "flex", flexDirection: "column", overflow: 'scroll', height: '100%', maxHeight: "90%"}}>
<p>Main Wall</p>

<div display={{height: '100%'}}>
{loggedExName.map((ex1 => {
    return(
        <section>
<div style={{display: 'flex', justifyContent: "center"}}>
<p>{ex1}</p>
</div>
            <div>
            <ExerciesFilter

            ex1={ex1}
            logs={logs}
/>
            </div>
        </section>


    )
}))}
</div>
<div>
{loggedRegName.map((regimen => {
    return(
        <div>
            <h1>{regimen}</h1>
        </div>
    )
}))}
</div>


{/* {logs.map((submission, i) => {
    return(
    <WallPost
    submission={submission}
    subIndex={i}
    loggedRegName={loggedRegName}
    loggedExName={loggedExName}
        /> )
      
    
})} */}
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

export default connect(mapStateToProps, {fetchLogs, createLog})(WallBoard);
