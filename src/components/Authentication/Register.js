import React, { useState } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUserId} from '../../action/regimenActions'
import { SubmitButton} from '../StyledComponent'


function Register({history, axiosAddress}) {

const [credentials, setCredentials] = useState([{
    username: '',
    password: ''
}])

// console.log(credentials)
const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

const register = (e) => {
    // console.log("Button")
    e.preventDefault()
    axios.post(`${axiosAddress}/api/users/register`, {username: credentials.username, password: credentials.password})
    .then(res => {
        console.log(res.data)
        const {id, username, token} = res.data
        setUserId(id)
        localStorage.setItem('username', username)
        localStorage.setItem('token', token )
        localStorage.setItem('key' , id)
        history.push('/board')
        alert(`Hello ${credentials.username}!!! Welcome to SoFlex!!!`)
    }).catch(error => console.log(error, "error"))
}


  return (
<div>
<form onSubmit={register} style={{display: "flex", flexDirection: "column"}}>
    <input style={{display: "flex", paddingLeft: "20%", marginTop: "10%", height: "10pc", fontSize: "50px"}} type="text" name="username" onChange={handleChange} placeholder="UserName" />
    <input style={{display: "flex", paddingLeft: "20%", marginTop: "10%", height: "10pc", fontSize: "50px"}} type="text" name="password" onChange={handleChange} placeholder="PassWord"/>
    <SubmitButton type="submit">Register</SubmitButton>
</form> 
</div>
  );
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen,
        regTempName: state.regTempName,
        regimenName: state.regimenName
	};
};

export default connect(mapStateToProps, {setUserId})(Register);
