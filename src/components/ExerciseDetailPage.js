import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"

function ExDetailsPage({exlist, match}) {

    const chosenExercise = exlist.find(
        filterFor => filterFor.name === match.params.exName
    )

    // console.log(chosenExercise, 'chosenExercise')
const {key, name, sets, reps, weight } = chosenExercise

const TitleCont = styled.div`
display: flex;
justify-content: center;
`;
const Exbox = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
background-color: white;
width: 200px;
height: 250px;
border: solid black 4px ;
border-radius: 10%;

@media (max-width: 750px) {

  padding-bottom: 45px;


}
`;

const InnerBox = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 250px;
border: solid red 4px ;
`;

const ExCont = styled.section`
overflow-x: scroll;
width: 100%;
display: flex;
border: solid black 4px ;
`;

const CenterText = styled.h4`
  padding-left: 40px;
  margin-top: 40px;
  margin-bottom: 0px;
  font-size: 30px;

`;

  return (
<div key={key}>
  <TitleCont>
  <h1>{name}</h1>
  </TitleCont>
  <ExCont>

    <Exbox>
      <InnerBox>
      <CenterText>Reps</CenterText>
      <CenterText>{reps}</CenterText>
      </InnerBox>

    </Exbox>

    <Exbox>
    <InnerBox>
  <CenterText  >Weight</CenterText >
  <CenterText>{weight}</CenterText>
  </InnerBox>
    </Exbox>

    <Exbox>
      <InnerBox>
      <CenterText>Sets</CenterText>
      <CenterText>{sets}</CenterText>
      </InnerBox>
    </Exbox>

  </ExCont>
 
</div>
  );
}

export default ExDetailsPage;
