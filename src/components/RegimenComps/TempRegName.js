import React, {  useState } from 'react'
import { connect } from 'react-redux';
import { createRegimen, createTempRegName } from '../../action/regimenActions';

function TempRegName(props){
const {createTempRegName, regTempName, setNewRegNameEditor, regimenName} = props

const [tempRegName, setTempRegName] = useState("")
const [nameOfUpdatedReg, setNameOfUpdatedReg] = useState("")
// console.log(tempRegName, "tempRegName")
// console.log(regTempName, 'regTempName Here')
// console.log(nameOfUpdatedReg, "nameOfUpdatedReg")


const handleChange = e => {
    e.preventDefault()
    setTempRegName(e.target.value)
}

const submitTempName = e => {
    e.preventDefault()
    createTempRegName(tempRegName)
    setTempRegName("")
    setNewRegNameEditor(false)
}

const handleButtonPressed = e => {
    e.preventDefault()
}
const useUpdatedNameAsTemp = e =>{
    e.preventDefault()
    setNameOfUpdatedReg()
}

return(
    <div >
               <div style={{display: "flex", justifyContent: "center"}}> <p>Add Ecercise to Existing Regimen</p> </div>
        {regimenName.map((regimenName) => {
            return(
                <div>
                    <button onClick={(e) => {
                    e.preventDefault()
                    setNewRegNameEditor(false)
                    createTempRegName(regimenName)   
                    }}>{regimenName}</button>
                </div>
                
            )
        })}
        <div style={{display: "flex", justifyContent: "center"}}><p>Create New Regimen</p></div>

    <form style={{display:"flex", flexDirection: "column", justifyContent: "center"}} onSubmit={submitTempName}>

    <input value={tempRegName}  style={{fontSize:"50px", display: "flex", height: "60px", paddingLeft: "30%",  borderRadius: "5%"}} type="text" name="tempRegName" placeholder="Name" onChange={handleChange}/>
    <button>Create</button>
    </form>
</div>

)
}

const mapStateToProps = state => {
	return {
        regTempName: state.regTempName,
        regimenName: state.regimenName,
	};
};
export default connect(mapStateToProps, {createRegimen, createTempRegName})(TempRegName);