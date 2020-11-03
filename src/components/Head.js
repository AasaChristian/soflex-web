import React from 'react'
import styled from 'styled-components'


function Head() {

    const Button = styled.button`
    `;
    const HeadCont = styled.section`
    background-color: #F8F1FF;
    display: flex;
    justify-content: space-around;
    border-radius: 10%;
    border: solid #656176 5px;
    border-bottom: solid #656176 5px;
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
