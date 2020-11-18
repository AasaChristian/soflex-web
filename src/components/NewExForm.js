import React, { useState } from 'react'
import {createExercise} from '../action/exerciseActions'
import { connect } from 'react-redux';


function ExForm(props){
const [newEx, setNewEx] = useState({
    name: "",
    description: ""
})
const {setEdit} = props

const handleChange = e => {
    setNewEx({...newEx, [e.target.name]: e.target.value})
}

const SendExercise = (e) => {
    e.preventDefault()
    const newExObj = {
        name: newEx.name,
        description: newEx.description,
        img: "00000001"
    }
    props.createExercise(newExObj)
    setNewEx({
        name: "",
        description: ""
    })
    setEdit(false)
}
return(
    <section>
        <h2>{newEx.name}</h2>
    <form onSubmit={SendExercise}>
        <input style={{display: "flex", height: "60px", paddingLeft: "40%", marginLeft: "2%", borderRadius: "10%"}} type="text" name="name" placeholder="Name It" value={newEx.name} onChange={handleChange} />
        <input style={{display: "flex", height: "60px", paddingLeft: "40%", marginLeft: "2%", borderRadius: "10%"}} type="text" name="description" placeholder="Describe" value={newEx.description} onChange={handleChange}/>
        <button>ADD</button>
    </form>

    </section>

)
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises
	};
};
export default connect(mapStateToProps, {createExercise})(ExForm);