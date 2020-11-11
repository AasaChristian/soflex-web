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

function App() {

  const [state, setState] = useState()
  const [userData, setUserData] = useState([{
    regimen: []
  }])
const id = localStorage.getItem('id')
  useEffect(() => {
    axios.get(`https://citysoflex.herokuapp.com/api/regimen/find/${id}`)
    .then(res => {
      console.log(res.data,"res from server")
      setUserData(res.data)
    }).catch(error => console.log(error))
  },[state])
  console.log(userData, "userData")

  // const {user} = data
  // const exlist = user.ExerciseH.Standard

// console.log(exlist, "exlist")
  return (
    <div className="App">
      <header>
        <Head/>
      </header>
      <Route exact path= '/'
      render={props => <Login {...props}  />}
      />
      <Route exact path= '/register'
      render={props => <Register {...props}  />}
      
      />
      <Route exact path='/board'
      render={props => <Board {...props} exlist={userData} />}
      />
      <Route exact path='/board/:exName'
      render={props => <ExDetailsPage {...props}  exlist={userData}/>}
      />

<Route exact path='/board/update/:update/:id'
      render={props => <ExForm {...props}  exlist={userData} state={state}  setState= {setState}/>}
      />
    </div>
  );
}

export default App;
