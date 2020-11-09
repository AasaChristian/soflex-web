import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Head from './components/Head';
import Board from './components/Board';
import ExDetailsPage from './components/ExerciseDetailPage';
import data from './DummyData'
import Login from './components/Login';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {


  const [userData, setUserData] = useState([{
    regimen: []
  }])
const id = localStorage.getItem('id')
  useEffect(() => {
    axios.get(`http://localhost:5000/api/regimen/find/${id}`)
    .then(res => {
      console.log(res.data,"res from server")
      setUserData(res.data)
    }).catch(error => console.log(error))
  },[])
  console.log(userData, "userData")

  const {user} = data
  const exlist = user.ExerciseH.Standard

console.log(exlist, "exlist")
  return (
    <div className="App">
      <header>
        <Head/>
      </header>
      <Route exact path= '/'
      render={props => <Login {...props}  />}
      
      />
      <Route exact path='/board'
      render={props => <Board {...props} exlist={userData} />}
      />
      <Route path='/board/:exName'
      render={props => <ExDetailsPage {...props}  exlist={userData}/>}
      />
    </div>
  );
}

export default App;
