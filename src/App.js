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
import Run2 from './components/RunComps/Run2';

function App() {


  return (
    <div className="App">

      <header style={{ zIndex: "1",  backgroundColor: "black", display: "flex", justifyContent: "space-around", height: "12%", opacity: "40%", position: "sticky", top: "0"}}>
        </header>
        <div style={{ zIndex: "2", display: 'flex', justifyContent: "space-evenly", position: "fixed", height: "15%", top: "0", width:"100%"}}>
        <Head/>
      </div>
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
      render={props => <Run2 {...props}/>}
      />

      <Route exact path='/board/:exName'
      render={props => <RegimenDetails {...props}/>}
      />

      <Route exact path='/board/update/:update/:id'
      render={props => <ExForm {...props} axiosAddress={axiosAddress} />  }
      />
    </Switch>

    {/* <section style={{position: "relative", height: "60px"}}>
<div style={{ zIndex: "1",  backgroundColor: "black", display: "flex", justifyContent: "space-around", height: "100%", opacity: "9%", position: "sticky", bottom: "0"}}>
        
        </div>
<Foot/>
</section> */}
      <section style={{ bottom: "0", width: "100%", position: "fixed", zIndex: "2"}}>
        <Foot/>
      </section>
      <section style={{zIndex: "1", bottom: "0", width: "100%", position: "fixed", backgroundColor: 'black', height: '63px', opacity: "50%"}}>

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
