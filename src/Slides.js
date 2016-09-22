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
import functional_ui from './img/functional_ui.png'

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
          <h1 className="f1">El impacto de nuestras interfaces</h1>
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
          <div className="dt w-100 h-100">
            <div className="dtc w-25">
              <iframe src="http://hugozap.neocities.org/x99/" width="100%" height="400px" frameBorder="0"></iframe>
            </div>
            <div className="dtc w-75 v-top">
               <h1 className="f2">Animación basada en física (springs)</h1>
               <p className="quote">
               For 95% of use-cases of animating components, 
               we don't have to resort to using hard-coded easing curves and duration.
               Set up a stiffness and damping for your UI element,
               and let the magic of physics take care of the rest.
               <s className="bold">Cheng Lou (Autor de React-Motion)</s>
              </p>
               <ul>
                 <li>Basada en el modelo matemático</li>
                 <li>Parámetros: Rigidez, elasticidad </li>
                 <li>Parámetros: Rigidez, elasticidad </li>
                 <li>NO establecemos duración (esto afectaría el realismo de la animación) </li>
               </ul>
               <a href="http://chenglou.github.io/react-motion/demos/demo5-spring-parameters-chooser/">Spring Parameters chooser</a>
            </div>
          </div>
        </Slide>

        <Slide>
          <h1 className="f2">Paradigma Funcional En UI</h1>
          <img src={functional_ui} alt="UI Funcional"/>
          <p>En la Web es Popularizado por React</p>
          <p className="quote">
            A diferencia del modelo tradicional, con este enfoque
            NO modificamos la UI directamente. Solo podemos modificar
            el estado y dejamos que el sistema actualice la vista.
          </p>

          <ul>
            <li>Separación clara del estado y la vista</li>
            <li>Facilita la composición de elementos de UI</li>
            <li>Podemos re-crear la vista a partir del estado en cualquier momento.</li>
            <li>Es más fácil de razonar!</li>
            <li>Es más divertido</li>
          </ul>

        </Slide>

        <Slide>
          <h1 className="f1">Usando <span className="strike">DOM</span> WebGL y 3D como vista</h1>
          <div className="dt">
            <div className="dtc">
              <iframe src="/basic_aframe" width="100%" height="400px" frameBorder="0"></iframe>
            </div>
            <div className="dtc v-top">
              <p className="f2">
                Mozilla A-Frame: VR y 3D declarativo
              </p>
              <pre className="tl p2 f3">
               {`
                 <a-entity>
                   <a-entity geometry="primitive:sphere;radius:10"
                    material="color:red"
                    position="0 0 -50"/>

                   <a-entity camera position="0 0 0"/>
                 </a-entity>
              `}
              </pre>
            </div>
          </div>
        
        </Slide>

        <Slide>
          <h1 className="f1">Usando <span className="strike">DOM</span> WebGL y 3D como vista</h1>
          <div className="dt">
            <div className="dtc">
              <iframe src="/grid1" width="100%" height="400px" frameBorder="0"></iframe>
            </div>
            <div className="dtc v-top">
              <h2> Componentes a-frame como atributos</h2>
              <pre className="tl p2">
              {`
                <Grid position={[0,-20,-70]}
                  primitive={'sphere'}
                  rotation={[0, 45, 0]}
                  size={10}
                  rows={4}
                  cols={4}
                  levels={4}
                  colors={colors}
                />
              `}
              </pre>
            </div>
          </div>
        </Slide>

        <Slide>
          <h1 className="f1">Usando <span className="strike">DOM</span> WebGL y 3D como vista</h1>
          <div className="dt">
            <div className="dtc">
              <iframe src="/grid2" width="100%" height="400px" frameBorder="0"></iframe>
            </div>
            <div className="dtc v-top">
              <h2> Componentes a-frame como atributos</h2>
              <pre className="tl p2">
              {`
                <a-scene embedded style={{height:400}}>
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
              </a-scene>
              `}
              </pre>
            </div>
          </div>
        </Slide>

        <Slide>
          <h2> Gif grid</h2>
          <GifGridScene/>
        </Slide>

      </div>
    );
  }
}

export default Slides;
