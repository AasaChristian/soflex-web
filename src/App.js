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

import { connect } from 'react-redux';
import {fetchRegimen, createRegimen} from './action/regimenActions'

function App() {
  const axiosAddress = "http://localhost:5000"
  // const axiosAddress = "https://citysoflex.herokuapp.com"

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
      render={props => <Board {...props}  axiosAddress={axiosAddress} />}
      />
      <Route exact path='/board/:exName'
      render={props => <ExDetailsPage {...props}/>}
      />

<Route exact path='/board/update/:update/:id'
      render={props => <ExForm {...props} axiosAddress={axiosAddress} />  }
      />
      <section>
        <Foot/>
      </section>
    </div>
  );
}

const mapStateToProps = state => {
	return {
        regimen: state.regimen
	};
};

export default connect(mapStateToProps, {fetchRegimen, createRegimen})(App);
