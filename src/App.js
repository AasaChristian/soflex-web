import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Head from './components/Head';
import Board from './components/Board';
import ExDetailsPage from './components/ExerciseDetailPage';
// import data from './DummyData'
import Login from './components/Login';
import { useEffect, useState } from 'react';
import axios from 'axios'
import ExForm from './components/ExForm';
import Register from './components/Register';
import Foot from './components/Foot';

function App() {

  // const axiosAddress = "http://localhost:5000"
  const axiosAddress = "https://citysoflex.herokuapp.com"
  
  const [state, setState] = useState()
  const [allEx, setAllEx] = useState()
  const [userData, setUserData] = useState([{
    regimen: []
  }])
const id = localStorage.getItem('id')
  useEffect(() => {
    axios.get(`${axiosAddress}/api/regimen/find/${id}`)
    .then(res => {
      console.log(res.data,"res from server")
      setUserData(res.data)
    }).catch(error => console.log(error))
  },[])
  console.log(userData, "userData")

  useEffect(() => {
    axios.get(`${axiosAddress}/api/exercises/all`)
    .then(res => {
      setAllEx(res.data)
      console.log(allEx, "allEx")
    }).catch(error => console.log(error))
  },[])

  return (
    <div className="App">
      <header>
        <Head/>
      </header>
      <Route exact path= '/'
      render={props => <Login {...props}  axiosAddress={axiosAddress} />}
      />
      <Route exact path= '/register'
      render={props => <Register {...props}  axiosAddress={axiosAddress} />}
      
      />
      <Route exact path='/board'
      render={props => <Board {...props} exlist={userData} state={state}  axiosAddress={axiosAddress} setState={setState} allEx={allEx} />}
      />
      <Route exact path='/board/:exName'
      render={props => <ExDetailsPage {...props}  exlist={userData}/>}
      />

<Route exact path='/board/update/:update/:id'
      render={props => <ExForm {...props}  exlist={userData} state={state}  setState= {setState} axiosAddress={axiosAddress} />  }
      />
      <section>
        <Foot/>
      </section>
    </div>
  );
}

export default App;
