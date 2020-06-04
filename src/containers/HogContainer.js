import React from 'react';
import Hog from '../components/Hog'

const generateHogs = hogs => {
  return hogs.map(hog => {
    return (
      <Hog
        key={hog.name}
        name={hog.name}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        highestMedalAchieved={hog['highest medal achieved']}
      />
    )
  })
}

const HogContainer = props => {
  return (
    <div className='hog-container'>
      {generateHogs(props.hogs)}
    </div>
  )
}

export default HogContainer;