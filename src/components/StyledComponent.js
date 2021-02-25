
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
    max-height: 80%;
    border-radius: 4%;
    border: solid #656176 5px;
    `;
    export const ExboxCont = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    overflow: scroll;
    margin-top: 2%;
    `;
    export const BackButton = styled.button`
    display: flex;
    justify-content: center;
    padding-top: 25%;
    background-color: black;
    font-size: 35px;
    width: 177px;
    border-radius: 40%;
    color: white;
    box-shadow: 2px 1px white;
    margin-right: 10px;

    `;

    export const BackButtonCont = styled.div`
    display: flex;
    justify-content: center;
    
    `;

// Login 
export const SubmitButton = styled.button`
height: 10pc;
margin-top: 10%;
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
// Regimen Details

export const TitleCont = styled.div`
display: flex;
justify-content: center;
margin-bottom: 20px;
border: solid red 4px ;
`;
export const TitleInner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;
export const ExboxREGDE = styled.section`
display: flex;
flex-direction: row;
justify-content: center;
background-color: white;
width: 200px;
height: 200px;
border: solid black 4px ;
border-radius: 10%;

@media (max-width: 750px) {

  padding-bottom: 15px;


}
`;

export const InnerBox = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 200px;
border: solid red 4px ;
`;

export const ExContREGDE = styled.section`
overflow-x: scroll;
width: 100%;
display: flex;
border: solid black 4px ;
`;

export const CenterTextREGDE = styled.h4`
  padding-left: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 30px;
`;

export const PageScroll = styled.div`
height: 100%;
`;

// Run.js 
export const RunHeader = styled.div`
display: flex;
justify-Content: center;
border: solid 5px black;
`;

export const RunCardCont = styled.div`
display: flex;
flex-direction: column;
height: 500px;
`;

export const RunExerciseNameCont = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
border: solid 5px red;
`;

export const RunExerciseName = styled.h1`
font-size: 30px;
`;

export const SetsCont = styled.section`
height: 100%;
width: 100%;
overflow-x: scroll;
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

// RUNSETS 


export const RunDetailCont = styled.div`
display: flex;
justify-content: space-evenly;
border: solid green 5px;
height: 150px;
width: 100%;
`;

export const RunInputeCont = styled.div`
display: flex;
justify-content: space-evenly;
border: solid red 5px;
height: 200px;
width: 100%;
`;

export const SetSection = styled.section`
display: flex;
flex-direction: column;
`;

export const RunInputDiv = styled.div`
height: 100px;
`;

export const RunText = styled.p`
font-size: 50px;
margin: 0 0 0 0;
`;

export const RunInputText = styled.p`
font-size: 50px;
margin: 5px;
`;// WallPost 

export const PostCont = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
`;

// Exdetail 

export const ExCont = styled.section`
overflow-x: scroll;
width: 100%;
display: flex;
border: solid black 4px ;
`;

// Foot

export const FootCont = styled.section`
background-color: black;
height: 60px;
max-height: 60px;


`;

export const FootText = styled.h4`
color: white;
margin-bottom: 0;
display:flex;
justify-content: center;
`;

//Head

export const HeadCont = styled.section`
background-color: #F8F1FF;
display: flex;
justify-content: space-around;
border-radius: 10%;
border: solid #656176 5px;
border-bottom: solid #656176 5px;
`;