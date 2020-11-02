import React, {useState} from 'react'
import styled from 'styled-components'
import ExBox from './ExerciseStatBox';
import data from './DummyData'


function Board() {
    console.log(data, "data")
    const {user, blog} = data

    const exlist = user.ExerciseH.Standard

    console.log(exlist)

    const BoardCont = styled.div`
    display: flex;
    height: 100%
    ;`

    const LeftWall = styled.section`
    background-color: blue;
    margin-color: black;
    width: 12.5%;
    `;
    
    const MainWall = styled.section`
    background-color: red;
    width: 75%
    `;

    const RightWall = styled.section`
    background-color: yellow;
    width: 12.5%
    `;

    const ExboxCont = styled.section`
    display: flex;
    flex-direction: column;
    
    `;


  return (
    <BoardCont className="Board">

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
        <RightWall>
            <h2>Right Wall</h2>
        </RightWall>
      
    </BoardCont>
  );
}

export default Board;
