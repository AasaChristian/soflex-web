import React, {useState} from 'react'
import { connect } from 'react-redux';
import {blackOrWhite} from '../StyledComponent'

function ExerciseFilter(props) {
    const { ex1, logs } = props
//////////////////////////////////////////////////////////////////////////

const chosenLogs = logs.filter(
  filterFor => filterFor.name === ex1
)
// console.log(ex1, "ex1")
console.log(chosenLogs, "chosenLogs")

const [curEx, setCurEx] = useState(null)
const {} = chosenLogs
const display1 = {display: "flex", flexDirection: 'column'}

  return (

<section style={{height: '150px', overflow:'scroll', position: "sticky", bottom: "0"}}>

{chosenLogs.map((ex) => {
return(
  <div>

    <div style={{display: 'flex', justifyContent: 'space-evenly', width: "100%", backgroundColor:'#817b92', marginBottom: '3%'}}>
      
<div style={display1}>
    <h1 style={{color: `${blackOrWhite[1]}`, fontSize: "150%", marginTop: '1%', marginBottom: '1%'}}>SET</h1>
<h1 style={{color: `${blackOrWhite[1]}`, fontSize: "150%", marginTop: '1%', marginBottom: '1%'}}>{ex.LoggedSet}</h1>
</div>

<div style={display1}>
    <h1 style={{color: `${blackOrWhite[1]}`, fontSize: "150%", marginTop: '1%', marginBottom: '1%'}}>Reps</h1>
<h1 style={{color: `${blackOrWhite[1]}`, fontSize: "150%", marginTop: '1%', marginBottom: '1%'}}>{ex.LoggedReps}</h1>
</div>

<div style={display1}>
    <h1 style={{color: `${blackOrWhite[1]}`, fontSize: "150%", marginTop: '1%', marginBottom: '1%'}}>Weight</h1>
<h1 style={{color: `${blackOrWhite[1]}`, fontSize: "150%", marginTop: '1%', marginBottom: '1%'}}>{ex.LoggedWeight}</h1>
</div>

<div style={display1}>
    <h1 style={{color: `${blackOrWhite[1]}`, fontSize: "150%", marginTop: '1%', marginBottom: '1%'}}>Date</h1>
<h1 style={{color: `${blackOrWhite[1]}`, fontSize: "150%", marginTop: '1%', marginBottom: '1%'}}>{ex.dateAdded.substr(0,10)}</h1>
</div>

</div>
  </div>
)
})}
</section>
  )
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

export default connect(mapStateToProps, {})(ExerciseFilter);
