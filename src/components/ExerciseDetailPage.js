import React from 'react'
import styled from 'styled-components'


function ExDetailsPage({exlist, match}) {

    const chosenExercise = exlist.find(
        filterFor => filterFor.name === match.params.exName
    )

    console.log(chosenExercise, 'chosenExercise')
const {key, name } = chosenExercise
  return (
<div key={key}>
  <h1>{name}</h1>
</div>
  );
}

export default ExDetailsPage;
