import React, { useState } from 'react'
import axios from 'axios'


function ExForm({match, setState, state}){
const exToUpdate =  match.params.update
const regimenId = match.params.id

console.log(regimenId, "regimenId")
console.log(exToUpdate, "exToUpdate")

const [updated, setUpdated] = useState([])
const handleChange = e => {
    setUpdated(e.target.value)
}
console.log(updated, "updated")

const updatedObj = {
    [exToUpdate] : updated
}

const SendUpdate = (e) => {
    e.preventDefault()
    axios.put(`https://citysoflex.herokuapp.com/api/regimen/update/${regimenId}`, 
    updatedObj)
    .then(res => {
        setState(!state)
        console.log(res, "res")
    }).catch(error => console.log(error))
}
return(
    <section>
        <h2>{exToUpdate}</h2>
    <form onSubmit={SendUpdate}>
        <input type="text" name="updated" value={updated} onChange={handleChange}/>
    </form>

    </section>

)
}
export default ExForm;