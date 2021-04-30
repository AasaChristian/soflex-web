import React, { useState } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUserId} from '../../action/regimenActions'
import { SubmitButton} from '../StyledComponent'


function Login(props) {
const {setUserId, history, axiosAddress} = props
const [credentials, setCredentials] = useState([{
    username: '',
    password: ''
}])

// console.log(credentials)
const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

const login = (e) => {

    e.preventDefault()
    axios.post(`${axiosAddress}/api/users/login`, {username: credentials.username, password: credentials.password})
    .then(res => {
        const {id, username, token} = res.data

        setUserId(id)
        localStorage.setItem('username', username)
        localStorage.setItem('token', token )
        localStorage.setItem('key' , id)

        alert(`Hello ${credentials.username}!!! You are now logged in to SoFlex!!!`)
        history.push('/board')
    }).catch(error => console.log(error, "error"))
}


  return (
<div>
<form onSubmit={login} style={{display: "flex", flexDirection: "column"}}>
  
    <input style={{display: "flex", paddingLeft: "20%", marginTop: "10%", height: "10pc", fontSize: "50px"}} type="text" name="username" onChange={handleChange} placeholder="UserName" />
    <input style={{display: "flex", paddingLeft: "20%", marginTop: "10%", height: "10pc", fontSize: "50px"}} type="text" name="password" onChange={handleChange} placeholder="PassWord"/>
    <SubmitButton type="submit">LOGIN</SubmitButton>
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

export default  connect(mapStateToProps, {setUserId})(Login);
