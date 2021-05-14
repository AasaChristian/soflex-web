import React from 'react'
import { CenterText, ExListConstainer, blackOrWhite} from '../StyledComponent'


function ExList(props){
const {exName, exid, setSelectedExercise, selectedExercise, setConfEx} = props

const selectExercise = (e) => {
    e.preventDefault()
    if (selectedExercise === null){
        setSelectedExercise(exid)
    } else{
        setSelectedExercise(null)
    } 
}

return(
    <div onClick={selectExercise} value={exid} key={exid} style={{height: "50px"}}>
    <ExListConstainer style={selectedExercise === exid? {backgroundColor: "red"}: {backgroundColor: "inherit"}} >

    <CenterText style={{color: `${blackOrWhite[1]}`}}>{exName.substr(0,14)}</CenterText>

    </ExListConstainer>
    </div>

)
}
export default ExList;