import React from 'react'
import Grid from '../Grid.js'

const GridScene = (props) => {
    const colors = ["#6377c8",
                    "#45b7ba",
                    "#ac57c3",
                    "#c24a8a",
                    "#c587c3"]

    return (
      <a-entity>
        <Grid position={[0,0,-90]}
              primitive={'box'}
              rotation={[0, 45, 0]}
              size={10}
              rows={4}
              cols={4}
              levels={4}
              colors={colors}
              spaceBetween={1}
        />
        <a-entity camera position="0 0 0" wasd-controls="acceleration:500"/>
      </a-entity>
    
       )
}



export default GridScene