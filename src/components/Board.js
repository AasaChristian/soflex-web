import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ExBox from './ExerciseStatBox';
import NewExForm from './NewExForm'
import ExList from './ExerciesList';
import RegInput from './RegimenInpute'


function Board({exlist, state, setState, allEx, history, axiosAddress}) {
//////////////////////////////////////////////////////////////////////////
const [edit, setEdit] = useState(false)
const [reEdit, setRegEdit] = useState(false)
const [selectedExercise, setSelectedExercie] = useState()
console.log(exlist, "exlist")
console.log(selectedExercise, "selectedExercise")


const byRegName = (arr) => {
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



console.log(byRegName(exlist), "sortedRegs")

    useEffect(() => {
        setState(!state)
        console.log("setState")
    },[])
    const Exbox = styled.section`
    background-color: white;
    width: 90%;
    border: solid black 4px ;
    border-radius: 30%;
    margin-left: 5%;
    display: flex;
    justify-content: center;

    @media (max-width: 750px) {

      padding-bottom: 20px;
      margin-bottom: 20px;
    
    }
    `;

    const ExName = styled.h3 `
    border-bottom: solid black 5px;
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
    background-color: #F8F1FF;
    border-left: solid #656176 7px;
    border-bottom: solid #656176 5px;
    border-top: solid #656176 5px;
    
    width: 20%;


    `;
    
    const MainWall = styled.section`
    background-color: #F8F1FF;
    width: 80%;
    border-radius: 4%;
    border: solid #656176 5px;

    `;

    const ExboxCont = styled.section`
    display: flex;
    flex-direction: column;
    height: 90%;
    overflow: scroll;
    
    
    `;

    const BackButton = styled.button`
    height: 20%;
    padding-top: 10%;
    background-color: white;
    font-size: 20px;
    `;
const userName = localStorage.getItem('username')
console.log(allEx, "allEx")

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

            <ExboxCont>
            {exlist.map((e) => {
                return(
                    <ExBox
                    name = {e.name}
                    reps = {e.reps}
                    sets = {e.sets}
                    regimenWeight = {e.regimenWeight}
                    regimenID = {e.regimenID}
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
                axiosAddress={axiosAddress}
                />
            </div>




            <div>
                <div style={{display: "flex", justifyContent: "center", fontSize: "40px"}}>
                    <h>Exercises</h>
                </div>
                
            {allEx.map((e) => {
                       return(
                        <ExList
                        exid = {e.id}
                        exName = {e.name}
                        exDescription = {e.description}
                        img = {e.img}
                        setSelectedExercie={setSelectedExercie}
                        />
                       )
                   })}
            </div>

            <Exbox style={{marginTop: "25px"}}>
                <div>
                    <ExName onClick={x => setRegEdit(!reEdit)} > Create Regimen + </ExName>
                </div>
            </Exbox>

            <div style={reEdit === false? {display:"none"}: {marginLeft: "7px"}}>
                <RegInput 
                edit={edit}
                setEdit={setEdit}
                setRegEdit={setRegEdit}
                reEdit={reEdit}
                selectedExercise={selectedExercise}
                axiosAddress={axiosAddress}
                />
            </div>
            
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

export default Board;
