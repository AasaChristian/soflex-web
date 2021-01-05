import React, { useState } from 'react'
import { connect } from 'react-redux';
import { updateRegimen} from '../action/regimenActions'


function ExForm(props){
const {match, history, updateRegimen} = props
const exToUpdate =  match.params.update
const regimenId = match.params.id

// console.log(regimen, "regimen")

const [updated, setUpdated] = useState([])
const handleChange = e => {
    setUpdated(e.target.value)
}
const updatedObj = {
    [exToUpdate] : updated
}
console.log(history, "HISTORY")
const SendUpdate = (e) => {
    e.preventDefault()
    updateRegimen(updatedObj, regimenId)
    history.push('/board')  
}
return(
    <section>
        <h2>{exToUpdate}</h2>
    <form onSubmit={SendUpdate}>
        <input type="text" name="updated" value={updated} onChange={handleChange}/>
        <button>Submit</button>
    </form>

    </section>

)
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen
	};
};

export default connect(mapStateToProps, { updateRegimen})(ExForm);