
import styled from 'styled-components'


export const blackOrWhite = ['black','white']

// export const blackOrWhite = ['white','black']



export const Exbox = styled.section`
    background-color: #444347;
    width: 90%;
    border: solid black 4px ;
    border-radius: 5%;
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
    justify-content: space-evenly;
    width: 100%;
    height: 90%;
    border-radius: 2%;
    // overflow-y: scroll;
    overflow-x: hidden;

    @media (max-height: 750px) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      height: 90%;
      border-radius: 2%;
      overflow-y: scroll;
      overflow-x: hidden;

    
    };
    ;`

    export const LeftWall = styled.section`
    display: flex;
    flex-direction: row;
    background-color: white ;
    // border-left: solid #656176 1px;
    // border-bottom: solid #656176 1px;
    // border-top: solid #656176 1px;
    // height: 20%;
    width: 100%;
    // overflow-x: scroll;

    @media (max-height: 750px) {
      display: flex;
      flex-direction: row;
      background-color: black ;
      // border-left: solid #656176 1px;
      // border-bottom: solid #656176 1px;
      // border-top: solid #656176 1px;
      // height: 20%;
      width: 100%;
      // overflow-x: scroll;
    };

    @media (max-width: 500px) {
      z-index: 1;
      background: none ;
      height: 5%;

 ;
    }
    `;
    
   export const MainWall = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: ${blackOrWhite[0]};
    width: 100%;
    height: 70%;
    max-height: 80%;
    // border-radius: 4%;
    // border: solid #656176 2px;

    @media (max-height: 750px) {

      height: 66%;
      
    };

    
    @media (max-height: 680px) {

      height: 60%;
    
    };
    `;
    export const ExboxCont = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    overflow: scroll;
    margin-top: 2%;
    `;
    export const BackButton = styled.h1`
    display: flex;
    justify-content: center;
    // padding-top: 25%;
    // background-color: black;
    // width: 177px;
    // border-radius: 40%;
    // color: white;
    // box-shadow: 2px 1px white;
    // margin-right: 10px;
    // background-color: black;
    outline: none;
    border: none;
    flex-direction: column;
    color: black;

    @media (max-height: 750px) {

      display: flex;
      justify-content: center;
      // padding-top: 25%;
      // background-color: black;
      // width: 177px;
      // border-radius: 40%;
      // color: white;
      // box-shadow: 2px 1px white;
      // margin-right: 10px;
      // background-color: white;
      color: white;
      outline: none;
      border: none;
      flex-direction: column;
      z-index: 1;    
    }

    @media (max-width: 450px){
    color: white;
    }
    `;
    export const BackButtonText = styled.button`
        font-size: 35px;
        outline: none;
        border: none;
        background-color: white;
        display: flex;
        justify-content: center;
    `

    export const BackButtonCont = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 45%;
    
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
padding-bottom: 10px;
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
color: ${blackOrWhite[1]}
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
border: solid white 1px ;
border-radius: 3%;
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
  color: ${blackOrWhite[1]}`
;

export const PageScroll = styled.div`
height: 100%;
`;

// Run.js 
export const RunHeader = styled.div`
display: flex;
justify-Content: center;
// border: solid 5px black;
background: none;
height: 10%;
position: absolute;
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
border: solid 1px black;
border-radius: 2%;
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
    background-color: #444347;
    width: 95%;
    // border: solid black 4px ;
    border-radius: 5%;
    // margin-left: 5%;
    display: flex;
    justify-content: center;
    height: 150px;

    @media (max-width: 750px) {

      padding-bottom: 5px;
      margin-bottom: 2px;
    
    }
    `;

    export const RunListBorderBottom = styled.h3 `
border-bottom: solid white 5px;
border-right: solid white 3px;
border-radius: 12%;
display: flex;
flex-direction: column;
justify-content: center;
font-size: 30px;
color: white;
`;

// RUNSETS 


export const RunDetailCont = styled.div`
display: flex;
justify-content: space-evenly;
border: solid black 2px;
border-radius: 2%;
height: 120px;
width: 100%;
margin-bottom: 1%;
`;

export const RunInputeCont = styled.div`
display: flex;
justify-content: space-evenly;
border: solid black 2px;
border-radius: 2%;
height: 200px;
width: 100%;
`;

export const SetSection = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
`;

export const RunInputDiv = styled.div`
height: 100px;
`;

export const RunText = styled.p`
display: flex;
justify-content: center;
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

export const swapwallText = styled.h1`
color: ${blackOrWhite[1]};
`

// Exdetail 

export const ExCont = styled.section`
overflow-x: scroll;
width: 100%;
display: flex;
border: solid black 4px ;
`;

// Foot

export const FootCont = styled.section`

height: 60px;
max-height: 60px;


`;

export const FootBlack = styled.section`
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


export const FooterContTopLevel = styled.div`
z-index: 1;
bottom: 0;
width: 100%;
// position: fixed;
background-color: black;
height: 63px;
// opacity: 50%;

@media (max-width: 750px) {

  z-index: 1;
  bottom: 0;
  width: 100%;
  // position: fixed;
  background-color: black;
  height: 63px;
  opacity: 50%;

}
`;

// style={{zIndex: "1", bottom: "0", width: "100%", position: "fixed", backgroundColor: 'black', height: '63px', opacity: "50%"}}

//Head

export const HeadCont = styled.section`
// background-color: #cbc5da;
display: flex;
justify-content: space-around;
z-index: 1;
top: 0;
position: sticky;
width: 100%;
// border-radius: 10%;
// border: solid #656176 5px;
// border-bottom: solid #656176 5px;
`;