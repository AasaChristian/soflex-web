
import React from 'react'
import styled from 'styled-components'


function Foot() {
const FootCont = styled.section`
background-color: black;
height: 120px;
max-height: 120px;


`;

const FootText = styled.h4`
color: white;
margin-bottom: 0;
display:flex;
justify-content: center;
`;


  return (
<FootCont>
  <section style={{display: "flex", justifyContent:"center", height: '120px'}}>
  <div style={{display: "flex", flexDirection: "column", height: '120px'}}>
        <FootText>City Web Development</FootText>
        <FootText>Ace Christian</FootText>
    </div>
  </section>

    <div></div>
    <div></div>

</FootCont>
  );
}

export default Foot;
