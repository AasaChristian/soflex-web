import React from 'react'
import { Exbox, BorderBottom, NavSection, blackOrWhite} from '../StyledComponent'
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux';
import { createTempRegName } from '../../action/regimenActions';




function RegimenList({name, regimenID,  completed, UnComplete, link, SwapEdit, regTempName   }) {

    // const Exbox = styled.section`
    // background-color: white;
    // width: 90%;
    // border: solid black 4px ;
    // border-radius: 30%;
    // margin-left: 5%;
    // display: flex;
    // justify-content: center;

    // @media (max-width: 750px) {

    //   padding-bottom: 45px;
    //   margin-bottom: 30px;
    // }
    // `;


    // const Details = styled.h4 `
    
    // @media (max-width: 750px) {
    //   display: none;
    // }
    // `;

    // const NavSection = styled.section`
    // display: flex;
    // justify-content: space-between;
    // `;



    const updateregimen = () => {
      UnComplete(link)
    }



const addExToReg = (e) => {
e.preventDefault()
SwapEdit(e)
console.log(name, "name")
createTempRegName(name)
// setHideExList(false)
console.log(regTempName, "name 2")
}
  return (
    <Exbox key ={regimenID}>
      <div>
      <NavLink  to = {`/board/${name}`} style={{ textDecoration: 'none' }}>
        <div style={{width: "9pc", display: "flex", justifyContent: "center"}}>
        <BorderBottom>{name.substr(0,12)}</BorderBottom>
        </div>
      </NavLink>

        <NavSection style={completed === true? {display: 'none'}: {display: 'flex'}}>
          <NavLink   to = {`/run/${name}`} style={{ textDecoration: 'none' , color: `${blackOrWhite[1]}`}}> Start</NavLink>
          <div  onClick={addExToReg} style={{ textDecoration: 'none', color: `${blackOrWhite[1]}` }}>Add </div>
          <NavLink  to = {`/board/${name}`} style={{ textDecoration: 'none', color: `${blackOrWhite[1]}` }}>Edit</NavLink>

        </NavSection>

        <div style={completed === false? {display: 'none'}: {display: 'flex', backgroundColor: 'yellow'}} onClick={updateregimen}>
          <h1>BUTTON</h1>
        </div>

        </div>
    </Exbox>
  );
};
const mapStateToProps = state => {
	return {
        regTempName: state.regTempName,
        regimenName: state.regimenName,
	};
};
export default    connect(mapStateToProps, { createTempRegName})(RegimenList);
