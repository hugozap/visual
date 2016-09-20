import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'aframe';
import 'aframe-extras';
import {Scene, Entity, Sky} from 'aframe-react'
import SceneContainer from './SceneContainer.js'
import '../node_modules/tachyons/css/tachyons.css'
import BasicScene from './scenes/basic.js'
import GridScene from './scenes/gridscene.js'
import GridScene2 from './scenes/gridscene2.js'

class App extends Component {
  
  render() {
    const sceneStyle = {
      height: 400
    }

    return (
      <div className="App">
        
        <h2> Escena básica (setup a-frame) </h2>
        <pre className="tl p2">
         {`
           <a-entity>
             <a-entity geometry="primitive:sphere;radius:10"
              material="color:red"
              position="0 0 -50"/>

             <a-entity camera position="0 0 0"/>
           </a-entity>
        `}
        </pre>
        

        <SceneContainer height={400}>
          <BasicScene/>
        </SceneContainer>
        <hr/>
        <h2> Componentes a-frame como atributos</h2>

        
        <pre className="tl p2">
         {`
           <a-entity>
             <a-entity geometry="primitive:sphere;radius:10"
              material="color:red"
              position="0 0 -50"/>

              <a-entity geometry="primitive:sphere;radius:10"
               material="color:#CCFF66"
               position="10 0 -50"/>

               <a-entity geometry="primitive:sphere;radius:10"
                material="color:red"
                position="20 0 -50"/>

             <a-entity camera look-controls position="0 0 0"/>
           </a-entity>
        `}
        </pre>
       

        (Use el mouse para rotar la cámara)
        <SceneContainer height={400}>
          <a-entity>
            <a-entity geometry="primitive:sphere;radius:10"
             material="color:red"
             position="0 0 -50"/>

             <a-entity geometry="primitive:sphere;radius:10"
              material="color:#CCFF66"
              position="10 0 -50"/>

              <a-entity geometry="primitive:sphere;radius:10"
               material="color:red"
               position="20 0 -50"/>

            <a-entity camera look-controls position="0 0 0"/>
          </a-entity>
        </SceneContainer>

        <h2>Ej Componente React (Grid)</h2>

        <pre className="tl p2">
          {`
            <a-entity>
            <Grid position={[0,0,-80]}
                  primitive={'sphere'}
                  rotation={[0, 45, 0]}
                  size={20}
                  rows={4}
                  cols={4}
                  levels={4}
                  colors={colors}
            />
            <a-entity camera position="0 0 0"/>
          </a-entity>`}
        </pre>
        <SceneContainer height={600}>
          <GridScene/>
        </SceneContainer>

        <h2>wasd-controls</h2>
        <pre className="tl p2">
          {`
            <a-entity>
              <Grid position={[0,0,-80]}
                    primitive={'box'}
                    rotation={[0, 45, 0]}
                    size={10}
                    rows={5}
                    cols={5}
                    levels={5}
                    colors={colors}
              />
              <a-entity camera position="0 0 0" wasd-controls="acceleration:500"/>
            </a-entity>
          `}
        </pre>
        <SceneContainer height={600}>
          <GridScene2/>
        </SceneContainer>


      </div>
    );
  }
}

export default App;
