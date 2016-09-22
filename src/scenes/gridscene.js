import React from 'react'
import Grid from '../Grid.js'

const GridScene = (props) => {
  const colors = ["#c073a9",
                  "#3cb8b4",
                  "#ca48a0",
                  "#6987cb",
                  "#8962cd"]

    return (
      <a-scene embedded style={{height:600}}>
        <Grid position={[0,-20,-70]}
              primitive={'sphere'}
              rotation={[0, 45, 0]}
              size={5}
              spaceBetween={5}
              rows={4}
              cols={4}
              levels={4}
              colors={colors}
        />
        <a-entity camera look-controls wasd-controls position="10 0 0"/>
      </a-scene>
    
       )
}



export default GridScene