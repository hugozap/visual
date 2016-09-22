import React from 'react'
import Grid from '../Grid.js'

const GridScene2 = (props) => {
    const colors = ["#6377c8",
                    "#45b7ba",
                    "#ac57c3",
                    "#c24a8a",
                    "#c587c3"]

    return (
      <a-scene embedded style={{height:600}} >
        <Grid position={[0,0,-50]}
              primitive={'box'}
              rotation={[0, 45, 0]}
              size={10}
              rows={4}
              cols={4}
              levels={4}
              colors={colors}
              spaceBetween={1}
        />
        <a-entity camera position="20 20 10" wasd-controls="acceleration:500"/>
      </a-scene>
    
       )
}



export default GridScene2