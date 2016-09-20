import React from 'react'
import Grid from '../Grid.js'

const GridScene = (props) => {
  const colors = ["#c073a9",
                  "#3cb8b4",
                  "#ca48a0",
                  "#6987cb",
                  "#8962cd"]

    return (
      <a-entity>
        <Grid position={[0,0,-80]}
              primitive={'sphere'}
              rotation={[0, 45, 0]}
              size={10}
              rows={4}
              cols={4}
              levels={4}
              colors={colors}
        />
        <a-entity camera position="0 0 0"/>
      </a-entity>
    
       )
}



export default GridScene