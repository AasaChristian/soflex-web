
import styled from 'styled-components'


const blackOrWhite = 'white'


export const Exbox = styled.section`
    background-color: white;
    width: 90%;
    border: solid black 4px ;
    border-radius: 30%;
    margin-left: 5%;
    display: flex;
    justify-content: center;

    @media (max-width: 750px) {

      padding-bottom: 5px;
      margin-bottom: 2px;
    
    }
    `;

    export const ExName = styled.h2 `
    border-bottom: solid black 5px;
    display: flex;
    justify-content: center;
    `;
//////////////////////////////////////////////////////////////////////////////////////////////


    export const BoardCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 77%;
    border-radius: 2%;
    overflow-y: scroll;
    overflow-x: hidden;
    ;`

    export const LeftWall = styled.section`
    display: flex;
    flex-direction: row;
    background-color: ;
    border-left: solid #656176 1px;
    border-bottom: solid #656176 1px;
    border-top: solid #656176 1px;
    height: 20%;
    width: 100%;
    overflow-x: scroll;


    `;
    
   export const MainWall = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: ${blackOrWhite};
    width: 100%;
    height: 80%;
    border-radius: 4%;
    border: solid #656176 5px;
    `;
    export const ExboxCont = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
    overflow: scroll;
    margin-top: 2%;
    `;
    export const BackButton = styled.button`
    display: flex;
    justify-content: center;
    padding-top: 14%;
    background-color: black;
    font-size: 35px;
    width: 177px;
    border-radius: 40%;
    color: white;
    box-shadow: 2px 1px white;

    `;

    export const BackButtonCont = styled.div`
    display: flex;
    justify-content: center;
    `;

// Login 
export const SubmitButton = styled.button`
height: 10pc;
margin-top: 20%;
font-size: 50px;
`;

// Exercise List 

export const CenterText = styled.h2`
display: flex;
justify-content: center;
margin-top: 1px;
margin-bottom: 5px;
`;

export const ExListConstainer = styled.section`
border-left: solid black 2px;
border-right: solid black 2px;
border-bottom: solid black 1px;
border-top: solid black 1px;
background-color: white;
width: 90%;
max-width: 90%;
margin-left: 15px;
border-radius: 5%;
height: 3.5pc;
`;

// Regimen List
export const NavSection = styled.section`
display: flex;
justify-content: space-between;
`;

export const BorderBottom = styled.h3 `
border-bottom: solid black 5px;
`;

export const Constainer = styled.section`
border-left: solid black 2px;
border-right: solid black 2px;
border-bottom: solid black 1px;
border-top: solid black 1px;
background-color: white;
width: 90%;
max-width: 90%;
margin-left: 15px;
border-radius: 5%;
height: 3.5pc;
`;

// RunList 
export const RunListExbox = styled.section`
    background-color: white;
    width: 90%;
    border: solid black 4px ;
    border-radius: 30%;
    margin-left: 5%;
    display: flex;
    justify-content: center;
    height: 200px;

    @media (max-width: 750px) {

      padding-bottom: 5px;
      margin-bottom: 2px;
    
    }
    `;

    export const RunListBorderBottom = styled.h3 `
border-bottom: solid black 5px;
display: flex;
flex-direction: column;
justify-content: center;
font-size: 30px;
`;