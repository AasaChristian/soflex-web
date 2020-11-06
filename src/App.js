import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import Head from './components/Head';
import Board from './components/Board';
import ExDetailsPage from './components/ExerciseDetailPage';
import data from './DummyData'
import Login from './components/Login';
import { useState } from 'react';
import axios from 'axios'

function App() {


  const [userData, setUserData] = useState([{
    regimen: []
  }])



  console.log(data, "data")

  const {user} = data
  const exlist = user.ExerciseH.Standard


  return (
    <div className="App">
      <header>
        <Head/>
      </header>
      <Route exact path= '/'
      render={props => <Login {...props}  />}
      
      />
      <Route exact path='/board'
      render={props => <Board {...props} exlist={exlist} />}
      />
      <Route path='/board/:exName'
      render={props => <ExDetailsPage {...props}  exlist={exlist}/>}
      />
    </div>
  );
}

export default App;
