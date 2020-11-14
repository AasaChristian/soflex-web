import React, { useState } from 'react'
import axios from 'axios'


function ExForm({match, axiosAddress}){
const exToUpdate =  match.params.update
const regimenId = match.params.id

const [updated, setUpdated] = useState([])
const handleChange = e => {
    setUpdated(e.target.value)
}
const updatedObj = {
    [exToUpdate] : updated
}

const SendUpdate = (e) => {
    e.preventDefault()
    axios.put(`${axiosAddress}/api/regimen/update/${regimenId}`, 
    updatedObj)
    .then(res => {
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