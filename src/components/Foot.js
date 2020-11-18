
import React from 'react'
import styled from 'styled-components'


function Foot() {
const FootCont = styled.section`
background-color: black;


`;

const FootText = styled.h4`
color: white;
margin-bottom: 0;
display:flex;
justify-content: center;
`;


  return (
<FootCont>
  <section style={{display: "flex", justifyContent:"center"}}>
  <div style={{display: "flex", flexDirection: "column"}}>
        <FootText>Aasa Christian</FootText>
        <FootText>City Web Development</FootText>
        <FootText>Richmond,Va</FootText>
    </div>
  </section>

    <div></div>
    <div></div>

</FootCont>
  );
}

export default Foot;
