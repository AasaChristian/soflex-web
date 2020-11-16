import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { createRegimen } from '../action/regimenActions';

function RegInput(props){
const {selectedExercise, createRegimen,setRegEdit} = props
const [newReg, setNewReg] = useState({})

const handleChange = e => {
    setNewReg({...newReg, [e.target.name]: e.target.value})
}
console.log(newReg, "newReg")

const userId = localStorage.getItem('id')

const sendNewReg = (e) => {
e.preventDefault()
const createdLink = (newReg.name + userId).toLowerCase().replace(" ", "")
const newRegimenObj = {
    name: newReg.name,
    link: createdLink,
    userId: userId,
    exerciseId: selectedExercise,
    sets: newReg.sets,
    reps: newReg.reps,
    weight: newReg.weight,
    completion: false
}
createRegimen(newRegimenObj)
setNewReg({
    name: "",
    weight: "",
    reps: "",
    sets: ""
})
setRegEdit(false)

}

return(
<section>
    <form onSubmit={sendNewReg}>
    <input value={newReg.name} style={{display: "flex", height: "60px", paddingLeft: "40%", marginLeft: "2%", borderRadius: "10%"}} type="text" name="name" placeholder="Name"  onChange={handleChange}/>
    <input  value={newReg.weight} style={{display: "flex", height: "60px", paddingLeft: "40%", marginLeft: "2%", borderRadius: "10%"}} type="text" name="weight" placeholder="Weight"  onChange={handleChange}/>
    <input value={newReg.sets} style={{display: "flex", height: "60px", paddingLeft: "40%", marginLeft: "2%", borderRadius: "10%"}} type="text" name="sets" placeholder="Sets"  onChange={handleChange}/>
    <input value={newReg.reps} style={{display: "flex", height: "35px", paddingLeft: "40%", marginLeft: "2%", borderRadius: "10%"}} type="text" name="reps" placeholder="Reps"  onChange={handleChange}/>
    <button>Create</button>
    </form>
</section>

)
}

const mapStateToProps = state => {
	return {
	};
};
export default connect(mapStateToProps, {createRegimen})(RegInput);