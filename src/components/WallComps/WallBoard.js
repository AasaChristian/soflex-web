import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {fetchLogs, createLog} from '../../action/runActions'
import {updateRegimen} from '../../action/regimenActions'
import {blackOrWhite} from '../StyledComponent'
import ExerciesFilter from './ExerciesFilter';
import Flash from 'react-reveal/Flash';
import Jump from 'react-reveal/Jump';
function WallBoard(props) {
    const {logs, createLog, fetchLogs, userIdState, updateRegimen, loading} = props
//////////////////////////////////////////////////////////////////////////

const [openEx, setOpenEx] = useState(null)
const [logFilter, setLogFilter] = useState(2)
const loggedExName = []
const loggedRegName = []
const loggedDates = []

console.log(logs, "Logs 17")

{logs.map((submission, i) => {
    if (  loggedExName.includes(submission.name)){
    
    }else{
        loggedExName.push(submission.name)
    }
    
    if (  loggedRegName.includes(submission.regimenName)){
    
    }else{
            loggedRegName.push(submission.regimenName)
        }

    if (  loggedDates.includes(submission.dateAdded.substr(0,10))){
    
    }else{
        loggedDates.push(submission.dateAdded.substr(0,10))
        }   
        // console.log(submission.dateAdded.substr(0,10), "submission 38") 
    })
}

console.log(loggedDates, "loggedDates")



useEffect(() => {

    {logs.map((submission, i) => {
 
        if (submission.LoggedSet >= submission.sets && submission.completion === false){
            const updatedObj = {
                completion : true
            }
            updateRegimen(updatedObj, submission.regimenId)
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

const fliplog = (x,e) => {
    e.preventDefault()
    setLogFilter(x)
    console.log(logFilter, "logFilter")
}

  return (

    <section style={{display: "flex", flexDirection: "column", overflowX: 'hidden', height: '100%', maxHeight: "100%"}}>
        {/* <div style={{display: 'flex', justifyContent: 'center', borderBottom: "black solid 2px"}}><p>Main Wall</p></div> */}

        <div style={{display: 'flex', justifyContent: 'center'}}>   
                    {loading &&  <Flash delay={500} forever={true} >
                    <h1 style={{color: 'white', fontSize: '400%'}}>LOADING</h1>
                </Flash >}</div>

                <div style={{display: 'flex', justifyContent: 'space-Evenly'}} >
                <h1 key={1} style={{color: 'white'}} onClick={ e => {
    e.preventDefault()
    setLogFilter(1)
    console.log(logFilter, "logFilter")

}}>Exercise</h1>

<h1 key={2} style={{color: 'white'}} onClick={ e => {
    e.preventDefault()
    setLogFilter(2)
    console.log(logFilter, "logFilter")

}}>Date</h1>
            </div>
<div style={ logFilter === 1? {display: "initial"}: {display: 'none'}}>


{loggedExName.sort().map((ex1 => {
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
            <div style={openEx === ex1 ? {display: "initial"}: {display: 'none'}}>
            <ExerciesFilter

            ex1={ex1}
            logs={logs}
/>
            </div>
        </section>


    )
}))}
</div>


{loggedDates.sort().map((days => {

    const months = {
    "01" : "January",
     "02": "Febuary",
      "03": "March",
       "04": "Arpil", 
       "05": "May",
        "06": "June",
        "07": "July",
          "08": "August",
         "09":   "September",
         "10":   "October",
           "11":   "November",
           "12":   "December"
        }


    const monthString = months[days.slice(5,7)]
    const yearString = days.slice(0,4)
    const dayString = days.slice(8,10)
    // console.log(days.slice(0,4), "year")
    // console.log(days.slice(8,10), "Day")
    // console.log(monthString, "months")

    const showDate = monthString.substr(0,3) + dayString + yearString
    console.log(showDate ,"showDate")
    return(
        <div style={ logFilter === 2 ? {display: "flex", flexDirection: 'row', justifyContent: 'space-evenly'}: {display: 'none'}} >
        <Jump top >
            <p style={{color: `${blackOrWhite[1]}`, fontSize: "300%",letterSpacing: "1px", objectFit: "fill", zIndex: '2'}}>{monthString.substr(0,3)}</p>

            <p style={{color: `${blackOrWhite[1]}`, fontSize: "300%",letterSpacing: "1px", objectFit: "fill", zIndex: '2'}}>{dayString}</p>

            <p style={{color: `${blackOrWhite[1]}`, fontSize: "300%",letterSpacing: "1px", objectFit: "fill", zIndex: '2'}}>{yearString}</p>

</Jump>
   </div>
    )


}))}
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
