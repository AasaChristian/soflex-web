
import React from 'react'
import {FootCont, FootText} from './StyledComponent'


function Foot() {
// const FootCont = styled.section`
// background-color: black;
// height: 60px;
// max-height: 60px;


// `;

// const FootText = styled.h4`
// color: white;
// margin-bottom: 0;
// display:flex;
// justify-content: center;
// `;


  return (
<FootCont>
  <section style={{display: "flex", justifyContent:"center", height: '60px', zIndex: '1', background: 'none'}}>
  <div style={{display: "flex", flexDirection: "column", height: '60px', background: 'none'}}>
        <FootText>City Web Development</FootText>
    </div>
  </section>




</FootCont>
  );
}

export default Foot;
