import './App.css';
import {Route} from "react-router-dom";
import Head from './components/Head';
import Board from './components/Board';
import ExDetailsPage from './components/ExerciseDetailPage';
import Login from './components/Login';
import ExForm from './components/ExForm';
import Register from './components/Register';
import Foot from './components/Foot';

import { connect } from 'react-redux';
import {fetchRegimen, createRegimen} from './action/regimenActions'
import Landing from './components/Landing';

function App() {
  const axiosAddress = "http://localhost:5000"
  // const axiosAddress = "https://citysoflex.herokuapp.com"

  return (
    <div className="App">
      <header>
        <Head/>
      </header>

      <Route exact path= '/'
      render={props => <Landing {...props}  />}
      />
      <Route exact path= '/login'
      render={props => <Login {...props}  axiosAddress={axiosAddress} />}
      />
      <Route exact path= '/register'
      render={props => <Register {...props}  axiosAddress={axiosAddress} />}
      
      />
      <Route exact path='/board'
      render={props => <Board {...props}/>}
      />
      <Route exact path='/board/:exName'
      render={props => <ExDetailsPage {...props}/>}
      />

<Route exact path='/board/update/:update/:id'
      render={props => <ExForm {...props} axiosAddress={axiosAddress} />  }
      />
      <section style={{position: "absolute", bottom: "0", width: "100%"}}>
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
