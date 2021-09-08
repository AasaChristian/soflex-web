import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {fetchRegimen, clearTempRegName, createRegimen,updateRegimen} from '../../action/regimenActions'
import RunList from './RunList';
import Pulse from 'react-reveal/Pulse';
function RunBoard(props) {
    const {createRegimen, updateRegimen, exercises, regimenName, userIdState, loading} = props
//////////////////////////////////////////////////////////////////////////





useEffect(() => {
    const userIdLocalStorage = localStorage.getItem('key')

    if (userIdState === null){

        props.fetchRegimen(userIdLocalStorage)



    } else{
        props.fetchRegimen(userIdState)
    }

  },[exercises, createRegimen, updateRegimen])



  return (

    <div >
                    <div style={{display: 'flex', justifyContent: 'center'}}>   
                    {loading &&  <Pulse  delay={500} forever={true} >
                    <h1 style={{color: 'white', fontSize: '400%'}}>LOADING</h1>
                </Pulse >}</div>
        {regimenName.map((reg, i) => {
            return(
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10%'}}>
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
        userIdState: state.userIdState,
        loading: state.loading
	};
};

export default connect(mapStateToProps, {fetchRegimen, clearTempRegName, createRegimen, updateRegimen})(RunBoard);
