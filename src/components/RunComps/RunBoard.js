import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {fetchRegimen, clearTempRegName, createRegimen,updateRegimen} from '../../action/regimenActions'
import {Exbox, ExName, ExboxCont} from '../StyledComponent'
import ExList from '../ExerciseComps/ExerciesList';
import RunList from './RunList';

function RunBoard(props) {
    const {history, regimen, regTempName, clearTempRegName, createRegimen, updateRegimen, exercises, regBoard, regimenName, userIdState} = props
//////////////////////////////////////////////////////////////////////////


console.log(regimenName, "regimenName")



useEffect(() => {
    const userIdLocalStorage = localStorage.getItem('key')

    if (userIdState === null){

        console.log(userIdLocalStorage, 'userIdLocalStorage')
        props.fetchRegimen(userIdLocalStorage)



    } else{
        console.log(userIdState[0], 'userIdState  Attempted Regimen get')
        props.fetchRegimen(userIdState)
    }

  },[exercises, createRegimen, updateRegimen])



  return (

    <div>
        {regimenName.map((reg, i) => {
            return(
                <div>
                    <RunList
                    name={reg}
                    key ={i}
                    />
                </div>
            )
        })}
    </div>
  );
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen,
        regTempName: state.regTempName,
        regimenName: state.regimenName,
        userIdState: state.userIdState
	};
};

export default connect(mapStateToProps, {fetchRegimen, clearTempRegName, createRegimen, updateRegimen})(RunBoard);
