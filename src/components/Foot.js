
import React from 'react'
import styled from 'styled-components'


function Foot() {
const FootCont = styled.section`
background-color: black;
height: 60px;
max-height: 60px;


`;

const FootText = styled.h4`
color: white;
margin-bottom: 0;
display:flex;
justify-content: center;
`;


  return (
<FootCont>
  <section style={{display: "flex", justifyContent:"center", height: '60px'}}>
  <div style={{display: "flex", flexDirection: "column", height: '60px'}}>
        <FootText>City Web Development</FootText>
    </div>
  </section>

    <div></div>
    <div></div>

</FootCont>
  );
}

export default Foot;
