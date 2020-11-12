import React, { useState } from 'react'
import axios from 'axios'


function ExForm({match, setState, state, edit, axiosAddress, setEdit}){


const [newEx, setNewEx] = useState({
    name: "",
    description: ""
})

const handleChange = e => {
    setNewEx({...newEx, [e.target.name]: e.target.value})
}
console.log([newEx], "updated")



// console.log(newExObj, "newExObj")

const SendExercise = (e) => {
    e.preventDefault()

    const newExObj = {
        name: newEx.name,
        description: newEx.description,
        img: "00000001"
    }

    console.log(newExObj, "newExObj")

    axios.post(`${axiosAddress}/api/exercises/add`, 
    newExObj)
    .then(res => {

        setNewEx({
            name: "",
            description: ""
        })
        // setState(!state)
        console.log(res, "res")
    }).catch(error => console.log(error))
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
export default ExForm;