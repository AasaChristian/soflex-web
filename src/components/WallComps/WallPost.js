import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'

function WallPost(props) {
    const {logs, userIdState, submission} = props
//////////////////////////////////////////////////////////////////////////

const {LoggedReps, LoggedSet, LoggedWeight, name, post, uswername} = submission

const PostCont = styled.section`
display: flex;
flex-direction: column;
justify-content: center;

`;

const PostPair = styled.div`
display: flex;
justify-content: space-evenly;
`;
  return (

<PostCont>

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
