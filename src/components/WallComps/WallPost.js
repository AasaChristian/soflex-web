import React, {useState} from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'

function WallPost(props) {
    const {logs, userIdState, submission, subIndex} = props
//////////////////////////////////////////////////////////////////////////

const {LoggedReps, LoggedSet, LoggedWeight, name, post, dateAdded} = submission
// console.log(subIndex, "subIndex")
// console.log(dateAdded, "dateAdded")

const [curEx, setCurEx] = useState(null)

// console.log(curEx,"curEx")
const PostCont = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
`;

const PostPair = styled.div`
display: flex;
justify-content: space-evenly;
height: 20px;
`;


const HeadPair = styled.div`
display: flex;
justify-content: space-evenly;
height: 20px;
font-size: 25px;
`;
  return (

<PostCont>

  <HeadPair 
  onClick={(e) => {
    e.preventDefault()
    setCurEx(subIndex)
}}> Date: {String(dateAdded[5]) + String(dateAdded[6])} / {String(dateAdded[8]) + String(dateAdded[9])}   {name} </HeadPair>

<div style={curEx === subIndex? {display: "initial"} : {display: "none"}}>
    <PostPair>
  <p>Exercise </p>
  <p>{name}</p>
    </PostPair>

    <div>
<PostPair>
<p>Set</p>
  <p>{LoggedSet}</p>
</PostPair>

<PostPair>
<p>weight</p>
  <p>{LoggedWeight}</p>
</PostPair>

<PostPair>
<p>reps</p>
  <p>{LoggedReps}</p>
</PostPair>
    </div>

    <p>{post}</p>
</div>
</PostCont>
  )
  }
const mapStateToProps = state => {
	return {
        exercises: state.exercises,
        regimen: state.regimen,
        regTempName: state.regTempName,
        regimenName: state.regimenName,
        userIdState: state.userIdState,
        logs: state.logs
	};
};

export default connect(mapStateToProps, {})(WallPost);
