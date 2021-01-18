import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux';
import {fetchRegimen, deleteRegimenEX} from '../../action/regimenActions'


function RegimenDetails(props) {

    const [curEx, setCurEx] = useState(0)
    const [index, setIndex] = useState(0)
    const [reState, setRestate] = useState(false)

  const {match, regimen, history, deleteRegimenEX} = props

  let chosenExercise = regimen.filter(x => x.regimenName === match.params.exName)

  if (regimen.length < 1) {
history.push('/board')
  } 


// console.log(match.params.exName, "EXNAME")

    // console.log(regimen.length, "regimen Len")

    // console.log(regimen, "regimen")

    // console.log(curEx, "curEx")

    // console.log(chosenExercise, "chosenExercise")



let arrLen = chosenExercise.length

useEffect(() => {
    setCurEx(chosenExercise[index].regimenID) 
    return arrLen = chosenExercise.length
},[reState])




const Swipe = e => {
    e.preventDefault()
    console.log("DRAGGG")
    if (index === arrLen -1){
        setIndex(0)
        setRestate(!reState)
    } else {
        setIndex(index + 1)
        setRestate(!reState)
    }


}
const RemoveExerciseFromRegimen = e => {
  e.preventDefault()
  deleteRegimenEX(curEx)
  // console.log("Removers exdeercies Button", curEx)
  history.push('/board')
}
const TitleCont = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
border: solid red 4px ;
`;
const TitleInner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
const Exbox = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
background-color: white;
width: 200px;
height: 200px;
border: solid black 4px ;
border-radius: 10%;

@media (max-width: 750px) {

  padding-bottom: 15px;


}
`;

const InnerBox = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 200px;
border: solid red 4px ;
`;

const ExCont = styled.section`
overflow-x: scroll;
width: 100%;
display: flex;
border: solid black 4px ;
`;

const CenterText = styled.h4`
  padding-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 30px;
`;

const PageScroll = styled.div`
height: 100%;
`;
  return (
<div >
  <TitleCont>
    <TitleInner >
    <CenterText>{chosenExercise[0].regimenName}</CenterText>
    </TitleInner>

  </TitleCont>

  


  {chosenExercise.map((excercise) => {

      const {regimenID, name, reps, regimenWeight, sets } = excercise
      return(
      
          <PageScroll 
          onClick={Swipe}
          style={curEx === regimenID? {display: "initial"}: {display: "none"}}>
        <CenterText>{name}</CenterText>
      <CenterText>{index+1} of {arrLen}</CenterText>
        <ExCont>
  

    <Exbox>
      <InnerBox>
        <NavLink to = {`/board/update/reps/${regimenID}`}>
      <CenterText>Reps</CenterText>
      <CenterText>{reps}</CenterText>
      </NavLink>
      </InnerBox>
    </Exbox>

    <Exbox>
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
    </Exbox>

  </ExCont>
  <section>
    <div>

      <button onClick={RemoveExerciseFromRegimen}>Remove Exercies</button>

    </div>
    <div></div>
  </section>
</PageScroll>

        
      )
  })}
  
 
</div>
  );
}

const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen
	};
};


export default connect(mapStateToProps, {fetchRegimen, deleteRegimenEX})(RegimenDetails);
