import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ExBox from './ExerciseStatBox';
import NewExForm from './NewExForm'
import ExList from './ExerciesList';
import RegInput from './RegimenInpute'
import {fetchExercise, createExercise} from '../action/exerciseActions'
import { connect } from 'react-redux';
import {fetchRegimen} from '../action/regimenActions'

function Board(props) {
    const {history, exercises, regimen} = props
//////////////////////////////////////////////////////////////////////////
const [edit, setEdit] = useState(false)
const [reEdit, setRegEdit] = useState(false)
const [selectedExercise, setSelectedExercie] = useState()
const [litEx, setLitEx] = useState(false)
console.log(regimen, "regimen")
console.log(selectedExercise, "selectedExercise")

useEffect(() => {
    props.fetchExercise()
    console.log("in ues Effect")
},[props.createExercise])

useEffect(() => {
    props.fetchRegimen()

  },[])

console.log(exercises, "exercises")
console.log(litEx, "litEx")



const byRegName = (arr) => {
    console.log("BYREGNAME FUNCTION RAN")
    const cashe = []
    for (let i = 0; i < arr.length; i++){
        if (  cashe.includes(arr[i].regimenName) ){
            console.log("pass")
        } else{
            cashe.push(arr[i].regimenName)
        }
    }
    return(cashe)
}
const SortedRegs = byRegName(regimen)




    const Exbox = styled.section`
    background-color: white;
    width: 90%;
    border: solid black 4px ;
    border-radius: 30%;
    margin-left: 5%;
    display: flex;
    justify-content: center;

    @media (max-width: 750px) {

      padding-bottom: 5px;
      margin-bottom: 2px;
    
    }
    `;

    const ExName = styled.h2 `
    border-bottom: solid black 5px;
    display: flex;
    justify-content: center;
    `;
//////////////////////////////////////////////////////////////////////////////////////////////


    const BoardCont = styled.div`
    display: flex;
    width: inherit;
    height: 90%;
    border-radius: 2%;
    ;`

    const LeftWall = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #F8F1FF;
    border-left: solid #656176 7px;
    border-bottom: solid #656176 5px;
    border-top: solid #656176 5px;
    
    width: 20%;


    `;
    
    const MainWall = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #F8F1FF;
    width: 80%;
    border-radius: 4%;
    border: solid #656176 5px;

    `;

    const ExboxCont = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 60%;
    overflow: scroll;
    
    
    `;

    const BackButton = styled.button`
    height: 20%;
    padding-top: 10%;
    background-color: white;
    font-size: 20px;
    `;
const userName = localStorage.getItem('username')

const SendBack = (e) => {
e.preventDefault()
    history.goBack()
}


  return (
    <BoardCont >

        <MainWall>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <h1>{userName}'s Main Wall</h1>
            
            </div>


            <div style={{display: "flex", justifyContent: "center", fontSize: "40px"}}>
                    <h>Regimen</h>
                </div>
                <Exbox style={{marginTop: "25px"}}>
                <div>
                    <ExName onClick={x => setRegEdit(!reEdit)} > Create Regimen + </ExName>
                <h4  style={{display: "flex", justifyContent: "space-evenly"}}>{selectedExercise > 0? "Exercise Selected!" : "Selecet an Exercise!" }</h4>
                </div>
            </Exbox>

            <div style={reEdit === false? {display:"none"}: {marginLeft: "7px"}}>
                <RegInput 
                edit={edit}
                setEdit={setEdit}
                setRegEdit={setRegEdit}
                reEdit={reEdit}
                selectedExercise={selectedExercise}
                />
            </div>

            <ExboxCont>
            {SortedRegs.map((e, i) => {
                return(
                    <ExBox
                name = {e}
                regimenID = {i}
                />
                )
                
            })}

            <Exbox style={{marginTop: "15px"}}>
                <div >
                    
                    <ExName onClick={x => setEdit(!edit)} > Create Exercies + </ExName>
                    
                
                </div>
           
            
            </Exbox>


    <div style={edit === false? {display:"none"}: {marginLeft: "7px"}}>
                <NewExForm 
                edit={edit}
                setEdit={setEdit}
                setRegEdit={setRegEdit}
                reEdit={reEdit}
                />
            </div>




            <div>
                <div style={{display: "flex", justifyContent: "center", fontSize: "40px"}}>
                    <h>Exercises</h>
                </div>
                
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
            </div>

            {/* <Exbox style={{marginTop: "25px"}}>
                <div>
                    <ExName onClick={x => setRegEdit(!reEdit)} > Create Regimen + </ExName>
                </div>
            </Exbox> */}

            {/* <div style={reEdit === false? {display:"none"}: {marginLeft: "7px"}}>
                <RegInput 
                edit={edit}
                setEdit={setEdit}
                setRegEdit={setRegEdit}
                reEdit={reEdit}
                selectedExercise={selectedExercise}
                />
            </div> */}
            
            </ExboxCont>



            
        </MainWall>
        <LeftWall>
            <BackButton
            onClick={SendBack}
            >Back</BackButton>
        </LeftWall>
        {/* <RightWall>
            <h2>Right Wall</h2>
        </RightWall> */}
      
    </BoardCont>
  );
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen
	};
};

export default connect(mapStateToProps, {fetchExercise, createExercise, fetchRegimen})(Board);
