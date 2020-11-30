import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { createRegimen, createTempRegName } from '../../action/regimenActions';

function TempRegName(props){
const {createTempRegName, regTempName, setNewRegNameEditor} = props

const [tempRegName, setTempRegName] = useState("")
console.log(tempRegName, "tempRegName")
console.log(regTempName, 'regTempName Here')



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

return(
    <div >
    <form style={{display:"flex", flexDirection: "column", justifyContent: "center"}} onSubmit={submitTempName}>
    <input value={tempRegName}  style={{display: "flex", height: "60px", paddingLeft: "40%", marginLeft: "2%", borderRadius: "10%"}} type="text" name="tempRegName" placeholder="Name" onChange={handleChange}/>
    <button>Create</button>
    </form>
</div>

)
}

const mapStateToProps = state => {
	return {
        regTempName: state.regTempName
	};
};
export default connect(mapStateToProps, {createRegimen, createTempRegName})(TempRegName);