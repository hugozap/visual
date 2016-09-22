import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/webcomponents.js/webcomponents-lite.js'
import 'aframe';
import 'aframe-extras';
import {Scene, Entity, Sky} from 'aframe-react'
import SceneContainer from './SceneContainer.js'
import '../node_modules/tachyons/css/tachyons.css'
import BasicScene from './scenes/basic.js'
import GridScene from './scenes/gridscene.js'
import GridScene2 from './scenes/gridscene2.js'
import GifGridScene from './scenes/GifGridScene.js'
import SpheresScene from './scenes/Spheres.js'
import Slide from './Slide.js'

class Slides extends Component {
  
  render() {
    const sceneStyle = {
      height: 400
    }

    return (
      <div className="App">
        
        <Slide>
          <h1 className="f1">Dándole vida a nuestra UI</h1>
          <div>
            @hugozap
          </div>
        </Slide>

        <Slide>
          <h1 className="f1">Motivación</h1>
          <p>Re-pensar cómo influyen nuestras interfaces en los usuarios de la Web</p>
          <h2 className="f2">Oportunidades</h2>
          <ul>
            <li>Educación</li>
            <li>Arte</li>
            <li>Experiencias Interactivas (WebVR) </li>
            <li>Accesibilidad</li>
          </ul>  
          <p className="quote">
            Tenemos browsers mucho más potentes. Podemos usarlos
            para mejorar la experiencia de nuestros usuarios
          </p>
        </Slide>

        <Slide>
          <h1 className="f1">Desafíos de nuestra UI</h1>
          <ul>
            <li>Convenciones visuales artificiales impuestas al usuario</li>
            <li>Saltos inesperados</li>
            <li>Inconsistencia (color, espacio)</li>
            <li>Poco contexto para realizar una acción </li>
            <li>Mucho ruido (distracción de la tarea a realizar) </li>
          </ul>
          <h2 className="f2">Nuestras herramientas</h2>
          <ul>
            <li>Colores</li>
            <li>Transiciones</li>
            <li>Animaciones</li>
            <li>3D</li>
            <li>Audio</li>
          </ul>
          <p className="quote">
            El cerebro humano ha evolucionado para interpretar información
            espacial. Podemos aprovechar esto para crear una mejor experiencia.
          </p> 
        </Slide>

        <Slide>
          <h1 className="f1">Animación</h1>
          <div className="dt">
            <div className="w-50 dtc">
                <iframe src="/test" width="100%" height="100%" frameBorder="0"></iframe>
            </div>
            <div className="w-50 dtc v-top">
              <p className="quote">
                ¿Cómo se mueven las cosas en la naturaleza? 
              </p>

              <p> Animaciones y transiciones que "se sientan bien"</p>
              <p> Los saltos pueden ser problemáticos</p>
              
              <h1 className="f2">Variables para animar según nuestra intención</h1>
              <ul>
                <li>Posición (apariciones)</li>
                <li>Tamaño (énfasis, apariciones)</li>
                <li>Color (énfasis)</li>
                <li>Transparencia (apariciones</li>
                
              </ul>
              <ul>
                <li>Bezier</li>
                <li>Basadas en modelos de física (Springs)</li>
              </ul>
            </div>
          </div>
          

           </Slide>

        <Slide>
          <h1 className="f2">También podemos animar la cámara</h1>
          <iframe src="http://hugozap.neocities.org/x99/" width="100%" height="400px" frameBorder="0"></iframe>

        </Slide>

        <Slide>
          <h1 className="f2">Paradigma Funcional En UI</h1>

        </Slide>
        
        
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

        <h2> Gif grid</h2>
        <GifGridScene/>

      </div>
    );
  }
}

export default Slides;
