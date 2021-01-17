import './App.css';
import {Route, Switch} from "react-router-dom";
import Head from './components/Head';
import Board from './components/Board';
import ExDetailsPage from './components/ExerciseDetailPage';
import Login from './components/Authentication/Login';
import ExForm from './components/ExForm';
import Register from './components/Authentication/Register';
import Foot from './components/Foot';

import { connect } from 'react-redux';
import {fetchRegimen, createRegimen} from './action/regimenActions'
import Landing from './components/Landing';
import Run from './components/RunComps/Run';
import PrivateRoute from './components/Authentication/PrivateRoute';
import RegimenDetails from './components/RegimenComps/RegimenDetails';
import {axiosAddress} from './AxiosAdress'

function App() {


  return (
    <div className="App">
      <header>
        <Head/>
      </header>
      <Switch>
      <PrivateRoute
      exact path="/board"
      component={Board}
      />

      <Route exact path= '/'
      render={props => <Landing {...props}   />}
      />

      <Route exact path= '/login'
      render={props => <Login {...props}  axiosAddress={axiosAddress} />}
      />
      <Route exact path= '/register'
      render={props => <Register {...props}  axiosAddress={axiosAddress} />}
      
      />
      {/* <Route exact path='/board'
      render={props => <Board {...props}/>}
      /> */}

      <Route exact path='/run/:regimenName'
      render={props => <Run {...props}/>}
      />

      <Route exact path='/board/:exName'
      render={props => <RegimenDetails {...props}/>}
      />

      <Route exact path='/board/update/:update/:id'
      render={props => <ExForm {...props} axiosAddress={axiosAddress} />  }
      />
    </Switch>
      <section style={{ bottom: "0", width: "100%", position: "absolute"}}>
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
