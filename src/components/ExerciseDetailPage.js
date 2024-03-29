import React, { useState } from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux';
import {TitleCont,TitleInner,Exbox, InnerBox, ExCont, CenterText} from './StyledComponent'

function ExDetailsPage(props) {

  const {match, regimen} = props

    const chosenExercise = regimen.filter(x => x.regimenName === match.params.exName)



const { name, reps, regimenName} = chosenExercise

// const TitleCont = styled.div`
// display: flex;
// justify-content: center;
// margin-bottom: 20px;
// border: solid red 4px ;
// `;
// const TitleInner = styled.div`
// display: flex;
// flex-direction: column;
// justify-content: center;
// `;
// const Exbox = styled.section`
// display: flex;
// flex-direction: row;
// justify-content: center;
// background-color: white;
// width: 200px;
// height: 250px;
// border: solid black 4px ;
// border-radius: 10%;

// @media (max-width: 750px) {

//   padding-bottom: 15px;


// }
// `;

// const InnerBox = styled.div`
// display: flex;
// flex-direction: column;
// width: 300px;
// height: 250px;
// border: solid red 4px ;
// `;

// const ExCont = styled.section`
// overflow-x: scroll;
// width: 100%;
// display: flex;
// border: solid black 4px ;
// `;

// const CenterText = styled.h4`
//   padding-left: 30px;
//   margin-top: 20px;
//   margin-bottom: 20px;
//   font-size: 30px;
// `;


  return (
<div >
  <TitleCont>
    <TitleInner >
    <CenterText>{regimenName}</CenterText>
  <CenterText>{name}</CenterText>
    </TitleInner>

  </TitleCont>
  <ExCont>

    <Exbox>
      <InnerBox>
        <NavLink to = {`/board/update/reps/`}>
      <CenterText>Reps</CenterText>
      <CenterText>{reps}</CenterText>
      </NavLink>
      </InnerBox>
    </Exbox>

    {/* <Exbox>
    <InnerBox>
    <NavLink to = {`/board/update/weight/${regimenID}`}>
  <CenterText  >Weight</CenterText >
  <CenterText>{regimenWeight}</CenterText>
  </NavLink>
  </InnerBox>
    </Exbox>

    <Exbox>
      <InnerBox>
      <NavLink to = {`/board/update/sets/${regimenID}`}>
      <CenterText>Sets</CenterText>
      <CenterText>{sets}</CenterText>
      </NavLink>
      </InnerBox>
    </Exbox> */}

  </ExCont>
 
</div>
  );
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen
	};
};


export default connect(mapStateToProps, {})(ExDetailsPage);
