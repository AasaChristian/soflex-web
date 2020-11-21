import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {fetchExercise, createExercise} from '../action/exerciseActions'
import { connect } from 'react-redux';


function Run(props) {
  const {history, match, regimen} = props

  const chosenExercise = regimen.find(
      filterFor => filterFor.regimenName === match.params.regimenName
  )
  const SendBack = (e) => {
    e.preventDefault()
        history.goBack()
    }

    console.log(chosenExercise, "chosenExercise RUN")
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



  return (
    <BoardCont >

        <MainWall>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <h1>{userName}'s Run Wall</h1>
            
            </div>


            <div style={{display: "flex", justifyContent: "center", fontSize: "40px"}}>
                    <h>Regimen</h>
                </div>

                <Exbox style={{marginTop: "25px"}}>
                <div>

                <h4  style={{display: "flex", justifyContent: "space-evenly"}}> </h4>
                </div>

            </Exbox>

            <div >

            </div>

            <ExboxCont>
    <div >

            </div>

            
            </ExboxCont>



            
        </MainWall>
        <LeftWall>
            <BackButton
            onClick={SendBack}
            >Back</BackButton>
        </LeftWall>
      
    </BoardCont>
  );
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen
	};
};

export default connect(mapStateToProps, {})(Run);
