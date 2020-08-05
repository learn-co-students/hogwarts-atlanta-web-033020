import React from 'react'
import HogTile from './HogTile'

const HogContainer = (props) => {

    const HogMap = hogs => hogs.map(hog => {
        return <HogTile hogObj={hog} />
    })
    
    return(
        <div>
            {HogMap(props.hogs)}
        </div>
    )
}
export default HogContainer