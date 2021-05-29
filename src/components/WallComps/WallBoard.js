import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {fetchLogs, createLog} from '../../action/runActions'
import {updateRegimen} from '../../action/regimenActions'
import {Exbox, ExName, ExboxCont, blackOrWhite} from '../StyledComponent'
import ExList from '../ExerciseComps/ExerciesList';
import WallPost from './WallPost';
import logo from '../../img/logo.jpg'
import ExerciesFilter from './ExerciesFilter';
import Pulse from 'react-reveal/Pulse';
import Flash from 'react-reveal/Flash';
import Flip from 'react-reveal/Flip';
import Jump from 'react-reveal/Jump';
function WallBoard(props) {
    const {logs, createLog, fetchLogs, userIdState, updateRegimen, loading} = props
//////////////////////////////////////////////////////////////////////////

const [filterParams, setFilterParams] = useState(null)
const [openEx, setOpenEx] = useState(null)
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
        // console.log(submission, "submissions")    
    })
}

useEffect(() => {

    {logs.map((submission, i) => {
 
        if (submission.LoggedSet === submission.sets && submission.completion === false){
            const updatedObj = {
                completion : true
            }
            updateRegimen(updatedObj, submission.regimenId)
            // console.log(submission.regimenId, submission.name, submission.userId, "completed")
        }
        })
    
    
    }

},[fetchLogs])

// console.log(logs.filter(entry => entry.completion), "logs")




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

// const selectEx = (e) => {
//     e.preventDefault()
//     if (openEx === null){

//     }
// }

  return (

    <section style={{display: "flex", flexDirection: "column", overflow: 'scroll', height: '100%', maxHeight: "100%"}}>
        {/* <div style={{display: 'flex', justifyContent: 'center', borderBottom: "black solid 2px"}}><p>Main Wall</p></div> */}

        <div style={{display: 'flex', justifyContent: 'center'}}>   
                    {loading &&  <Flash forever={true} >
                    <h1 style={{color: 'white', fontSize: '400%'}}>LOADING</h1>
                </Flash >}</div>
<div display={{height: '100%'}}>
    
{loggedExName.map((ex1 => {
    // console.log(ex1.substr(0,16), "ex1")
    return(
        <section>
<div style={{display:'flex', justifyContent: 'center'}} onClick={(e) => {
    e.preventDefault()
    if (openEx === null){
        setOpenEx(ex1)
    } else {
        setOpenEx(null)
    }
}}>
    <div>    <Jump top ><p style={{color: `${blackOrWhite[1]}`, fontSize: "300%",letterSpacing: "1px", objectFit: "fill", zIndex: '2'}}>{ex1.substr(0,12)}</p>

</Jump>

<h1 style={ openEx === ex1? {color: `${blackOrWhite[1]}`, fontSize: "120%", objectFit: "fill", display: 'flex', justifyContent: 'center'}: {display: 'none'}} >{ex1}</h1></div>

</div>
            <div style={openEx === ex1? {display: "initial"}: {display: 'none'}}>
            <ExerciesFilter

            ex1={ex1}
            logs={logs}
/>
            </div>
        </section>


    )
}))}
</div>
{/* <div>
{loggedRegName.map((regimen => {
    return(
        <div>
            <h1>{regimen}</h1>
        </div>
    )
}))}
</div> */}


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
        logs: state.logs,
        loading: state.loading
	};
};

export default connect(mapStateToProps, {fetchLogs, createLog, updateRegimen})(WallBoard);
