import React from 'react'
import styled from 'styled-components'


function Head() {

    const Button = styled.button`
    `;
    const HeadCont = styled.section`
    background-color: grey;
    display: flex;
    justify-content: space-around;
    `;

    





  return (
    <HeadCont>
        <Button> Home </Button>
        <h1>SoFlex</h1>
        <Button>Log Out</Button>
    </HeadCont>
  );
}

export default Head;
