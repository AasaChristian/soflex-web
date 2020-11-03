import React from 'react'
import styled from 'styled-components'
import ExBox from './ExerciseStatBox';
import data from './DummyData'


function Board() {
    console.log(data, "data")
    const {user} = data
    const exlist = user.ExerciseH.Standard



    const BoardCont = styled.div`
    display: flex;
    width: inherit;
    height: 90%;
    ;`

    const LeftWall = styled.section`
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

    const RightWall = styled.section`
    background-color: yellow;
    border-radius: 2%;

    `;

    const ExboxCont = styled.section`
    display: flex;
    flex-direction: column;
    height: 90%;
    overflow: scroll;
    
    
    `;


  return (
    <BoardCont >

        <LeftWall>
            <h2>Left Wall</h2>
        </LeftWall>
        <MainWall>
            <h1>MainWall</h1>
            <ExboxCont>
            {exlist.map((e) => {
                return(
                    <ExBox
                    name = {e.name}
                    reps = {e.reps}
                    sets = {e.sets}
                    weight = {e.weight}
                    key = {e.key}
                    />   
                )
            })}
            </ExboxCont>
            
        </MainWall>
        {/* <RightWall>
            <h2>Right Wall</h2>
        </RightWall> */}
      
    </BoardCont>
  );
}

export default Board;
