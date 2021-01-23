import React, {useState} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'

function ExerciseFilter(props) {
    const { ex1, logs } = props
//////////////////////////////////////////////////////////////////////////

const chosenLogs = logs.filter(
  filterFor => filterFor.name === ex1
)
console.log(ex1, "ex1")
console.log(chosenLogs, "chosenLogs")

const [curEx, setCurEx] = useState(null)
const {} = chosenLogs
const display1 = {display: "flex", flexDirection: 'column', justifyContent: 'center', height: '40px'}

  return (

<section display={{height: '500px', overflow:'scroll'}}>
{chosenLogs.map((ex) => {
return(
    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
<div style={display1}>
    <h1>SET</h1>
<h1>{ex.LoggedSet}</h1>
</div>

<div style={display1}>
    <h1>Reps</h1>
<h1>{ex.LoggedReps}</h1>
</div>

<div style={display1}>
    <h1>Weight</h1>
<h1>{ex.LoggedWeight}</h1>
</div>

<div style={display1}>
    <h1>Date</h1>
<h1>{ex.dateAdded}</h1>
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
