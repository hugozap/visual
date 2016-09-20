import React from 'react'
import 'aframe'
import SceneContainer from '../SceneContainer.js'

const Scene = (props) => 

      <a-entity>
        <a-entity geometry="primitive:sphere;radius:10"
         material="color:red"
         position="0 0 -50"
        />

        <a-entity camera position="0 0 0"/>
      </a-entity>



export default Scene