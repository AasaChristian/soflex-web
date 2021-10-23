import React, { useEffect, useState } from 'react'
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux';
import {fetchRegimen, deleteRegimenEX} from '../../action/regimenActions'
import {CenterTextREGDE, ExContREGDE, ExboxREGDE, TitleCont, TitleInner, PageScroll, InnerBox} from '../StyledComponent'


function RegimenDetails(props) {

    const [curEx, setCurEx] = useState(0)
    const [index, setIndex] = useState(0)
    const [reState, setRestate] = useState(false)

  const {match, regimen, history, deleteRegimenEX} = props

  let chosenExercise = regimen.filter(x => x.regimenName === match.params.exName)

  if (regimen.length < 1) {
history.push('/board')
  } 






let arrLen = chosenExercise.length

useEffect(() => {
    setCurEx(chosenExercise[index].regimenID) 
    return arrLen = chosenExercise.length
},[reState])




const Swipe = e => {
    e.preventDefault()
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
  history.push('/board')
}









  return (
<div >
  <TitleCont>
    <TitleInner >
    <CenterTextREGDE>{chosenExercise[0].regimenName}</CenterTextREGDE>
    </TitleInner>

  </TitleCont>

  


  {chosenExercise.map((excercise) => {

      const {regimenID, name, reps, regimenWeight, sets } = excercise
      return(
      
          <PageScroll 
          onClick={Swipe}
          style={curEx === regimenID? {display: "initial"}: {display: "none"}}>
        <CenterTextREGDE>{name}</CenterTextREGDE>
      <CenterTextREGDE>{index+1} of {arrLen}</CenterTextREGDE>
        <ExContREGDE>
  

    <ExboxREGDE>
      <InnerBox>
        <NavLink to = {`/board/update/reps/${regimenID}`}>
      <CenterTextREGDE>Reps</CenterTextREGDE>
      <CenterTextREGDE>{reps}</CenterTextREGDE>
      </NavLink>
      </InnerBox>
    </ExboxREGDE>

    <ExboxREGDE>
    <InnerBox>
    <NavLink to = {`/board/update/weight/${regimenID}`}>
  <CenterTextREGDE  >Weight</CenterTextREGDE >
  <CenterTextREGDE>{regimenWeight}</CenterTextREGDE>
  </NavLink>
  </InnerBox>
    </ExboxREGDE>

    <ExboxREGDE>
      <InnerBox>
      <NavLink to = {`/board/update/sets/${regimenID}`}>
      <CenterTextREGDE>Sets</CenterTextREGDE>
      <CenterTextREGDE>{sets}</CenterTextREGDE>
      </NavLink>
      </InnerBox>
    </ExboxREGDE>

  </ExContREGDE>
  <section style={{display: 'flex', justifyContent: 'center'}}>
    {/* <div>

      <button onClick={RemoveExerciseFromRegimen}>Remove Exercies</button>

    </div> */}
    <div>
    <NavLink to = {"/board"}
><h1 >BACK</h1></NavLink>
    </div>
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
