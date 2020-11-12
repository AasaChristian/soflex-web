import React, { useState } from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import axios from 'axios'


function Login({history, axiosAddress}) {

const [credentials, setCredentials] = useState([{
    username: '',
    password: ''
}])

console.log(credentials)
const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
    console.log("here")
}

const login = (e) => {
    console.log("Button")
    e.preventDefault()
    axios.post(`${axiosAddress}/api/users/login`, {username: credentials.username, password: credentials.password})
    .then(res => {
        console.log(res, "res")
        const {id, username} = res.data

        localStorage.setItem('id', id)
        localStorage.setItem('username', username)
        alert(`Hello ${credentials.username}!!! You are now logged in to SoFlex!!!`)
        history.push('/board')
    }).catch(error => console.log(error, "error"))
}
const SubmitButton = styled.button`
height: 10pc;
margin-top: 20%;
font-size: 50px;
`;

  return (
<div>
<form onSubmit={login} style={{display: "flex", flexDirection: "column"}}>
  
    <input style={{display: "flex", paddingLeft: "20%", marginTop: "20%", height: "10pc", fontSize: "50px"}} type="text" name="username" onChange={handleChange} placeholder="UserName" />
    <input style={{display: "flex", paddingLeft: "20%", marginTop: "20%", height: "10pc", fontSize: "50px"}} type="text" name="password" onChange={handleChange} placeholder="PassWord"/>
    <SubmitButton type="submit">LOGIN</SubmitButton>
</form> 

</div>
  );
}

export default Login;
