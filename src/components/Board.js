import React from 'react'
import styled from 'styled-components'
import ExBox from './ExerciseStatBox';



function Board({exlist}) {
//////////////////////////////////////////////////////////////////////////
    const Exbox = styled.section`
    background-color: white;
    width: 90%;
    border: solid black 4px ;
    border-radius: 30%;
    margin-left: 5%;
    display: flex;
    justify-content: center;

    @media (max-width: 750px) {

      padding-bottom: 45px;
      margin-bottom: 30px;
    
    }
    `;

    const ExName = styled.h3 `
    border-bottom: solid black 5px;
    `;

    const Details = styled.h4 `
    
    @media (max-width: 750px) {
      display: none;
    }
    `;
//////////////////////////////////////////////////////////////////////////////////////////////


    const BoardCont = styled.div`
    display: flex;
    width: inherit;
    height: 90%;
    border-radius: 2%;
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

console.log(exlist, "exlist")
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
                    regimenWeight = {e.regimenWeight}
                    regimenID = {e.regimenID}
                    />   
                )
            })}
            <Exbox >
                <div>
                <ExName> ADD + </ExName>
                </div>
            
            </Exbox>
            </ExboxCont>

            
        </MainWall>
        {/* <RightWall>
            <h2>Right Wall</h2>
        </RightWall> */}
      
    </BoardCont>
  );
}

export default Board;
