import React, {useState} from 'react'
import styled from 'styled-components'


function Board() {

    const BoardCont = styled.div`
    display: flex;
    height: 100%
    
    
    ;`

    const LeftWall = styled.section`
    background-color: blue;
    margin-color: black;
    width: 12.5%

    `;
    

    const MainWall = styled.section`
    background-color: red;
    width: 75%
    `;

    const RightWall = styled.section`
    background-color: yellow;
    width: 12.5%
    `;




  return (
    <BoardCont className="Board">

        <LeftWall>
            <h2>Left Wall</h2>
        </LeftWall>
        <MainWall>
            <h1>MainWall</h1>
        </MainWall>
        <RightWall>
            <h2>Right Wall</h2>
        </RightWall>
      
    </BoardCont>
  );
}

export default Board;
