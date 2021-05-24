import React from 'react'
import { RunListExbox, RunListBorderBottom} from '../StyledComponent'
import {NavLink} from "react-router-dom"
import { connect } from 'react-redux';
import {MdFitnessCenter} from  'react-icons/md'




function RunList(props) {
const {regimen, name, key} = props

  // console.log(regimen, "regimen")
//   const chosenLogsEx = chosenLogs.filter(
//     filterFor => filterFor.regimenId === regimenId
// )
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

    // console.log(key, "key")
    // console.log(name, "name")

  return (
    <RunListExbox key ={key}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", width: '100%', alignItems: 'center'}}>
        <MdFitnessCenter style={{height: '90%', width: '25%'}}/>
      <NavLink  to = {`/run/${name}`} style={{ textDecoration: 'none' }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <RunListBorderBottom>{name.substr(0,10)}</RunListBorderBottom>
        </div>
      </NavLink>
      <div style={{ height: '100%', width: '25%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h1 style={{fontSize: '80%'}}>This Regimen Has Not been Completed</h1>
      </div>



        </div>
    </RunListExbox>
  );
}
const mapStateToProps = state => {
return{
  regimen: state.regimen
};
};

export default connect(mapStateToProps,{})(RunList);
