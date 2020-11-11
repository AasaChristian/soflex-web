import React, { useState } from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import axios from 'axios'


function Login({history}) {

const [credentials, setCredentials] = useState([{
    username: '',
    password: ''
}])

console.log(credentials)
const handleChange = e => {
    setCredentials({...credentials, [e.target.name]: e.target.value})
}

const login = (e) => {
    console.log("Button")
    e.preventDefault()
    axios.post('https://citysoflex.herokuapp.com/api/users/login', {username: credentials.username, password: credentials.password})
    .then(res => {
        const {id, username} = res.data

        localStorage.setItem('id', id)
        localStorage.setItem('username', username)
        history.push('/board')
    }).catch(error => console.log(error, "error"))
}

  return (
<div>
<form onSubmit={login}>
    <input type="text" name="username" onChange={handleChange} placeholder="UserName" />
    <input type="text" name="password" onChange={handleChange} placeholder="PassWord"/>
    <button type="submit">LOGIN</button>
</form> 
</div>
  );
}

export default Login;
