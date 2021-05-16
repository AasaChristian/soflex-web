import React, { useEffect, useState } from 'react'
import NewExForm from './NewExForm'
import ExList from './ExerciesList';
import {fetchExercise, createExercise, deleteExercise} from '../../action/exerciseActions'
import { connect } from 'react-redux';
import {Exbox, ExName, ExboxCont, blackOrWhite} from '../StyledComponent'


function ExerciseBoard(props) {
    const {history, exercises, regimen, exBoard, deleteExercise} = props
//////////////////////////////////////////////////////////////////////////
const [edit, setEdit] = useState(false)
const [reEdit, setRegEdit] = useState(false)
const [selectedExercise, setSelectedExercise] = useState(null)
// console.log(selectedExercise, "selectedExercise")
useEffect(() => {
    props.fetchExercise()
}, [exBoard])
    const DeleteExercis = (e) => {
        e.preventDefault()
        deleteExercise(selectedExercise)
        setSelectedExercise(null)
    }
  return (
    <div style={{width: "100%"}}>

            <ExboxCont >
            <div style={{display: "flex", justifyContent: "center", fontSize: "40px"}}>
                    <h1 style={{color: `${blackOrWhite[1]}`, marginBottom: "5%", marginTop: "5%"}}>Exercises</h1>
                </div>

            <div style={{height: "50%"}}>

                <section style={ edit=== true?{ display: "none"}:  {overflow: "scroll", height: "200px", marginTop: "10%", borderBottom: "solid black 1px"}}>
            {exercises.map((e) => {
                       return(
                        <ExList
                        exid = {e.id}
                        exName = {e.name}
                        exDescription = {e.description}
                        img = {e.img}
                        setSelectedExercise={setSelectedExercise}
                        selectedExercise={selectedExercise}
                        />
                       )
                   })}
                   </section>
            </div>

            <section style={selectedExercise > 0? {display: "inherit"}: {display: "none"}}>
                <button onClick={DeleteExercis}>Delete</button>
            </section>

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

export default connect(mapStateToProps, {fetchExercise, createExercise, deleteExercise})(ExerciseBoard);
