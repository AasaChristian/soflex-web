
import styled from 'styled-components'





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
    width: inherit;
    height: 90%;
    border-radius: 2%;
    ;`

    export const LeftWall = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #F8F1FF;
    border-left: solid #656176 7px;
    border-bottom: solid #656176 5px;
    border-top: solid #656176 5px;
    
    width: 20%;


    `;
    
   export const MainWall = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: #F8F1FF;
    width: 80%;
    border-radius: 4%;
    border: solid #656176 5px;
    `;
    export const ExboxCont = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 80%;
    overflow: scroll;
    margin-top: 10%;
    `;
    export const BackButton = styled.button`
    height: 20%;
    padding-top: 10%;
    background-color: white;
    font-size: 15px;
    width: 100%;
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