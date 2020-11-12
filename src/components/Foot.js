
import React from 'react'
import styled from 'styled-components'
import {NavLink} from "react-router-dom"


function Foot() {
const FootCont = styled.section`
background-color: black;
`;

const FootText = styled.h4`
color: white;
`;


  return (
<FootCont>
    <div>
        <FootText>Aasa Christian</FootText>
        <FootText>Web Dev</FootText>
        <FootText>Richmond,Va</FootText>
    </div>
    <div></div>
    <div></div>

</FootCont>
  );
}

export default Foot;
