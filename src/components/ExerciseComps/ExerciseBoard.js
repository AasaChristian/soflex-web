import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import NewExForm from './NewExForm'
import ExList from './ExerciesList';
import {fetchExercise, createExercise} from '../../action/exerciseActions'
import { connect } from 'react-redux';
import {Exbox, ExName, ExboxCont} from '../StyledComponent'


function ExerciseBoard(props) {
    const {history, exercises, regimen, exBoard} = props
//////////////////////////////////////////////////////////////////////////
const [edit, setEdit] = useState(false)
const [reEdit, setRegEdit] = useState(false)
const [selectedReg, setSelectedReg] = useState(false)
const [selectedExercise, setSelectedExercie] = useState()
const [litEx, setLitEx] = useState(false)

useEffect(() => {
    props.fetchExercise()
}, [exBoard])


    
  return (
    <div style={{width: "100%"}}>

            <ExboxCont >
            <div style={{display: "flex", justifyContent: "center", fontSize: "40px"}}>
                    <h>Exercises</h>
                </div>

            <div style={{height: "50%"}}>

                <section style={{overflow: "scroll", height: "60%", marginTop: "10%", borderBottom: "solid black 1px"}}>
            {exercises.map((e) => {
                       return(
                        <ExList
                        exid = {e.id}
                        exName = {e.name}
                        exDescription = {e.description}
                        img = {e.img}
                        setSelectedExercie={setSelectedExercie}
                        selectedExercise={selectedExercise}
                        />
                       )
                   })}
                   </section>
            </div>





           
            <Exbox style={{marginTop: "15px", }}>
                <div >
                    <ExName onClick={x => setEdit(!edit)} > Create Exercies + </ExName>
                </div>
           
            
            </Exbox>
{/* Hidden Exercise Input form */}
    <div style={edit === false? {display: "none"} : {display: "flex", flexDirection:"column", justifyContent: "center"}}>
                <NewExForm 
                edit={edit}
                setEdit={setEdit}
                setRegEdit={setRegEdit}
                reEdit={reEdit}
                />
            </div>
            </ExboxCont>

    </div>
  );
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen
	};
};

export default connect(mapStateToProps, {fetchExercise, createExercise})(ExerciseBoard);
